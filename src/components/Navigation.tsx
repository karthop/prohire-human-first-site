import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const primary = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/approach", label: "Approach" },
  { to: "/what-were-seeing", label: "What We're Seeing" },
  { to: "/about", label: "About" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-colors duration-200 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8" priority />
            <span className="font-serif text-lg text-foreground">proHIRE resources</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {primary.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                aria-current={isActive(l.to) ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive(l.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary-light transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-5">
              {primary.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-base ${isActive(l.to) ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-base font-medium bg-primary text-primary-foreground px-5 py-3 inline-block w-fit"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
