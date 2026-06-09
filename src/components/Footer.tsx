import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground brush-texture">
      <div className="container-editorial py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-9 h-9" />
              <span className="font-serif text-xl">proHIRE resources</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed font-light max-w-sm">
              Executive search and growth advisory. Boutique by design. Accountable for the outcome.
            </p>
            <p className="text-primary-foreground/60 text-sm italic font-serif">
              "You are more than just a keyword search."
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/executive-search" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">Executive Search</Link></li>
              <li><Link to="/services/talent-solutions" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">Hiring &amp; Workforce</Link></li>
              <li><Link to="/services/growth-acceleration" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">Growth Acceleration</Link></li>
              <li><Link to="/services/career-advisory" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">Career Advisory</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-5">Firm</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/approach" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">Approach</Link></li>
              <li><Link to="/industries" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">Industries</Link></li>
              <li><Link to="/what-were-seeing" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">What We're Seeing</Link></li>
              <li><Link to="/about" className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-5">Contact</h3>
            <div className="space-y-2 text-sm text-primary-foreground/85">
              <div className="font-serif text-lg text-primary-foreground">Chris Betz, CEO</div>
              <div>proHIRE resources LLC · Atlanta, GA</div>
              <div className="pt-3 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-foreground border-b border-primary-foreground/40 pb-0.5 hover:border-primary-foreground transition-colors"
                >
                  Contact
                </Link>
                <a
                  href="https://www.linkedin.com/in/betzchris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chris Betz on LinkedIn"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/55">
          <div>© {new Date().getFullYear()} proHIRE resources LLC. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms &amp; Conditions</Link>
            <span>Atlanta · National reach</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
