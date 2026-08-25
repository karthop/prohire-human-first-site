import { Link } from "react-router-dom";

export const FounderIntro = () => {
  return (
    <section className="py-14 lg:py-12 bg-background">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Founder
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight text-foreground mb-6">
              Chris Betz
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Atlanta-based. Twenty years across executive search, growth advisory,
              and senior hiring strategy.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-foreground leading-relaxed font-light text-lg">
            <p>
              Chris Betz brings twenty years of executive search, talent strategy, and
              growth advisory experience to proHIRE resources. He has led search and
              revenue functions inside Amazon as well as top global consulting firms.
            </p>
            <p>
              Chris works directly with CEOs, CFOs, and founders to execute the hires and
              operational restructures that shape their long-term growth.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-4 text-sm border-t border-border">
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  Affiliations
                </div>
                <div className="text-foreground">
                  <a href="https://www.linkedin.com/company/c-level-advisory-llc" target="_blank" rel="noopener noreferrer" className="hover:underline">C-Level Advisory · The Curated Network™</a>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  Civic
                </div>
                <div className="text-foreground">
                  <a href="https://www.iuatl.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Inspiredu (Emeritus)</a>
                  {" · "}
                  <a href="https://fintechatlanta.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">FinTech Atlanta</a>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
              >
                Read full bio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
