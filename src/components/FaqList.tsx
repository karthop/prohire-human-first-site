interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
}

export const FaqList = ({ items, eyebrow = "Common questions", heading = "Frequently asked." }: Props) => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container-editorial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{eyebrow}</div>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">{heading}</h2>
        </div>
        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h3 className="font-serif text-xl text-foreground leading-snug">{item.q}</h3>
                <span className="text-muted-foreground text-2xl leading-none mt-1 transition-transform group-open:rotate-45 select-none" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed text-lg max-w-3xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
