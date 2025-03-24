import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import News from "@/pages/News";
import Sections from "@/pages/Sections";
import Schedule from "@/pages/Schedule";
import Calendar from "@/pages/Calendar";
import NotFound from "@/pages/not-found";
import { lazy, Suspense } from "react";
import Pisa2025 from "./pages/programs/Pisa2025";
import ScienceClub from "./pages/clubs/ScienceClub";
import ArtClub from "./pages/clubs/ArtClub";
import DebateClub from "./pages/clubs/DebateClub";

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-t-[#26a69a] border-r-transparent border-b-[#7e57c2] border-l-transparent rounded-full animate-spin"></div>
  </div>
);

// Lazy loaded pages
const NewsDetail = lazy(() => import("./pages/news/NewsDetail"));
const MaturaShtetrore = lazy(() => import("./pages/matura/MaturaShtetrore"));
const DigitalLibrary = lazy(() => import("./pages/library/DigitalLibrary"));
const Laboratories = lazy(() => import("./pages/laboratories/Laboratories"));
const Counseling = lazy(() => import("./pages/counseling/Counseling"));
const Admin = lazy(() => import("./pages/Admin"));

function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/sections" component={Sections} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/maturashtetrore" component={MaturaShtetrore} />
        <Route path="/digital-library" component={DigitalLibrary} />
        <Route path="/laboratories" component={Laboratories} />
        <Route path="/counseling" component={Counseling} />
        <Route path="/admin" component={Admin} />
        <Route path="/programs/pisa-2025" component={Pisa2025} />
        <Route path="/clubs/science" component={ScienceClub} />
        <Route path="/clubs/art" component={ArtClub} />
        <Route path="/clubs/debate" component={DebateClub} />
        <Route path="/privacy-policy" component={lazy(() => import("./pages/legal/PrivacyPolicy"))} />
        <Route path="/terms" component={lazy(() => import("./pages/legal/Terms"))} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AppRouter />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;