import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import About from "./pages/About";
import TrackOrder from "./pages/TrackOrder";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout"; // ✅ added

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Wrap customer-facing pages with Layout */}
          <Route
            path="/"
            element={
              <Layout currentPageName="Home">
                <Index />
              </Layout>
            }
          />
          <Route
            path="/menu"
            element={
              <Layout currentPageName="Menu">
                <Menu />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout currentPageName="Checkout">
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout currentPageName="About">
                <About />
              </Layout>
            }
          />
          <Route
            path="/track-order"
            element={
              <Layout currentPageName="OrderTracking">
                <TrackOrder />
              </Layout>
            }
          />

          {/* Admin page can have its own layout */}
          <Route
            path="/admin"
            element={
              <Layout currentPageName="AdminOrders">
                <Admin />
              </Layout>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
