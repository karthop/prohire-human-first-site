import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Users,
  User,
  Calendar,
  Send,
  CheckCircle,
  Linkedin
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    inquiryType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, inquiry type, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      inquiryType: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Let's Start a{" "}
              <span className="text-accent">Conversation</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Whether you're looking to hire exceptional talent or advance your career, 
              we're here to help. Reach out today for a confidential consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-premium">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-primary">Send Us a Message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your.email@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role/Title</Label>
                          <Input
                            id="role"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            placeholder="e.g., HR Director, Software Engineer"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hiring">I'm Looking to Hire</SelectItem>
                              <SelectItem value="career">Career Advancement</SelectItem>
                              <SelectItem value="ea-network">Join EA Network</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="general">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your needs, goals, or questions..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full group">
                        <Send className="w-5 h-5" />
                        Send Message
                      </Button>
                    </form>

                    <div className="pt-6 border-t border-border">
                      <div className="flex items-center gap-3 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>We respect your privacy and will never share your information.</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Email</div>
                        <a href="mailto:info@prohireresources.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          info@prohireresources.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Phone</div>
                        <a href="tel:+1-555-PROHIRE" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          +1 (555) PRO-HIRE
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">LinkedIn</div>
                        <a href="https://linkedin.com/company/prohire-resources" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          Connect with us
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">Office Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mt-1">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Location</div>
                        <p className="text-sm text-muted-foreground">
                          Serving clients nationwide<br />
                          Remote & on-site services available
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mt-1">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Business Hours</div>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                          Emergency consultations available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Types */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">How Can We Help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <Users className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium text-primary">For Employers</div>
                        <p className="text-xs text-muted-foreground">Talent acquisition & recruitment</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-primary">For Professionals</div>
                        <p className="text-xs text-muted-foreground">Career advancement services</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-primary">Consultations</div>
                        <p className="text-xs text-muted-foreground">Strategic planning sessions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Promise */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-premium bg-gradient-subtle border-accent/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                  Our Commitment to You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent mb-2">24 Hours</div>
                    <div className="text-sm text-muted-foreground">Response Time Guarantee</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Confidential Discussions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-2">No Cost</div>
                    <div className="text-sm text-muted-foreground">Initial Consultation</div>
                  </div>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We understand that your time is valuable. That's why we guarantee a response 
                  within 24 hours and provide complimentary initial consultations to understand your needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}