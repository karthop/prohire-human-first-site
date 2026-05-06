import { useEffect, useState } from "react";
import { StatCounter } from "@/components/StatCounter";
import { LogoStrip } from "@/components/LogoStrip";
import { Card, CardContent } from "@/components/ui/card";

interface TrustLayerProps {
  testimonials?: { quote: string; author: string; title?: string }[];
  stats?: { value: number; suffix?: string; label: string }[];
}

export function TrustLayer({
  testimonials = [
    { quote: '95% of hires onboarded successfully within 45 days.', author: 'Delivery Metric' },
    { quote: 'Trusted by startups and enterprise teams alike.', author: 'Client Feedback' }
  ],
  stats = [
    { value: 95, suffix: '%', label: 'Onboarded <45 days' },
    { value: 20, suffix: '+', label: 'Years expertise' },
    { value: 500, suffix: '+', label: 'Placements' }
  ]
}: TrustLayerProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <Card className="lg:col-span-2 shadow-card">
            <CardContent className="p-6">
              <div className="min-h-[96px] transition-all animate-fade-in">
                <p className="text-lg italic text-muted-foreground">“{testimonials[index].quote}”</p>
                <p className="mt-2 text-sm text-primary/80">, {testimonials[index].author}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-accent">
                      <StatCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}
