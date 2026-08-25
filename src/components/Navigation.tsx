import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const services = [
  { to: "/services/executive-search", label: "Executive Search & Leadership Advisory" },
  { to: "/services/hr-support-advisory", label: "HR Support & Advisory" },
  { to: "/services/growth-acceleration", label: "Revenue & Operational Acceleration" },
  { to: "/services/career-advisory", label: "Career Advisory" },
  { to: "/services/the-first-move", label: "The First Move" },
];

const primary = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", children: services },
  { to: "/industries", label: "Industries" },
  { to: "/approach", label: "Approach" },
  { to: "/what-were-seeing", label: "What We're Seeing" },
  { to: "/about", label: "About" },
  { to: "https://app.prohireresources.com", label: "proHIRE Platform", external: true },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const linkClasses = (path: string) =>
    `text-base transition-colors ${
      isActive(path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-colors duration-200 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="container-editorial relative">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-12 h-12" priority />
            <span className="font-serif text-xl text-foreground">proHIRE resources</span>
          </Link>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 -mr-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="w-full lg:absolute lg:right-0 lg:top-full lg:w-80 lg:border lg:shadow-lg border-t lg:border-t border-border bg-background py-6 lg:px-6">
            <div className="flex flex-col gap-5">
              {primary.map((l) =>
                l.children ? (
                  <div key={l.to} className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Link
                        to={l.to}
                        className={`text-base ${isActive(l.to) ? "text-foreground" : "text-muted-foreground"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {l.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        aria-label="Toggle services submenu"
                        className="p-2 -mr-2 text-muted-foreground"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <div className="flex flex-col gap-3 pl-4 border-l border-border">
                        {l.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={`text-sm ${
                              isActive(c.to) ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : l.external ? (
                  <a
                    key={l.to}
                    href={l.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses(l.to)}
                    onClick={() => setIsOpen(false)}
                    aria-label="proHIRE Platform (opens in new tab)"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    aria-current={isActive(l.to) ? "page" : undefined}
                    className={linkClasses(l.to)}
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="text-base font-medium bg-primary text-primary-foreground px-5 py-3 inline-block w-fit"
                onClick={() => setIsOpen(false)}
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
