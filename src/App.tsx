import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
const Insights = lazy(() => import("./pages/Insights"));
const Approach = lazy(() => import("./pages/Approach"));
const Industries = lazy(() => import("./pages/Industries"));
const Services = lazy(() => import("./pages/Services"));
const ExecutiveSearch = lazy(() => import("./pages/services/ExecutiveSearch"));
const TalentSolutions = lazy(() => import("./pages/services/TalentSolutions"));
const GrowthAcceleration = lazy(() => import("./pages/services/GrowthAcceleration"));
const CareerAdvisory = lazy(() => import("./pages/services/CareerAdvisory"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { ReeeeWidget } from "@/components/assistant/ReeeeWidget";

const queryClient = new QueryClient();

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
              <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              {/* Legacy redirects */}
              <Route path="/employers" element={<Navigate to="/services/talent-solutions" replace />} />
              <Route path="/professionals" element={<Navigate to="/services/career-advisory" replace />} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </Suspense>
          <Footer />
          <ReeeeWidget />
        </BrowserRouter>
      </PersonaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
