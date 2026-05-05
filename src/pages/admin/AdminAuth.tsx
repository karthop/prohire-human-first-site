import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type State = { loading: boolean; isAdmin: boolean; userId: string | null };

export function useAdminGate(): State {
  const [state, setState] = useState<State>({ loading: true, isAdmin: false, userId: null });

  useEffect(() => {
    let cancelled = false;
    async function check() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        if (!cancelled) setState({ loading: false, isAdmin: false, userId: null });
        return;
      }
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (error) console.error(error);
      if (!cancelled) {
        setState({ loading: false, isAdmin: !!data, userId: session.user.id });
      }
    }
    check();
    const { data: sub } = supabase.auth.onAuthStateChange(() => check());
    return () => { cancelled = true; sub.subscription.unsubscribe(); };
  }, []);

  return state;
}

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: `${window.location.origin}/admin/ai-knowledge` },
        });
        if (error) throw error;
        toast.success("Account created. If email confirmation is required, check your inbox.");
      }
    } catch (e: any) {
      toast.error(e.message ?? "Auth failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="container-editorial max-w-md">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Admin</div>
        <h1 className="font-serif text-3xl mb-6">Sign in</h1>
        <form onSubmit={submit} className="space-y-4">
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-foreground"
          />
          <input
            type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" minLength={6}
            className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-foreground"
          />
          <button
            type="submit" disabled={busy}
            className="bg-primary text-primary-foreground px-6 py-3 text-sm disabled:opacity-50"
          >
            {busy ? "..." : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button
          onClick={() => setMode((m) => (m === "signin" ? "signup" : "signin"))}
          className="mt-4 text-xs text-muted-foreground hover:text-foreground"
        >
          {mode === "signin" ? "Need an account?" : "Have an account? Sign in"}
        </button>
        <p className="mt-8 text-xs text-muted-foreground">
          After signing up, an existing admin must grant you the <code>admin</code> role in
          the <code>user_roles</code> table.
        </p>
      </div>
    </div>
  );
}
