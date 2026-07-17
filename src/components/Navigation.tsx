import { useEffect, useRef, useState } from "react";
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
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const openServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

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
            {primary.map((l) =>
              l.children ? (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <Link
                    to={l.to}
                    aria-current={isActive(l.to) ? "page" : undefined}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    onFocus={openServices}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive(l.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  {servicesOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full pt-3 w-[22rem]"
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                    >
                      <div className="bg-background border border-border shadow-lg py-2">
                        {l.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            role="menuitem"
                            className={`block px-5 py-3 text-sm transition-colors ${
                              isActive(c.to)
                                ? "text-foreground bg-secondary/60"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                        <div className="border-t border-border mt-2 pt-2">
                          <Link
                            to="/services"
                            className="block px-5 py-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
                          >
                            View all services
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
            <Link
              to="/contact"
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary-light transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle className="ml-1" />
          </div>

          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />

            <button
              type="button"
              className="p-2 -mr-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-5">
              {primary.map((l) =>
                l.children ? (
                  <div key={l.to} className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Link
                        to={l.to}
                        className={`text-base ${isActive(l.to) ? "text-foreground" : "text-muted-foreground"}`}
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
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`text-base ${isActive(l.to) ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {l.label}
                  </Link>
                )
              )}
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
