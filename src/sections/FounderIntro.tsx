import { Link } from "react-router-dom";

export const FounderIntro = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
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
              Atlanta-based. Twenty years at the intersection of executive search, growth
              acceleration, and senior talent strategy.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-foreground leading-relaxed font-light text-lg">
            <p>
              Chris has led executive talent and revenue functions at Amazon, Pyramid Consulting,
              Stellar Consulting Solutions, Randstad, and Kelly — supporting clients from
              Series A startups to Fortune 50 enterprises.
            </p>
            <p>
              Through proHIRE resources, he partners with CEOs, CFOs, and founders to place
              senior talent, embed fractional CXOs, and execute the operational and revenue
              plays that turn strategy into outcomes.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-4 text-sm border-t border-border">
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  Affiliations
                </div>
                <div className="text-foreground">
                  C-Level Advisory · The Curated Network™
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  Civic
                </div>
                <div className="text-foreground">
                  Inspiredu (Emeritus) · FinTech Atlanta
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
