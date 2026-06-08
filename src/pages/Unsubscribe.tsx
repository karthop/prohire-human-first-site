import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Seo } from "@/components/Seo";

type State = "loading" | "ready" | "already" | "invalid" | "success" | "error";

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>("loading");
  const [email, setEmail] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(
      `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
      { headers: { apikey: supabaseAnonKey } }
    )
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (res.ok && data?.valid) {
          setEmail(data.email ?? "");
          setState(data.already_unsubscribed ? "already" : "ready");
        } else {
          setState("invalid");
        }
      })
      .catch(() => setState("invalid"));
  }, [token]);

  const confirm = async () => {
    if (submitting) return;
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    setSubmitting(false);
    if (error || !data?.success) {
      setState("error");
    } else {
      setState("success");
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo title="Unsubscribe | proHIRE resources" description="Manage your email preferences." />
      <section className="py-24">
        <div className="container-editorial max-w-xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Email preferences
          </div>

          {state === "loading" && (
            <p className="text-muted-foreground font-light">Verifying your request…</p>
          )}

          {state === "invalid" && (
            <>
              <h1 className="font-serif text-3xl mb-4">This link is no longer valid.</h1>
              <p className="text-muted-foreground font-light">
                The unsubscribe link may have expired or been used. If you continue to receive
                emails, reply to any message and we will remove you manually.
              </p>
            </>
          )}

          {state === "ready" && (
            <>
              <h1 className="font-serif text-3xl mb-4">Unsubscribe</h1>
              <p className="text-foreground font-light mb-8">
                Confirm you'd like to stop receiving emails{email ? ` at ${email}` : ""}.
              </p>
              <button
                onClick={confirm}
                disabled={submitting}
                className="inline-flex items-center bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-primary-light transition-colors disabled:opacity-60"
              >
                {submitting ? "Confirming…" : "Confirm unsubscribe"}
              </button>
            </>
          )}

          {state === "already" && (
            <>
              <h1 className="font-serif text-3xl mb-4">You're already unsubscribed.</h1>
              <p className="text-muted-foreground font-light">
                {email ? `${email} ` : "This address "} will not receive further emails from us.
              </p>
            </>
          )}

          {state === "success" && (
            <>
              <h1 className="font-serif text-3xl mb-4">You've been unsubscribed.</h1>
              <p className="text-muted-foreground font-light">
                {email ? `${email} ` : "This address "} has been removed from our list.
              </p>
            </>
          )}

          {state === "error" && (
            <>
              <h1 className="font-serif text-3xl mb-4">Something went wrong.</h1>
              <p className="text-muted-foreground font-light">
                Please try again, or reply to any email from us and we will remove you manually.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
