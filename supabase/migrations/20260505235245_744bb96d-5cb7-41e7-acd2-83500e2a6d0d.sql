
-- =========================================================
-- AI Assistant: knowledge base, settings, conversations, roles
-- =========================================================

-- Roles enum + table (separate from profiles, per security best practice)
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins manage roles" ON public.user_roles;
CREATE POLICY "Admins manage roles"
ON public.user_roles FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- updated_at helper
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Knowledge articles
CREATE TABLE IF NOT EXISTS public.ai_knowledge_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text,
  tags text[] DEFAULT '{}',
  published boolean NOT NULL DEFAULT false,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_knowledge_articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read published articles" ON public.ai_knowledge_articles;
CREATE POLICY "Public can read published articles"
ON public.ai_knowledge_articles FOR SELECT TO anon, authenticated
USING (published = true);

DROP POLICY IF EXISTS "Admins manage articles" ON public.ai_knowledge_articles;
CREATE POLICY "Admins manage articles"
ON public.ai_knowledge_articles FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP TRIGGER IF EXISTS trg_kb_updated_at ON public.ai_knowledge_articles;
CREATE TRIGGER trg_kb_updated_at
BEFORE UPDATE ON public.ai_knowledge_articles
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Assistant settings (single-row table)
CREATE TABLE IF NOT EXISTS public.ai_assistant_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seasonal_message_enabled boolean NOT NULL DEFAULT false,
  seasonal_message_text text DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT seasonal_text_len CHECK (char_length(coalesce(seasonal_message_text,'')) <= 1000)
);

ALTER TABLE public.ai_assistant_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read settings" ON public.ai_assistant_settings;
CREATE POLICY "Public can read settings"
ON public.ai_assistant_settings FOR SELECT TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "Admins manage settings" ON public.ai_assistant_settings;
CREATE POLICY "Admins manage settings"
ON public.ai_assistant_settings FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP TRIGGER IF EXISTS trg_settings_updated_at ON public.ai_assistant_settings;
CREATE TRIGGER trg_settings_updated_at
BEFORE UPDATE ON public.ai_assistant_settings
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

INSERT INTO public.ai_assistant_settings (seasonal_message_enabled, seasonal_message_text)
SELECT false, ''
WHERE NOT EXISTS (SELECT 1 FROM public.ai_assistant_settings);

-- Conversations
CREATE TABLE IF NOT EXISTS public.ai_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  messages jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_ai_conversations_session ON public.ai_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_created ON public.ai_conversations(created_at DESC);

ALTER TABLE public.ai_conversations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins read conversations" ON public.ai_conversations;
CREATE POLICY "Admins read conversations"
ON public.ai_conversations FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- (No public insert policy — edge function uses service role to write.)

DROP TRIGGER IF EXISTS trg_conv_updated_at ON public.ai_conversations;
CREATE TRIGGER trg_conv_updated_at
BEFORE UPDATE ON public.ai_conversations
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Seed knowledge articles (drawn from project source of truth)
INSERT INTO public.ai_knowledge_articles (title, content, category, tags, published)
VALUES
(
  'About proHIRE resources',
  E'proHIRE resources is an Atlanta-based executive talent and growth advisory firm founded by Chris Betz. We partner with founder-led, PE-backed, and enterprise leadership teams to place senior talent, embed fractional executives, and accelerate revenue. Our approach is human-first, AI-enhanced, and outcome-accountable. We serve clients nationally and internationally; engagements are remote or on-site.',
  'company',
  ARRAY['about','overview','company'],
  true
),
(
  'Our four practices',
  E'We operate four integrated practices:\n\n- **Executive Search & Leadership Advisory** — retained search and fractional CXOs who have scaled comparable businesses. C-suite, VP, and board-track placements. See [Executive Search](/services/executive-search).\n- **Strategic Talent & Workforce Solutions** — specialized hiring across technology, finance, and operations; RPO, contract, contract-to-hire. See [Talent Solutions](/services/talent-solutions).\n- **Revenue & Operational Acceleration** — fractional business development, operational infrastructure, and partnership development. See [Growth Acceleration](/services/growth-acceleration).\n- **Career Advisory** — for individual senior leaders navigating transitions. See [Career Advisory](/services/career-advisory).\n\nAll four overlap by design — most engagements draw on more than one.',
  'services',
  ARRAY['services','practices','offerings'],
  true
),
(
  'How to engage us',
  E'Most engagements begin with a confidential 30-minute consultation. There is no cost or obligation. To start a conversation:\n\n- Submit the form on the [Contact page](/contact).\n- Email **info@prohireresources.com**.\n- Call **678.697.2833**.\n\nWe respond within one business day with a candid view of how — and whether — we can help. We will tell you directly when we are not the right partner for a given need.',
  'contact',
  ARRAY['contact','engagement','consultation'],
  true
),
(
  'Who we work with',
  E'We work with leadership teams across stages and sizes:\n\n- Founder-led companies (Series A through growth stage)\n- PE-backed portfolio companies\n- Enterprise and Fortune 500 leadership teams\n\nClient revenue ranges from approximately **$15M to $150B**. Our team has supported clients through experience at Amazon, Pyramid Consulting, Stellar Consulting Solutions, Randstad, and Kelly. Typical time to first measurable impact is **30–60 days**.',
  'clients',
  ARRAY['clients','industries','stages'],
  true
),
(
  'About founder Chris Betz',
  E'Chris Betz is the founder and CEO of proHIRE resources LLC. He is based in Atlanta and has spent twenty years at the intersection of executive search, growth acceleration, and senior talent strategy. Prior leadership roles include Amazon, Pyramid Consulting, Stellar Consulting Solutions, Randstad, and Kelly. Affiliations include C-Level Advisory and The Curated Network™. Civic involvement includes Inspiredu (Emeritus) and FinTech Atlanta. Read more on the [About page](/about).',
  'team',
  ARRAY['founder','chris betz','leadership','about'],
  true
);
