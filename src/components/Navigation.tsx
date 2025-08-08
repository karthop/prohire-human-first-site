import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, User, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { usePersona } from "@/context/PersonaContext";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { persona } = usePersona();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const storedPersona = (typeof window !== 'undefined' ? localStorage.getItem('persona') : null) as
    | 'employer'
    | 'professional'
    | null;
  const effectivePersona = persona ?? storedPersona ?? null;

  const getMailto = () => {
    const to = ['info','@','prohireresources','.','com'].join('');
    const subject =
      effectivePersona === 'employer'
        ? 'Hiring Inquiry'
        : effectivePersona === 'professional'
        ? 'Career Inquiry'
        : 'General Inquiry';
    const name = typeof window !== 'undefined' ? localStorage.getItem('contact_name') || '' : '';
    const email = typeof window !== 'undefined' ? localStorage.getItem('contact_email') || '' : '';
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n`;
    const params = new URLSearchParams({ subject, body });
    return `mailto:${to}?${params.toString()}`;
  };

  const handleContactClick = () => {
    const href = getMailto();
    window.location.href = href;
  };

  const navLinkBase =
    "text-sm font-medium transition-colors hover:underline underline-offset-4 decoration-accent/60";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card transition-[padding,height] duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${scrolled ? 'h-12' : 'h-16'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="w-9 h-9" priority />
            <span className="text-xl font-bold text-primary">proHIRE resources</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              aria-current={isActive('/') ? 'page' : undefined}
              className={`${navLinkBase} ${isActive('/') ? 'text-accent' : 'text-foreground'}`}
            >
              Home
            </Link>
            <Link
              to="/employers"
              aria-current={isActive('/employers') ? 'page' : undefined}
              className={`${navLinkBase} flex items-center gap-2 ${isActive('/employers') ? 'text-accent' : 'text-foreground'}`}
            >
              <Users className="w-4 h-4" />
              For Employers
            </Link>
            <Link
              to="/professionals"
              aria-current={isActive('/professionals') ? 'page' : undefined}
              className={`${navLinkBase} flex items-center gap-2 ${isActive('/professionals') ? 'text-accent' : 'text-foreground'}`}
            >
              <User className="w-4 h-4" />
              For Professionals
            </Link>
            <Link
              to="/about"
              aria-current={isActive('/about') ? 'page' : undefined}
              className={`${navLinkBase} ${isActive('/about') ? 'text-accent' : 'text-foreground'}`}
            >
              About
            </Link>
            <Link
              to="/insights"
              aria-current={isActive('/insights') ? 'page' : undefined}
              className={`${navLinkBase} ${isActive('/insights') ? 'text-accent' : 'text-foreground'}`}
            >
              Insights
            </Link>
            <button
              type="button"
              onClick={handleContactClick}
              className={`${navLinkBase} text-foreground`}
              aria-label="Contact via email"
            >
              Contact
            </button>
            {/* Right controls */}
            <div className="flex items-center gap-3 pl-3">
              <ThemeToggle />
            </div>
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
                aria-current={isActive('/') ? 'page' : undefined}
                className={`${navLinkBase} ${isActive('/') ? 'text-accent' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/employers"
                aria-current={isActive('/employers') ? 'page' : undefined}
                className={`${navLinkBase} flex items-center gap-2 ${isActive('/employers') ? 'text-accent' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-4 h-4" />
                For Employers
              </Link>
              <Link
                to="/professionals"
                aria-current={isActive('/professionals') ? 'page' : undefined}
                className={`${navLinkBase} flex items-center gap-2 ${isActive('/professionals') ? 'text-accent' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                <User className="w-4 h-4" />
                For Professionals
              </Link>
              <Link
                to="/about"
                aria-current={isActive('/about') ? 'page' : undefined}
                className={`${navLinkBase} ${isActive('/about') ? 'text-accent' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/insights"
                aria-current={isActive('/insights') ? 'page' : undefined}
                className={`${navLinkBase} ${isActive('/insights') ? 'text-accent' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>
              <button
                type="button"
                onClick={() => { setIsOpen(false); handleContactClick(); }}
                className={`${navLinkBase} text-foreground`}
                aria-label="Contact via email"
              >
                Contact
              </button>
              <div className="flex items-center gap-3 pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
