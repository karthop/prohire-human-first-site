// Tool definitions + executors for Reece (proHIRE resources AI assistant).
// Server-side only. Tools query the public knowledge base / settings.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

export const toolDefs = [
  {
    type: "function",
    function: {
      name: "search_knowledge_base",
      description:
        "Search proHIRE resources' authoritative knowledge base for an answer. Use this whenever a visitor asks about services, pricing posture, contact info, the founder, clients, process, or anything proHIRE-specific.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "A short search query, e.g. 'fractional CXO pricing' or 'how to contact'.",
          },
        },
        required: ["query"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "list_services",
      description: "List the four proHIRE practices with their relative routes.",
      parameters: { type: "object", properties: {}, additionalProperties: false },
    },
  },
  {
    type: "function",
    function: {
      name: "get_contact_info",
      description: "Return the official contact channels for proHIRE resources.",
      parameters: { type: "object", properties: {}, additionalProperties: false },
    },
  },
];

function admin() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

export async function executeTool(name: string, args: any): Promise<string> {
  try {
    if (name === "search_knowledge_base") {
      const q = String(args?.query ?? "").toLowerCase();
      const { data, error } = await admin()
        .from("ai_knowledge_articles")
        .select("title, content, category, tags")
        .eq("published", true);
      if (error) throw error;
      const scored = (data ?? [])
        .map((a) => {
          const hay = `${a.title}\n${a.content}\n${(a.tags || []).join(" ")}\n${a.category ?? ""}`.toLowerCase();
          const tokens = q.split(/\s+/).filter(Boolean);
          const score = tokens.reduce((s, t) => s + (hay.includes(t) ? 1 : 0), 0);
          return { ...a, score };
        })
        .filter((a) => a.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);
      if (scored.length === 0) {
        return JSON.stringify({ matches: [], note: "No knowledge-base article matched. Escalate to /contact." });
      }
      return JSON.stringify({
        matches: scored.map((a) => ({ title: a.title, content: a.content })),
      });
    }

    if (name === "list_services") {
      return JSON.stringify({
        services: [
          { name: "Executive Search & Leadership Advisory", path: "/services/executive-search" },
          { name: "Strategic Talent & Workforce Solutions", path: "/services/talent-solutions" },
          { name: "Revenue & Operational Acceleration", path: "/services/growth-acceleration" },
          { name: "Career Advisory", path: "/services/career-advisory" },
        ],
      });
    }

    if (name === "get_contact_info") {
      return JSON.stringify({
        email: "info@prohireresources.com",
        phone: "678.697.2833",
        contact_page: "/contact",
        principal: "Chris Betz, CEO",
        office: "Atlanta, Georgia (national & international)",
        response_time: "within one business day",
      });
    }

    return JSON.stringify({ error: `Unknown tool: ${name}` });
  } catch (e) {
    return JSON.stringify({ error: e instanceof Error ? e.message : "tool failed" });
  }
}
