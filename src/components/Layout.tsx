import React from "react";
import logo from "@/assets/logo.png"; 
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  UtensilsCrossed,
  Package,
  Heart,
  Phone,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const customerLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Menu", path: "/menu", icon: UtensilsCrossed },
    { name: "Track Order", path: "/track-order", icon: Package },
    { name: "About", path: "/about", icon: Heart },
  ];

  const adminLinks = [
    { name: "Orders", path: "/admin", icon: Package },
    { name: "Menu Management", path: "/admin/menu", icon: UtensilsCrossed },
  ];

  const isAdminPage =
    location.pathname.startsWith("/admin") && currentPageName !== "AdminLogin";

  if (currentPageName === "AdminLogin") return <>{children}</>;

  // ADMIN LAYOUT
  if (isAdminPage) {
    return (
      <div className="min-h-screen bg-gray-50 overflow-hidden">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/admin" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                  <p className="text-xs text-gray-500">Ajoke's Kitchen</p>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-4">
                {adminLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      location.pathname === link.path
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  onClick={() => alert("Logged out!")}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </nav>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-gray-600 transition-all ${
                      mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-gray-600 transition-all ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-gray-600 transition-all ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            {mobileMenuOpen && (
              <nav className="md:hidden py-4 border-t overflow-x-hidden">
                {adminLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${
                      location.pathname === link.path
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => alert("Logged out!")}
                  className="flex items-center gap-3 px-4 py-3 mt-2 border-t text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </nav>
            )}
          </div>
        </header>

        <main className="pt-20 african-pattern overflow-x-hidden">
        {children}
        </main>
      </div>
    );
  }

  // CUSTOMER LAYOUT
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-hidden">
      <style>{`
        :root {
          --primary: #D97644;
          --primary-dark: #B85C2E;
          --accent: #F4A460;
          --green: #2C5F2D;
          --text: #2D1810;
        }
        .african-pattern {
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(217, 118, 68, 0.03) 10px, rgba(217, 118, 68, 0.03) 20px);
        }
      `}</style>
     <div className="overflow-x-hidden">
      <header className="bg-white/95 backdrop-blur-md border-b border-orange-200 fixed top-0 left-0 w-full z-50 shadow-sm overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Ajoke's Kitchen logo"
                className="w-14 h-14 object-contain rounded-full shadow-lg transform group-hover:scale-105 transition-transform"
            />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Ajoke's Kitchen
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  Authentic Nigerian Cuisine
                </p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {customerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-orange-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-orange-600 transition-all ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-orange-600 transition-all ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-orange-600 transition-all ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-orange-200 overflow-x-hidden">
              {customerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

        <main className="pt-20 african-pattern overflow-x-hidden">
        {children}
        </main>

      <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white mt-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-200">
                Ajoke's Kitchen
              </h3>
              <p className="text-orange-100 mb-4">
                Bringing the authentic taste of Nigeria to Russia. Every dish
                tells a story of home.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-200">Contact</h4>
              <div className="space-y-2 text-orange-100">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +7 996 165-94-21
                </p>
                <p>📍 Moscow, Russia</p>
                <p>⏰ Daily: 09:00 - 23:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-200">Quick Links</h4>
              <div className="space-y-2">
                <Link
                  to="/menu"
                  className="block text-orange-100 hover:text-orange-300 transition-colors"
                >
                  Order Online
                </Link>
                <Link
                  to="/about"
                  className="block text-orange-100 hover:text-orange-300 transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-200">
            <p>© 2025 Ajoke's Kitchen. Made with ❤️ and spice.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
