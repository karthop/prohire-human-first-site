import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Seo } from "@/components/Seo";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          phone: formData.phone,
          inquiryType: formData.inquiryType,
          message: formData.message,
        },
      });
      if (error) throw error;
      setSent(true);
      toast.success("Message sent. We'll be in touch within one business day.");
      setFormData({ name: "", email: "", company: "", role: "", phone: "", inquiryType: "", message: "" });
    } catch (err: any) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Contact | proHIRE resources"
        description="Start a confidential conversation. We respond within one business day."
      />

      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Contact</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-3xl">
            Tell us what you're working on.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/80 font-light max-w-2xl leading-relaxed">
            Send a few lines about where you are headed. We respond within one business day
            with a candid view of how, and whether, we can help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Direct</div>
              <div className="font-serif text-xl text-foreground">Chris Betz</div>
              <div className="text-muted-foreground font-light">CEO, proHIRE resources LLC</div>
              <p className="mt-3 text-foreground font-light leading-relaxed">
                Use the form to start a conversation. We respond within one business day.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Office</div>
              <div className="text-foreground font-light leading-relaxed">
                Atlanta, Georgia<br />
                Serving clients nationally and internationally.<br />
                Remote and on-site engagements.
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Discretion</div>
              <p className="text-muted-foreground font-light leading-relaxed">
                All inquiries are treated as confidential. Initial consultations are
                complimentary and without obligation.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground h-11"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Company</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Role</Label>
                <Input
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Phone <span className="normal-case tracking-normal text-muted-foreground/70">(optional)</span></Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiryType" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Inquiry
              </Label>
              <Select
                value={formData.inquiryType}
                onValueChange={(v) => setFormData({ ...formData, inquiryType: v })}
                required
              >
                <SelectTrigger className="border-0 border-b border-border rounded-none bg-transparent px-0 focus:ring-0 h-11">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="executive-search">Executive search / fractional CXO</SelectItem>
                  <SelectItem value="people-organization">People &amp; Organization / HR advisory</SelectItem>
                  <SelectItem value="growth-acceleration">Growth acceleration / BD</SelectItem>
                  <SelectItem value="career-advisory">Career advisory (individual)</SelectItem>
                  <SelectItem value="partnership">Partnership / referral</SelectItem>
                  <SelectItem value="general">General inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Context
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground resize-none"
                placeholder="Tell us about your priorities, situation, or question."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-primary-light transition-colors disabled:opacity-60"
            >
              {submitting ? (<>Sending <Loader2 className="w-4 h-4 animate-spin" /></>) : (<>Send inquiry <ArrowRight className="w-4 h-4" /></>)}
            </button>
            <p className="text-xs text-muted-foreground">
              {sent ? "Message sent. We'll respond within one business day." : "We respond within one business day."}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
