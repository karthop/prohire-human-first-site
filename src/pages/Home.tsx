import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/animated-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { useStaggeredScrollAnimation, useParallaxScroll } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { 
  Users, 
  User, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap,
  Building2,
  Target,
  Award,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-handshake.jpg";
import { Logo } from "@/components/Logo";
// import { PersonaSelector } from "@/sections/PersonaSelector";
import { usePersona } from "@/context/PersonaContext";

export default function Home() {
  const { elementRef: heroParallaxRef, offset } = useParallaxScroll(0.3);
  const serviceCards = useStaggeredScrollAnimation(2, { delay: 200, stagger: 150 });

  const { persona } = usePersona();
  const storedPersona = (typeof window !== 'undefined' ? localStorage.getItem('persona') : null) as 'employer' | 'professional' | null;
  const effectivePersona = persona ?? storedPersona ?? null;
  const heroCta = effectivePersona === 'employer'
    ? { to: '/employers', label: 'Start a Hiring Plan', Icon: Users }
    : effectivePersona === 'professional'
    ? { to: '/professionals', label: 'Advance My Career', Icon: User }
    : { to: '/contact', label: "Let's Connect", Icon: Users };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        ref={heroParallaxRef}
        className="relative overflow-hidden bg-gradient-hero"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional handshake representing partnership" 
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="lift" className="space-y-8">
              <div className="space-y-4">
                <Logo className="w-16 h-16" priority alt="proHIRE resources logo" />
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  AI-Enhanced Recruitment Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  You Are More Than Just A{" "}
                  <span className="text-accent-emerald">Keyword Search</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                  Bridging the gap between organizational hiring needs and individual career advancement with our human-first philosophy and cutting-edge technology.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="emerald" size="xl" asChild className="group">
                  <Link to={heroCta.to}>
                    <heroCta.Icon className="w-5 h-5" />
                    {heroCta.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
{/* Persona selector removed to avoid redundancy */}
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={300} className="relative">
              <div className="animate-hero-float">
                <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-2xl rounded-full"></div>
                <Card className="relative bg-white/10 backdrop-blur-md border-white/20 shadow-hero">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-accent-emerald">500+</div>
                        <div className="text-sm text-white/80">Successful Placements</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-accent-emerald">95%</div>
                        <div className="text-sm text-white/80">Client Satisfaction</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-accent-emerald">50+</div>
                        <div className="text-sm text-white/80">Enterprise Clients</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-accent-emerald">24h</div>
                        <div className="text-sm text-white/80">Avg Response Time</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Comprehensive Talent Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From high-volume sourcing to executive search, we deliver flexible and scalable talent solutions 
              tailored to your unique needs.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Employers Card */}
            <AnimatedCard 
              delay={serviceCards[0].isVisible ? 0 : 200}
              className="p-8 bg-gradient-card hover:shadow-elegant border-2 hover:border-accent-emerald/20"
              hover={true}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">For Employers</h3>
                </div>
                
                <p className="text-muted-foreground">
                  Strategic talent acquisition solutions for organizations ranging from startups to Fortune 500 companies.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">High-Volume Sourcing</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Retained Direct Hire</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Executive Search</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">AI-Enhanced Screening</span>
                  </div>
                </div>
                
                <Button variant="premium" size="lg" asChild className="w-full group">
                  <Link to="/employers">
                    Explore Hiring Solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>

            {/* For Professionals Card */}
            <AnimatedCard 
              delay={serviceCards[1].isVisible ? 0 : 350}
              className="p-8 bg-gradient-card hover:shadow-elegant border-2 hover:border-accent-teal/20"
              hover={true}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">For Professionals</h3>
                </div>
                
                <p className="text-muted-foreground">
                  Strategic career advisory services and curated opportunities for ambitious professionals.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Strategic Career Planning</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Executive Presence Coaching</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Resume & LinkedIn Optimization</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">Curated Job Access</span>
                  </div>
                </div>
                
                <Button variant="emerald" size="lg" asChild className="w-full group">
                  <Link to="/professionals">
                    Advance Your Career
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Why Choose proHIRE resources?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique blend of AI-enhanced technology and human-first philosophy sets us apart 
              in the competitive talent acquisition landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">AI-Enhanced Efficiency</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology accelerates our sourcing and matching processes while maintaining the human touch.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Deep Industry Insight</h3>
                <p className="text-muted-foreground">
                  Specialized expertise across finance, IT, engineering, tech, and other high-demand sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track record of successful placements and long-term partnerships with leading organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "proHIRE resources transformed our hiring process. Their AI-enhanced approach found us the perfect candidates faster than ever before."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">VP of Talent, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "The career advisory services helped me transition to a C-level role. Their strategic approach and network are unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Michael Chen</div>
                    <div className="text-sm text-muted-foreground">Chief Technology Officer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Their human-first philosophy really shines through. They understand that we're more than just keywords on a resume."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Jennifer Lee</div>
                    <div className="text-sm text-muted-foreground">Senior Finance Director</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Whether you're looking to hire top talent or advance your career, 
              let's start a conversation about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Redundant contact CTA removed to keep single primary action */}
              <Button variant="outline" size="xl" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}