import { useMemo, useState } from "react";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  tag: 'Hiring' | 'Growth' | 'Brand';
  author: string;
  date: string;
}

const articles: Article[] = [
  { id: '1', title: 'Building a Talent Engine in Early-Stage Startups', excerpt: 'Practical frameworks to scale hiring without losing culture.', tag: 'Hiring', author: 'proHIRE resources', date: '2024-07-12' },
  { id: '2', title: 'Executive Presence: What Actually Moves the Needle', excerpt: 'A human-first guide to brand, behavior, and outcomes.', tag: 'Brand', author: 'proHIRE resources', date: '2024-08-05' },
  { id: '3', title: 'From Role Fill to Revenue: Tying Talent to Outcomes', excerpt: 'Aligning recruiting effort with business growth stages.', tag: 'Growth', author: 'proHIRE resources', date: '2024-09-18' },
];

export default function Insights() {
  const [filter, setFilter] = useState<'All' | 'Hiring' | 'Growth' | 'Brand'>('All');
  const filtered = useMemo(() => (filter === 'All' ? articles : articles.filter(a => a.tag === filter)), [filter]);
  const featured = articles[0];

  return (
    <div className="min-h-screen pt-16">
      <Seo title="Insights | proHIRE resources" description="Hiring, growth, and executive brand insights from proHIRE resources." />

      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary">Insights & Articles</h1>
            <div className="flex gap-2">
              {(['All','Hiring','Growth','Brand'] as const).map(t => (
                <Button key={t} variant={filter === t ? 'hero' : 'outline'} size="sm" onClick={() => setFilter(t)}>
                  {t}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured */}
          <Card className="mb-10">
            <CardContent className="p-6">
              <Badge className="mb-3">Featured</Badge>
              <h2 className="text-2xl font-bold text-primary mb-2">{featured.title}</h2>
              <p className="text-muted-foreground mb-3">{featured.excerpt}</p>
              <div className="text-xs text-muted-foreground">{featured.author} • {new Date(featured.date).toLocaleDateString()}</div>
            </CardContent>
          </Card>

          {/* List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Card key={a.id} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{a.tag}</Badge>
                  <h3 className="font-semibold text-primary mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{a.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{a.author} • {new Date(a.date).toLocaleDateString()}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
