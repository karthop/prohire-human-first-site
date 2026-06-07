import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageLoadingSkeleton } from "@/components/ui/loading-skeleton";
import { PageTransition } from "@/components/motion/PageTransition";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PersonaProvider } from "@/context/PersonaContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const WhatWereSeeing = lazy(() => import("./pages/WhatWereSeeing"));
const Approach = lazy(() => import("./pages/Approach"));
const Industries = lazy(() => import("./pages/Industries"));
const Services = lazy(() => import("./pages/Services"));
const ExecutiveSearch = lazy(() => import("./pages/services/ExecutiveSearch"));
const TalentSolutions = lazy(() => import("./pages/services/TalentSolutions"));
const GrowthAcceleration = lazy(() => import("./pages/services/GrowthAcceleration"));
const CareerAdvisory = lazy(() => import("./pages/services/CareerAdvisory"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { ReeceWidget } from "@/components/assistant/ReeceWidget";

const queryClient = new QueryClient();

const legacyRedirects: Record<string, string> = {
  "/insights": "/what-were-seeing",
  "/field-notes": "/what-were-seeing",
  "/employers": "/services/talent-solutions",
  "/professionals": "/services/career-advisory",
  "/talent-areas": "/services",
  "/networking-strategies": "/what-were-seeing",
  "/dei-mindful-humans": "/about",
  "/resume-cover-letter-writing": "/services/career-advisory",
};

const LegacyRedirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let canonical: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://prohireresources.com${to}`);

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    const redirectTimer = window.setTimeout(() => {
      navigate(to, { replace: true });
    }, 75);

    return () => window.clearTimeout(redirectTimer);
  }, [navigate, to]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PersonaProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Navigation />
          <Suspense fallback={<PageLoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/services/executive-search" element={<PageTransition><ExecutiveSearch /></PageTransition>} />
              <Route path="/services/talent-solutions" element={<PageTransition><TalentSolutions /></PageTransition>} />
              <Route path="/services/growth-acceleration" element={<PageTransition><GrowthAcceleration /></PageTransition>} />
              <Route path="/services/career-advisory" element={<PageTransition><CareerAdvisory /></PageTransition>} />
              <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
              <Route path="/approach" element={<PageTransition><Approach /></PageTransition>} />
              <Route path="/what-were-seeing" element={<PageTransition><WhatWereSeeing /></PageTransition>} />
              <Route path="/insights" element={<LegacyRedirect to={legacyRedirects["/insights"]} />} />
              <Route path="/field-notes" element={<LegacyRedirect to={legacyRedirects["/field-notes"]} />} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              {/* Legacy redirects */}
              <Route path="/employers" element={<LegacyRedirect to={legacyRedirects["/employers"]} />} />
              <Route path="/professionals" element={<LegacyRedirect to={legacyRedirects["/professionals"]} />} />
              <Route path="/talent-areas" element={<LegacyRedirect to={legacyRedirects["/talent-areas"]} />} />
              <Route path="/networking-strategies" element={<LegacyRedirect to={legacyRedirects["/networking-strategies"]} />} />
              <Route path="/dei-mindful-humans" element={<LegacyRedirect to={legacyRedirects["/dei-mindful-humans"]} />} />
              <Route path="/resume-cover-letter-writing" element={<LegacyRedirect to={legacyRedirects["/resume-cover-letter-writing"]} />} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </Suspense>
          <Footer />
          <ReeceWidget />
        </BrowserRouter>
      </PersonaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
