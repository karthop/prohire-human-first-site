import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminGate, AdminLogin } from "./AdminAuth";
import { toast } from "sonner";
import { Trash2, Save, Plus } from "lucide-react";

type Article = {
  id: string;
  title: string;
  content: string;
  category: string | null;
  tags: string[] | null;
  published: boolean;
};

function sanitize(s: string) {
  // basic strip of script tags / on-handlers — content is markdown, not raw HTML
  return s.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/on\w+="[^"]*"/gi, "");
}

export default function AdminKnowledge() {
  const gate = useAdminGate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [seasonal, setSeasonal] = useState({ enabled: false, text: "" });
  const [conversations, setConversations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const [{ data: a }, { data: s }, { data: c }] = await Promise.all([
      supabase.from("ai_knowledge_articles").select("*").order("updated_at", { ascending: false }),
      supabase.from("ai_assistant_settings").select("*").limit(1).maybeSingle(),
      supabase.from("ai_conversations").select("id, session_id, messages, created_at").order("created_at", { ascending: false }).limit(50),
    ]);
    setArticles((a as Article[]) ?? []);
    if (s) setSeasonal({ enabled: s.seasonal_message_enabled, text: s.seasonal_message_text ?? "" });
    setConversations(c ?? []);
    setLoading(false);
  }

  useEffect(() => { if (gate.isAdmin) load(); }, [gate.isAdmin]);

  if (gate.loading) return <div className="min-h-screen pt-24 container-editorial">Loading…</div>;
  if (!gate.isAdmin) return <AdminLogin />;

  async function saveArticle(a: Article) {
    const payload = {
      title: sanitize(a.title),
      content: sanitize(a.content),
      category: a.category ? sanitize(a.category) : null,
      tags: a.tags ?? [],
      published: a.published,
    };
    const { error } = await supabase.from("ai_knowledge_articles").update(payload).eq("id", a.id);
    if (error) return toast.error(error.message);
    toast.success("Saved");
    load();
  }

  async function createArticle() {
    const { data: { session } } = await supabase.auth.getSession();
    const { error } = await supabase.from("ai_knowledge_articles").insert({
      title: "New article", content: "Write content here…", published: false,
      created_by: session?.user.id,
    });
    if (error) return toast.error(error.message);
    load();
  }

  async function deleteArticle(id: string) {
    if (!confirm("Delete this article?")) return;
    const { error } = await supabase.from("ai_knowledge_articles").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    load();
  }

  async function saveSeasonal() {
    const text = sanitize(seasonal.text).slice(0, 1000);
    const { data: existing } = await supabase.from("ai_assistant_settings").select("id").limit(1).maybeSingle();
    const payload = { seasonal_message_enabled: seasonal.enabled, seasonal_message_text: text };
    const { error } = existing
      ? await supabase.from("ai_assistant_settings").update(payload).eq("id", existing.id)
      : await supabase.from("ai_assistant_settings").insert(payload);
    if (error) return toast.error(error.message);
    toast.success("Settings saved");
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <div className="min-h-screen pt-24 pb-24 bg-background">
      <div className="container-editorial">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Avery · admin</div>
            <h1 className="font-serif text-3xl">Knowledge & settings</h1>
          </div>
          <button onClick={signOut} className="text-xs text-muted-foreground hover:text-foreground">Sign out</button>
        </div>

        {/* Seasonal */}
        <section className="mb-14 border border-border p-6 rounded">
          <h2 className="font-serif text-xl mb-4">Seasonal / contextual note</h2>
          <label className="flex items-center gap-2 mb-3 text-sm">
            <input type="checkbox" checked={seasonal.enabled}
              onChange={(e) => setSeasonal({ ...seasonal, enabled: e.target.checked })} />
            Enabled
          </label>
          <textarea
            rows={3} maxLength={1000}
            value={seasonal.text}
            onChange={(e) => setSeasonal({ ...seasonal, text: e.target.value })}
            placeholder="e.g. We're closed for Thanksgiving Nov 27–28; replies resume Monday."
            className="w-full border border-border bg-transparent p-3 text-sm rounded"
          />
          <div className="flex items-center justify-between mt-3">
            <div className="text-xs text-muted-foreground">{seasonal.text.length}/1000</div>
            <button onClick={saveSeasonal} className="bg-primary text-primary-foreground px-4 py-2 text-sm">
              Save settings
            </button>
          </div>
        </section>

        {/* Articles */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl">Knowledge articles</h2>
            <button onClick={createArticle} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm">
              <Plus className="h-4 w-4" /> New article
            </button>
          </div>

          {loading ? <div>Loading…</div> : (
            <div className="space-y-6">
              {articles.map((a) => (
                <ArticleCard key={a.id} article={a} onSave={saveArticle} onDelete={deleteArticle} />
              ))}
              {articles.length === 0 && <div className="text-sm text-muted-foreground">No articles yet.</div>}
            </div>
          )}
        </section>

        {/* Conversations */}
        <section>
          <h2 className="font-serif text-xl mb-4">Recent conversations</h2>
          <div className="space-y-4">
            {conversations.map((c) => (
              <details key={c.id} className="border border-border rounded p-4">
                <summary className="cursor-pointer text-sm">
                  {new Date(c.created_at).toLocaleString()} · session {c.session_id.slice(0, 8)} · {c.messages.length} msgs
                </summary>
                <div className="mt-3 space-y-2 text-sm">
                  {c.messages.map((m: any, i: number) => (
                    <div key={i} className={m.role === "user" ? "text-foreground" : "text-muted-foreground"}>
                      <strong>{m.role}:</strong> {m.content}
                    </div>
                  ))}
                </div>
              </details>
            ))}
            {conversations.length === 0 && <div className="text-sm text-muted-foreground">No conversations logged yet.</div>}
          </div>
        </section>
      </div>
    </div>
  );
}

function ArticleCard({
  article, onSave, onDelete,
}: { article: Article; onSave: (a: Article) => void; onDelete: (id: string) => void }) {
  const [a, setA] = useState(article);
  useEffect(() => setA(article), [article.id]);

  return (
    <div className="border border-border rounded p-4 space-y-3">
      <div className="flex gap-3">
        <input
          value={a.title} onChange={(e) => setA({ ...a, title: e.target.value })}
          className="flex-1 border-b border-border bg-transparent py-2 font-serif text-lg focus:outline-none focus:border-foreground"
        />
        <input
          value={a.category ?? ""} onChange={(e) => setA({ ...a, category: e.target.value })}
          placeholder="category"
          className="w-40 border-b border-border bg-transparent py-2 text-sm focus:outline-none focus:border-foreground"
        />
      </div>
      <textarea
        value={a.content} rows={6}
        onChange={(e) => setA({ ...a, content: e.target.value })}
        className="w-full border border-border bg-transparent p-3 text-sm rounded font-mono"
      />
      <input
        value={(a.tags ?? []).join(", ")}
        onChange={(e) => setA({ ...a, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
        placeholder="tags, comma separated"
        className="w-full border-b border-border bg-transparent py-2 text-sm focus:outline-none focus:border-foreground"
      />
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={a.published}
            onChange={(e) => setA({ ...a, published: e.target.checked })} />
          Published
        </label>
        <div className="flex gap-2">
          <button onClick={() => onDelete(a.id)} className="inline-flex items-center gap-1 text-destructive text-sm px-3 py-2 border border-border">
            <Trash2 className="h-4 w-4" /> Delete
          </button>
          <button onClick={() => onSave(a)} className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-sm px-4 py-2">
            <Save className="h-4 w-4" /> Save
          </button>
        </div>
      </div>
    </div>
  );
}
