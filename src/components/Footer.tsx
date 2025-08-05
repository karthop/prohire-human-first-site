import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Users, User } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">pH</span>
              </div>
              <span className="text-lg font-bold">proHIRE Resources</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bridging the gap between organizational hiring needs and individual career advancement with AI-enhanced recruitment and human-first philosophy.
            </p>
            <p className="text-accent font-medium text-sm">
              "You Are More Than Just A Keyword Search."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="space-y-2">
              <Link to="/employers" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                <Users className="w-4 h-4" />
                For Employers
              </Link>
              <Link to="/professionals" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                <User className="w-4 h-4" />
                For Professionals
              </Link>
              <span className="block text-primary-foreground/80 text-sm">Executive Search</span>
              <span className="block text-primary-foreground/80 text-sm">Career Advisory</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@prohireresources.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  info@prohireresources.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+1-555-PROHIRE" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  +1 (555) PRO-HIRE
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Serving clients nationwide<br />
                  Remote & on-site services
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-accent" />
                <a href="https://linkedin.com/company/prohire-resources" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 proHIRE Resources. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};