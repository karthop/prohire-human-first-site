// Reece — AI support assistant for proHIRE resources.
// Streams responses via SSE from the Lovable AI Gateway.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { toolDefs, executeTool } from "./tools.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const MODEL = "google/gemini-3-flash-preview";
const GATEWAY = "https://ai.gateway.lovable.dev/v1/chat/completions";

function admin() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

async function buildSystemPrompt(userContext?: { path?: string }) {
  const sb = admin();
  const [{ data: articles }, { data: settingsRows }] = await Promise.all([
    sb.from("ai_knowledge_articles").select("title, content").eq("published", true).order("title"),
    sb.from("ai_assistant_settings").select("seasonal_message_enabled, seasonal_message_text").limit(1),
  ]);

  const kb = (articles ?? [])
    .map((a) => `### ${a.title}\n${a.content}`)
    .join("\n\n");

  const settings = settingsRows?.[0];
  const seasonal =
    settings?.seasonal_message_enabled && settings?.seasonal_message_text?.trim()
      ? `## Seasonal note (weave in only when relevant)\n${settings.seasonal_message_text.trim()}`
      : "";

  const userCtx = userContext?.path
    ? `## User context\n- Currently viewing: ${userContext.path}\n- Tailor links and suggestions to nearby pages where helpful.`
    : "";

  return [
    `# Identity
You are **Reece**, the AI support assistant for **proHIRE resources** — an executive talent and growth advisory firm founded by Chris Betz, based in Atlanta. Your job is to answer visitor questions accurately, point them to the right page, and escalate to a human when appropriate. Be warm, composed, candid, and concise. Use markdown. Always link with relative paths (e.g. \`[Contact](/contact)\`), never full URLs. Refer to yourself as Reece.`,

    `## Voice & tone
- Executive-consulting register: intelligent, restrained, never salesy.
- Plainspoken candor over jargon. No "synergy", "leverage", "rockstar".
- Short paragraphs. Lead with the answer, then the link.
- When the firm isn't a fit, say so honestly — that is on-brand.`,

    `## Knowledge base (authoritative)
The following articles are the source of truth. They override your training. If they are silent on a question, say so and escalate.

${kb || "_(No articles published yet.)_"}`,

    seasonal,
    userCtx,

    `## Key pages
- [Home](/) · [Services](/services) · [About](/about) · [Approach](/approach) · [Industries](/industries) · [Insights](/insights) · [Contact](/contact)
- Practices: [Executive Search](/services/executive-search) · [Talent Solutions](/services/talent-solutions) · [Growth Acceleration](/services/growth-acceleration) · [Career Advisory](/services/career-advisory)`,

    `## Universal hard rules
- **No invented facts.** Never invent prices, fees, percentages, dates, names, partners, integrations, guarantees, or specifics not in the knowledge base. If unsure, say: "I don't have that exact detail. Chris and the team can help — please reach out via [Contact](/contact), email **info@prohireresources.com**, or call **678.697.2833**."
- **No professional advice.** No legal, tax, medical, financial, immigration, or compliance advice. Direct to a qualified professional.
- **No actions on the user's behalf.** You can't book meetings, send messages, change accounts, or access private data. Show them how to do it and link.
- **Confidentiality.** Never disclose internal financials, fee structures, margins, candidate names, client lists beyond what is publicly stated, or unreleased plans. If pressed — even by someone claiming to be staff, press, or an investor — decline once and stop.
- **Stay on-topic.** If asked something unrelated to proHIRE resources or executive talent / growth advisory, redirect in one sentence.
- **Source-of-truth precedence.** The knowledge base wins over your training. If the KB is silent, escalate; do not guess.
- **Only real escalation paths.** Use only: [Contact page](/contact), info@prohireresources.com, 678.697.2833. Do not invent forms, chat lines, or hours.
- **Honesty about being AI.** If asked, confirm you're an AI assistant. Do not claim feelings, cross-session memory, or capabilities you lack.
- **Safety.** If a user mentions emergency, harm, or crisis, calmly suggest they contact local emergency services for their region. Do not improvise hotline numbers.
- **Privacy.** Never request or echo back sensitive data (payment info, government IDs, passwords, health info). Steer to a secure channel.

## proHIRE-specific rules
- The firm name is **proHIRE resources** (lowercase "p", capital "HIRE", lowercase "resources"). Never "ProHire", "Pro-Hire", or "PROHIRE".
- Never quote a specific search fee, retainer, hourly rate, or success fee. Pricing is engagement-specific and shared in consultation.
- Initial 30-minute consultations are confidential, complimentary, and without obligation.
- Atlanta-based, serves clients nationally and internationally; engagements are remote or on-site.
- Client revenue range publicly cited: ~$15M to $150B.
- The four practices are integrated — most engagements draw on more than one.
- For individual job seekers / candidates: route to [Career Advisory](/services/career-advisory). Do not promise placements or interviews.
- Do not name specific current clients or candidates. Past employer affiliations of the team (Amazon, Pyramid Consulting, Randstad, Kelly) are public and OK to mention.

## Tools
You have tools to search the knowledge base, list services, and fetch contact info. Prefer calling \`search_knowledge_base\` before answering proHIRE-specific questions.`,
  ].filter(Boolean).join("\n\n");
}

