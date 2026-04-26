import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MobileStickyCtaBar } from "@/components/mobile-sticky-cta-bar";
import { PageLoader } from "@/components/page-loader";

const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/home"));
const Work = lazy(() => import("@/pages/work"));
const Project = lazy(() => import("@/pages/project"));
const Services = lazy(() => import("@/pages/services"));
const ServiceDetail = lazy(() => import("@/pages/service-detail"));
const Sectors = lazy(() => import("@/pages/sectors"));
const SectorDetail = lazy(() => import("@/pages/sector-detail"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Journal = lazy(() => import("@/pages/journal"));
const Pricing = lazy(() => import("@/pages/pricing"));
const Photography = lazy(() => import("@/pages/photography"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const CaseStudyDetail = lazy(() => import("@/pages/case-study-detail"));
const PurposeLedVideo = lazy(() => import("@/pages/purpose-led-video"));
const Workshops = lazy(() => import("@/pages/workshops"));
const WorkshopPhotography = lazy(() => import("@/pages/workshop-photography"));
const WorkshopVideo = lazy(() => import("@/pages/workshop-video"));
const WorkshopFilm = lazy(() => import("@/pages/workshop-film"));

const PaletteDemo = import.meta.env.DEV
  ? lazy(() => import("@/pages/palette-demo"))
  : null;

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/work/:slug" component={Project} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/sectors" component={Sectors} />
      <Route path="/sectors/:slug" component={SectorDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/journal" component={Journal} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/photography" component={Photography} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/:slug" component={CaseStudyDetail} />
      <Route path="/workshops" component={Workshops} />
      <Route path="/workshop/small-business-photography" component={WorkshopPhotography} />
      <Route path="/workshop/video-brief" component={WorkshopVideo} />
      <Route path="/workshop/brand-film" component={WorkshopFilm} />
      <Route path="/purpose-led-video" component={PurposeLedVideo} />
      {PaletteDemo && (
        <Route path="/palette-demo">
          <PaletteDemo />
        </Route>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="flashbuzz-theme">
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <AppRoutes />
              </Suspense>
            </main>
            <Footer />
          </div>
          <MobileStickyCtaBar />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
