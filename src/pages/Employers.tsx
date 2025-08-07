import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Building2,
  Search,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Brain,
  Clock
} from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Employers() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Logo className="w-16 h-16 mx-auto" priority alt="proHIRE Resources logo" />
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              Strategic Talent Acquisition
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Find Exceptional Talent,{" "}
              <span className="text-accent">Faster</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              From high-volume sourcing to executive search, we deliver flexible and scalable talent solutions 
              for organizations ranging from startups to Fortune 500 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Submit a Hiring Request</Link>
              </Button>
              <Button variant="professional" size="xl" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hiring Models */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Strategic Hiring Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-enhanced recruitment approach combined with deep industry expertise 
              delivers results that traditional recruiting methods simply can't match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-premium transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">High-Volume Sourcing</h3>
                <p className="text-muted-foreground mb-6">
                  Rapidly scale your team with our efficient high-volume recruitment process. 
                  Perfect for growing companies and large hiring initiatives.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">AI-powered candidate matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Streamlined screening process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Quality assurance protocols</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Retained Direct Hire</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic placements for mission-critical roles. Our retained search model 
                  ensures dedicated focus and exceptional candidate quality.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Dedicated search consultant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Comprehensive market research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">90-day guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Executive Search</h3>
                <p className="text-muted-foreground mb-6">
                  C-suite and senior leadership recruitment with discretion and precision. 
                  Access to passive candidates through our extensive network.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Executive-level network access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Confidential search process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Cultural fit assessment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions by Business Type */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Solutions by Business Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored talent strategies that align with your organization's growth stage and strategic objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Startups */}
            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Startups</h3>
                <p className="text-muted-foreground mb-6">
                  Complete talent infrastructure for early-stage companies ready to scale rapidly and efficiently.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Hiring systems & process design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Fractional CHRO & HRBP support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Embedded ops teams (EA, COO, SDR)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">LinkedIn employer brand refresh</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Manager training programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth-Stage */}
            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Growth-Stage</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic executive hiring and infrastructure scaling for companies in rapid expansion mode.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Specialized executive recruitment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Talent + GTM strategy alignment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">GTM strategy & account expansion</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Revenue leader network access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Infrastructure scaling support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Enterprise</h3>
                <p className="text-muted-foreground mb-6">
                  Scalable sourcing engines and team augmentation for large organizations with complex hiring needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Team-based sourcing at scale</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Internal recruiting team support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Project-based talent solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Custom onboarding pipelines</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1" />
                    <span className="text-sm">Recruiter subscription services</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Strategic Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond recruitment - comprehensive business acceleration and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Remote Executive Assistants</h3>
                <p className="text-muted-foreground mb-6">
                  Premium EAs for founders and executives from our curated, high-trust network. 
                  Available fractional or full-time.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">C-suite caliber professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Flexible engagement models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Pre-vetted and reference-checked</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Onboarding & Retention</h3>
                <p className="text-muted-foreground mb-6">
                  Data-backed onboarding design and retention strategies to reduce early attrition 
                  and accelerate time-to-productivity.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">System design & optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">High-level coaching programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Analytics-driven improvements</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300 md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-4">Strategic Partnerships</h3>
                    <p className="text-muted-foreground mb-6">
                      proHIRE maintains ongoing strategic referral networks with aligned firms across 
                      complementary service areas. We believe in collaborative approaches that deliver 
                      comprehensive solutions for our clients.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="secondary">Partnership Inquiries Welcome</Badge>
                      <Badge variant="secondary">Referral Network Access</Badge>
                      <Badge variant="secondary">Collaborative Solutions</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Deep Industry Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our specialized knowledge across key industries ensures we understand 
              your unique challenges and can identify the right talent quickly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Financial Services", icon: TrendingUp },
              { name: "Information Technology", icon: Brain },
              { name: "Engineering", icon: Zap },
              { name: "Healthcare", icon: Shield },
              { name: "Manufacturing", icon: Building2 },
              { name: "Consulting", icon: Target },
              { name: "Startups & Scale-ups", icon: Globe },
              { name: "Enterprise", icon: Users }
            ].map((industry) => (
              <Card key={industry.name} className="text-center group hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  The proHIRE Advantage
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our unique blend of technology and human expertise delivers results 
                  that set us apart from traditional recruiting firms.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">AI-Enhanced Matching</h3>
                    <p className="text-muted-foreground">
                      Our proprietary AI technology analyzes beyond keywords to find candidates 
                      who truly fit your culture and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Rapid Time-to-Hire</h3>
                    <p className="text-muted-foreground">
                      Streamlined processes and pre-qualified candidate pools mean faster placements 
                      without compromising on quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">
                      We stand behind our placements with comprehensive guarantees and ongoing 
                      support to ensure long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-premium">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary text-center">Ready to Get Started?</h3>
                  <p className="text-muted-foreground text-center">
                    Submit your hiring requirements and we'll get back to you within 24 hours 
                    with a tailored recruitment strategy.
                  </p>
                  <div className="space-y-4">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact">Submit Hiring Request</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link to="/contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    <p>✓ No upfront fees</p>
                    <p>✓ 24-hour response guarantee</p>
                    <p>✓ Customized recruitment strategy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Proven Results
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved for our clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
                <div className="text-white/80">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">95%</div>
                <div className="text-white/80">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">14</div>
                <div className="text-white/80">Average Days to Hire</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">85%</div>
                <div className="text-white/80">1-Year Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}