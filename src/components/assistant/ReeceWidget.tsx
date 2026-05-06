import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "reeee_session_v1";
const SESSION_ID_KEY = "reeee_session_id_v1";
const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hello, I'm **Reece**, the AI assistant for proHIRE resources. I can answer questions about our practices, our approach, and how to engage Chris and the team. What can I help you with?",
};

function getSessionId() {
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

export function ReeceWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [WELCOME];
  });
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (scrollerRef.current) scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Intercept internal links in markdown so they navigate via SPA.
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const t = e.target as HTMLElement;
    const a = t.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") ?? "";
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      setOpen(false);
    }
  };

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-assistant`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: next,
          sessionId: getSessionId(),
          userContext: { path: location.pathname },
        }),
      });

      if (resp.status === 429) {
        toast("Reece is getting a lot of questions right now. Try again in a moment.");
        setMessages(next);
        return;
      }
      if (resp.status === 402) {
        toast.error("Reece is temporarily unavailable. The team has been notified.");
        setMessages(next);
        return;
      }
      if (!resp.ok || !resp.body) {
        toast.error("Couldn't reach Reece. Please try again.", {
          action: { label: "Retry", onClick: () => { setInput(text); } },
        });
        setMessages(next);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";
      let done = false;
      while (!done) {
        const { value, done: d } = await reader.read();
        if (d) break;
        buffer += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data:")) continue;
          const json = line.slice(5).trim();
          if (!json) continue;
          if (json === "[DONE]") { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) {
              acc += c;
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = { role: "assistant", content: acc };
                return copy;
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Network error reaching Reece.");
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      <button
        aria-label={open ? "Close Reece" : "Open Reece, the AI assistant"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed z-50 bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl",
          "flex items-center justify-center transition-transform hover:scale-105",
        )}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Reece, AI assistant"
          className={cn(
            "fixed z-50 bg-background border border-border shadow-2xl flex flex-col overflow-hidden",
            "inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[400px] sm:h-[600px] sm:rounded-lg",
          )}
        >
          <header className="px-5 py-4 border-b border-border bg-primary text-primary-foreground flex items-center justify-between">
            <div>
              <div className="font-serif text-lg leading-none">Reece</div>
              <div className="text-[11px] uppercase tracking-[0.18em] opacity-70 mt-1">
                AI assistant · proHIRE resources
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="p-1 hover:opacity-70"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div
            ref={scrollerRef}
            onClick={handleClick}
            className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-background"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] text-sm leading-relaxed",
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl rounded-br-sm"
                    : "mr-auto text-foreground",
                )}
              >
                {m.role === "assistant" ? (
                  <div className="prose prose-sm max-w-none prose-p:my-2 prose-a:text-primary prose-a:underline prose-strong:text-foreground">
                    {m.content ? (
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    ) : (
                      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                    )}
                  </div>
                ) : (
                  <span className="whitespace-pre-wrap">{m.content}</span>
                )}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="border-t border-border p-3 flex gap-2 bg-background"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ask about our practices, approach, or how to engage…"
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring max-h-32"
              disabled={streaming}
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              aria-label="Send"
              className="bg-primary text-primary-foreground px-3 rounded-md disabled:opacity-50"
            >
              {streaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
