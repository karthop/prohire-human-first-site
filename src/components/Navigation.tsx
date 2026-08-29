import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const services = [
  { to: "/services/executive-search", label: "Executive Search & Leadership Advisory" },
  { to: "/services/hr-support-advisory", label: "HR Support & Advisory" },
  { to: "/services/growth-acceleration", label: "Growth Acceleration" },
  { to: "/services/digital-positioning", label: "Digital Positioning & Web Design" },
  { to: "/services/career-advisory", label: "Career Advisory" },
  { to: "/services/the-first-move", label: "The First Move" },
];

const primary = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Capabilities", children: services },
  { to: "/industries", label: "Industries" },
  { to: "/approach", label: "How We Work" },
  { to: "/what-were-seeing", label: "Insights & Market Trends" },
  { to: "/about", label: "About" },
  { to: "https://app.prohireresources.com", label: "proSCREEN", external: true },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const hoverTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const linkClasses = (path: string) =>
    `text-base transition-colors ${
      isActive(path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  const openServices = () => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    hoverTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleCapabilitiesClick = () => {
    if (window.innerWidth >= 1024) {
      openServices();
    } else {
      setServicesOpen((v) => !v);
    }
  };

  const handleCapabilitiesEnter = () => {
    if (window.innerWidth >= 1024) openServices();
  };

  const handleCapabilitiesLeave = () => {
    if (window.innerWidth >= 1024) closeServices();
  };

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
              onClick={() =>
                setIsOpen((v) => {
                  if (v) setServicesOpen(false);
                  return !v;
                })
              }
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
                  <div
                    key={l.to}
                    className="flex flex-col gap-3"
                    onMouseEnter={handleCapabilitiesEnter}
                    onMouseLeave={handleCapabilitiesLeave}
                  >
                    <button
                      type="button"
                      onClick={handleCapabilitiesClick}
                      aria-expanded={servicesOpen}
                      aria-label="Toggle Capabilities submenu"
                      className={`flex items-center justify-between w-full text-left text-base transition-colors ${
                        isActive(l.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-md bg-muted/60">
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                    {servicesOpen && (
                      <div className="flex flex-col gap-3 pl-4 border-l border-border">
                        <Link
                          to="/services"
                          className={`text-sm ${
                            isActive("/services") ? "text-foreground" : "text-muted-foreground"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="block font-medium">Overview</span>
                          <span className="block text-muted-foreground">
                            Explore all proHIRE capabilities
                          </span>
                        </Link>
                        {l.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={`text-sm ${
                              isActive(c.to) ? "text-foreground" : "text-muted-foreground"
                            }`}
                            onClick={() => setIsOpen(false)}
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
                    aria-label="proSCREEN (opens in new tab)"
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