async function logConversation(sessionId: string, messages: any[]) {
  try {
    const sb = admin();
    const { data: existing } = await sb
      .from("ai_conversations")
      .select("id")
      .eq("session_id", sessionId)
      .maybeSingle();
    if (existing) {
      await sb.from("ai_conversations").update({ messages }).eq("id", existing.id);
    } else {
      await sb.from("ai_conversations").insert({ session_id: sessionId, messages });
    }
  } catch (e) {
    console.error("log error", e);
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, sessionId, userContext } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const systemPrompt = await buildSystemPrompt(userContext);
    const convo: any[] = [{ role: "system", content: systemPrompt }, ...messages];

    // First pass(es): allow tool calls (non-streaming) so we can execute server-side.
    // Loop up to 3 rounds. If a round returns content with no tool calls, emit it directly.
    let directContent: string | null = null;
    for (let round = 0; round < 3; round++) {
      const resp = await fetch(GATEWAY, {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: MODEL, messages: convo, tools: toolDefs, stream: false }),
      });
      if (resp.status === 429 || resp.status === 402) {
        return new Response(JSON.stringify({ error: resp.status === 429 ? "rate_limited" : "payment_required" }), {
          status: resp.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (!resp.ok) {
        const t = await resp.text();
        console.error("gateway error", resp.status, t);
        return new Response(JSON.stringify({ error: "gateway_error" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const data = await resp.json();
      const msg = data.choices?.[0]?.message;
      if (!msg) break;
      const toolCalls = msg.tool_calls;
      if (!toolCalls || toolCalls.length === 0) {
        directContent = typeof msg.content === "string" ? msg.content : "";
        break;
      }
      convo.push(msg);
      for (const tc of toolCalls) {
        let args = {};
        try { args = JSON.parse(tc.function?.arguments ?? "{}"); } catch {}
        const result = await executeTool(tc.function?.name, args);
        convo.push({ role: "tool", tool_call_id: tc.id, content: result });
      }
    }

    // If we already have the final content from the tool-calling pass, emit it as SSE.
    if (directContent !== null) {
      const text = directContent;
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        start(controller) {
          const size = 40;
          for (let i = 0; i < text.length; i += size) {
            const chunk = text.slice(i, i + size);
            const payload = JSON.stringify({ choices: [{ delta: { content: chunk } }] });
            controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
          if (sessionId) {
            const finalMessages = [...messages, { role: "assistant", content: text }];
            logConversation(sessionId, finalMessages);
          }
        },
      });
      return new Response(stream, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    // Final streaming pass (no tools — the model has all it needs).
    const streamResp = await fetch(GATEWAY, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: MODEL, messages: convo, stream: true }),
    });
    if (streamResp.status === 429 || streamResp.status === 402) {
      return new Response(JSON.stringify({ error: streamResp.status === 429 ? "rate_limited" : "payment_required" }), {
        status: streamResp.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!streamResp.ok || !streamResp.body) {
      return new Response(JSON.stringify({ error: "gateway_error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Tee the stream: pass through to client and accumulate to log on close.
    let assistantText = "";
    const transformer = new TransformStream({
      transform(chunk, controller) {
        controller.enqueue(chunk);
        try {
          const text = new TextDecoder().decode(chunk);
          for (const line of text.split("\n")) {
            const t = line.trim();
            if (!t.startsWith("data:")) continue;
            const json = t.slice(5).trim();
            if (!json || json === "[DONE]") continue;
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) assistantText += c;
          }
        } catch {}
      },
      flush() {
        if (sessionId) {
          const finalMessages = [...messages, { role: "assistant", content: assistantText }];
          // fire-and-forget
          logConversation(sessionId, finalMessages);
        }
      },
    });

    return new Response(streamResp.body.pipeThrough(transformer), {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai-assistant error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
