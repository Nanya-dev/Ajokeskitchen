import { Link, useLocation } from "react-router-dom";
import { Home, UtensilsCrossed, Package, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <UtensilsCrossed className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Ajoke's Kitchen</h1>
              <p className="text-xs text-muted-foreground">Authentic Nigerian Cuisine</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"}>
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant={isActive("/menu") ? "default" : "ghost"}>
                <UtensilsCrossed className="h-4 w-4 mr-2" />
                Menu
              </Button>
            </Link>
            <Link to="/track-order">
              <Button variant={isActive("/track-order") ? "default" : "ghost"}>
                <Package className="h-4 w-4 mr-2" />
                Track Order
              </Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive("/about") ? "default" : "ghost"}>
                <Heart className="h-4 w-4 mr-2" />
                About
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
