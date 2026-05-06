
-- 1) Lock down has_role execute: revoke from anon, grant only to authenticated.
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

-- 2) Storage policies for the private 'videos' bucket: admins only.
DROP POLICY IF EXISTS "Admins read videos" ON storage.objects;
CREATE POLICY "Admins read videos"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins upload videos" ON storage.objects;
CREATE POLICY "Admins upload videos"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins update videos" ON storage.objects;
CREATE POLICY "Admins update videos"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins delete videos" ON storage.objects;
CREATE POLICY "Admins delete videos"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

-- 3) Make user_roles INSERT explicit: only admins can grant roles.
DROP POLICY IF EXISTS "Only admins can insert roles" ON public.user_roles;
CREATE POLICY "Only admins can insert roles"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Only admins can update roles" ON public.user_roles;
CREATE POLICY "Only admins can update roles"
ON public.user_roles FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Only admins can delete roles" ON public.user_roles;
CREATE POLICY "Only admins can delete roles"
ON public.user_roles FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
