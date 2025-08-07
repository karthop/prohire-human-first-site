import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Target, 
  CheckCircle,
  Heart,
  Globe,
  TrendingUp,
  Shield,
  Linkedin,
  Mail
} from "lucide-react";
import { Logo } from "@/components/Logo";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Logo className="w-16 h-16 mx-auto" priority alt="proHIRE resources logo" />
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              About proHIRE resources
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Redefining Talent{" "}
              <span className="text-accent">Connections</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              At proHIRE resources, we believe in the power of human potential. Our mission is to bridge 
              the gap between exceptional talent and visionary organizations through innovative, human-first approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Our Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by our core belief that every professional is more than just a keyword search, 
              we're committed to transforming how talent and opportunity connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Human-First Philosophy</h3>
                <p className="text-muted-foreground">
                  We see beyond resumes and job descriptions to understand the whole person and the complete organizational culture.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Integrity & Trust</h3>
                <p className="text-muted-foreground">
                  Built on transparency, confidentiality, and ethical practices that earn and maintain the trust of all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Excellence & Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously evolving our methods, embracing technology, and delivering exceptional results that exceed expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Leadership
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Meet Chris Betz
                </h2>
                <h3 className="text-xl text-accent font-semibold">
                  Founder & CEO, proHIRE resources
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 15 years of experience in talent acquisition and human resources, 
                  Chris founded proHIRE resources with a vision to transform how organizations 
                  and professionals connect in the modern marketplace.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a strategic advisor and leadership consultant, Chris brings deep expertise 
                  in executive search, organizational development, and strategic talent solutions. 
                  Through ongoing strategic referral networks and partnership agreements with aligned firms, 
                  proHIRE delivers comprehensive solutions that extend beyond traditional recruiting.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Chris serves on the board of Inspiredu, reflecting his commitment to community impact 
                  and educational equity. This dedication to giving back extends throughout proHIRE's 
                  mission to create meaningful connections between talent and opportunity.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Key Achievements:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">15+ years in talent acquisition leadership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">500+ successful executive placements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Certified Professional in Human Resources (PHR)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Board member, Inspiredu nonprofit</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="hero" asChild>
                  <Link to="/contact">Connect with Chris</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/chrisbetz" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>

            <Card className="shadow-premium">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold text-white">CB</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Chris Betz</h3>
                    <p className="text-accent font-medium">Founder & CEO</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Philosophy</div>
                      <p className="text-muted-foreground text-sm italic mt-2">
                        "Every professional has a unique story, and every organization has a distinct culture. 
                        Our role is to find where these stories intersect to create lasting success."
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <div className="text-xl font-bold text-accent">15+</div>
                        <div className="text-xs text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-accent">500+</div>
                        <div className="text-xs text-muted-foreground">Placements</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Community Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond business success, we're committed to giving back and making a positive impact 
              in our communities and the broader professional landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Inspiredu Partnership</h3>
                <p className="text-muted-foreground mb-6">
                  Proud supporters of Inspiredu, a nonprofit organization dedicated to educational equity 
                  and opportunity. We provide pro-bono career services to underserved communities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Free career workshops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Mentorship programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Scholarship funding</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Industry Leadership</h3>
                <p className="text-muted-foreground mb-6">
                  Active participation in professional organizations and thought leadership 
                  initiatives that advance best practices in talent acquisition and career development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Speaking engagements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Industry research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Best practice sharing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Our Unique Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets proHIRE resources apart is our commitment to understanding the complete picture—
              not just skills and requirements, but culture, aspirations, and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Deep Discovery</h3>
              <p className="text-muted-foreground text-sm">
                Understanding your unique needs, culture, and long-term objectives.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Strategic Matching</h3>
              <p className="text-muted-foreground text-sm">
                AI-enhanced processes combined with human insight for optimal alignment.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous vetting and preparation to ensure successful long-term placements.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground text-sm">
                Continued partnership to ensure lasting success for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Experience the proHIRE Difference?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's start a conversation about how we can help you achieve your goals—
              whether you're looking to build your team or advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Start the Conversation</Link>
              </Button>
              <Button variant="professional" size="xl" asChild>
                <a href="mailto:chris@prohireresources.com">
                  <Mail className="w-5 h-5" />
                  Email Chris Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}