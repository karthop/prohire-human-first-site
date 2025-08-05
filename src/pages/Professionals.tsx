import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  User, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Target,
  Award,
  Briefcase,
  Users,
  Star,
  Calendar,
  FileText,
  Linkedin,
  Presentation
} from "lucide-react";

export default function Professionals() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              Strategic Career Advancement
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Elevate Your{" "}
              <span className="text-accent">Career Journey</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Strategic career advisory services and curated opportunities for ambitious professionals 
              ready to take the next step in their career trajectory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Schedule Your Consultation</Link>
              </Button>
              <Button variant="professional" size="xl" asChild>
                <Link to="/contact">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Brand Elevation */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Executive Brand Elevation & Strategic Positioning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive career advancement services that position you as the ideal candidate 
              for your target roles and accelerate your professional trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-premium transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Executive Presence Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  Develop your leadership narrative and executive presence to command attention 
                  and respect in any professional setting.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Personal brand development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">C-Suite narrative messaging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Leadership story crafting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Strategic Career Transitions</h3>
                <p className="text-muted-foreground mb-6">
                  Professional positioning and documents that showcase your value proposition 
                  for senior leadership roles and career pivots.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Executive resume optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">LinkedIn profile enhancement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Interview preparation & coaching</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">The Curated Network™</h3>
                <p className="text-muted-foreground mb-6">
                  Exclusive access to career acceleration opportunities through warm introductions 
                  and our extensive network of industry leaders.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Executive network access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Warm introduction facilitation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Hidden market opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Assistant Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  Executive Support Opportunities
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Premium Remote Executive Assistant Roles
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join our curated network of elite executive assistants supporting C-suite leaders 
                  and high-growth companies across multiple industries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">C-Suite Caliber Opportunities</h3>
                    <p className="text-muted-foreground">
                      Support founders, CEOs, and senior executives at leading companies 
                      with meaningful, strategic work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Flexible Engagement Models</h3>
                    <p className="text-muted-foreground">
                      Choose from fractional, part-time, or full-time arrangements 
                      that fit your lifestyle and career goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Vetted & Trusted Network</h3>
                    <p className="text-muted-foreground">
                      Join a pre-qualified network of high-trust professionals 
                      with proven track records of excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-premium">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary text-center">Join Our EA Network</h3>
                  <p className="text-muted-foreground text-center">
                    Apply to join our exclusive network of executive assistants and gain access 
                    to premium opportunities with industry-leading companies.
                  </p>
                  <div className="space-y-4">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact">Apply to Network</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    <p>✓ Remote-first opportunities</p>
                    <p>✓ Competitive compensation</p>
                    <p>✓ Professional development support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real professionals. Real transformations. Real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-accent">150%</div>
                  <div className="font-semibold text-primary">Salary Increase</div>
                  <p className="text-muted-foreground text-sm italic">
                    "proHIRE's career coaching helped me transition from Senior Manager to VP level, 
                    with a 150% salary increase and equity package."
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-medium text-primary">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">Vice President, Technology</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-accent">C-Suite</div>
                  <div className="font-semibold text-primary">Role Placement</div>
                  <p className="text-muted-foreground text-sm italic">
                    "The executive presence coaching was transformational. Within 6 months, 
                    I secured a Chief Technology Officer role at a Fortune 500 company."
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-medium text-primary">Michael R.</div>
                    <div className="text-sm text-muted-foreground">Chief Technology Officer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-accent">3 Weeks</div>
                  <div className="font-semibold text-primary">Time to Offer</div>
                  <p className="text-muted-foreground text-sm italic">
                    "After months of unsuccessful job searching, proHIRE's network helped me 
                    land my dream role in just 3 weeks."
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-medium text-primary">Jennifer L.</div>
                    <div className="text-sm text-muted-foreground">Senior Finance Director</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Your Journey to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process guides you through every step of your career transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">1. Discovery Call</h3>
              <p className="text-muted-foreground text-sm">
                Understand your career goals, challenges, and aspirations in our initial consultation.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">2. Strategy Development</h3>
              <p className="text-muted-foreground text-sm">
                Create a personalized career strategy tailored to your unique situation and goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">3. Skill Enhancement</h3>
              <p className="text-muted-foreground text-sm">
                Develop the skills, presence, and materials needed to achieve your career objectives.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">4. Opportunity Matching</h3>
              <p className="text-muted-foreground text-sm">
                Connect with curated opportunities that align with your career vision and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-xl text-white/90">
                  Take the first step towards achieving your professional goals. 
                  Schedule a confidential consultation to discuss your career aspirations.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white">Confidential career assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white">Personalized strategy development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white">Access to exclusive opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white">Ongoing career support</span>
                </div>
              </div>
            </div>

            <Card className="shadow-hero">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary text-center">Start Your Journey Today</h3>
                  <p className="text-muted-foreground text-center">
                    Schedule your complimentary career consultation and discover 
                    how we can help you achieve your professional goals.
                  </p>
                  <div className="space-y-4">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact">Schedule Consultation</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link to="/about">Learn More About Our Process</Link>
                    </Button>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    <p>✓ Free initial consultation</p>
                    <p>✓ Confidential discussion</p>
                    <p>✓ No obligation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}