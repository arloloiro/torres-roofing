import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutUs } from "@/components/sections/AboutUs";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { MapSection } from "@/components/sections/MapSection"; // Agregado
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Toaster } from "react-hot-toast";
import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Outlet,
} from "@tanstack/react-router";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsOfService } from "@/pages/TermsOfService";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Toaster position="top-center" />
      <Outlet />
      <FloatingWhatsApp />
    </div>
  ),
});

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustBar />
      <AboutUs />
      <Services />
      <Gallery />
      <LeadForm />
      <MapSection />
    </main>
    <Footer />
  </>
);

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPolicy,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsOfService,
});

const routeTree = rootRoute.addChildren([indexRoute, privacyRoute, termsRoute]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
