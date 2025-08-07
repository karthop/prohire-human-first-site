import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { PersonaToggle } from "@/components/PersonaToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="w-9 h-9" priority />
            <span className="text-xl font-bold text-primary">proHIRE resources</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/employers" 
              className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                isActive('/employers') ? 'text-accent' : 'text-foreground'
              }`}
            >
              <Users className="w-4 h-4" />
              For Employers
            </Link>
            <Link 
              to="/professionals" 
              className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                isActive('/professionals') ? 'text-accent' : 'text-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              For Professionals
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/about') ? 'text-accent' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/insights" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/insights') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/contact') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
            <PersonaToggle />
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive('/') ? 'text-accent' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/employers" 
                className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                  isActive('/employers') ? 'text-accent' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-4 h-4" />
                For Employers
              </Link>
              <Link 
                to="/professionals" 
                className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                  isActive('/professionals') ? 'text-accent' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <User className="w-4 h-4" />
                For Professionals
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive('/about') ? 'text-accent' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/insights" 
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive('/insights') ? 'text-accent' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive('/contact') ? 'text-accent' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <PersonaToggle />
              <Button variant="hero" size="default" className="self-start" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};