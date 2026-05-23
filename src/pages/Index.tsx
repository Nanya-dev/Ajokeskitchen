import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Heart, Truck } from "lucide-react";
import heroImage from "@/assets/hero-jollof.jpg";
import suyaImage from "@/assets/suya.jpg";
import yamImage from "@/assets/pounded-yam.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                Authentic Nigerian Cuisine in Russia
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Taste of Home,<br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Right Here in Moscow
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the rich flavors of Nigeria with Ajoke's Kitchen. From Jollof Rice to Egusi Soup, 
              every bite brings you closer to home.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/menu">
                <Button size="lg" className="text-lg px-8">
                  Order Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Ajoke's Kitchen?</h2>
            <p className="text-xl text-muted-foreground">Quality, authenticity, and love in every dish</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-12 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Authentic Recipes</h3>
                <p className="text-muted-foreground">
                  Traditional Nigerian dishes prepared with love and care
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-12 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Hot, fresh food delivered to your doorstep
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-12 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every dish crafted with passion and authenticity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Customer Favorites</h2>
            <p className="text-xl text-muted-foreground">The dishes everyone loves</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Jollof Rice" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Jollof Rice</h3>
                <p className="text-muted-foreground">The iconic West African dish</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={yamImage} 
                  alt="Egusi Soup" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Egusi Soup</h3>
                <p className="text-muted-foreground">Rich melon seed soup</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={suyaImage} 
                  alt="Suya" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Suya</h3>
                <p className="text-muted-foreground">Spicy grilled meat skewers</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hungry? Let's Get You Fed!</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Order now and experience the warmth and flavor of authentic Nigerian cuisine
          </p>
          <Link to="/menu">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Order
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
