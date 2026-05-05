import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageLoadingSkeleton } from "@/components/ui/loading-skeleton";
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
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/executive-search" element={<ExecutiveSearch />} />
              <Route path="/services/talent-solutions" element={<TalentSolutions />} />
              <Route path="/services/growth-acceleration" element={<GrowthAcceleration />} />
              <Route path="/services/career-advisory" element={<CareerAdvisory />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Legacy redirects */}
              <Route path="/employers" element={<Navigate to="/services/talent-solutions" replace />} />
              <Route path="/professionals" element={<Navigate to="/services/career-advisory" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </PersonaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
