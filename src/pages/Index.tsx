import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChefHat, Clock, Heart, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-jollof.jpg";
import suyaImage from "@/assets/suya.jpg";
import yamImage from "@/assets/pounded-yam.jpg";

export default function Home() {
  const features = [
    { icon: ChefHat, title: "Authentic Recipes", description: "Traditional Nigerian dishes prepared with love and care" },
    { icon: Clock, title: "Fast Delivery", description: "Hot, fresh food delivered to your doorstep" },
    { icon: Heart, title: "Made with Love", description: "Every dish crafted with passion and authenticity" },
  ];

  const faqs = [
    {
      question: "What areas do you deliver to in Moscow?",
      answer: "We deliver throughout Moscow! Enter your address during checkout and we'll confirm if we can deliver to your location. Delivery typically takes 45-60 minutes."
    },
    {
      question: "Are your dishes authentic Nigerian cuisine?",
      answer: "Absolutely! All our recipes are traditional Nigerian dishes passed down through generations. We use authentic ingredients and cooking methods to bring you the real taste of Nigeria."
    },
    {
      question: "How spicy are your dishes?",
      answer: "We indicate the spice level for each dish on our menu (from Not Spicy to Very Hot). If you prefer less spice, just add a note in the special instructions when ordering and we'll adjust it for you."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes! We have several vegetarian options including Moi Moi, Jollof Rice (vegetarian version), fried plantains, and more. Check our menu for full details."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! After placing your order, you'll receive an order number. Use it on our 'Track Order' page to see real-time updates on your order status."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery and all major credit cards. Payment is collected when your order arrives."
    },
    {
      question: "Do you cater for events?",
      answer: "Yes! We offer catering services for parties, corporate events, and special occasions. Please contact us directly to discuss your catering needs."
    },
    {
      question: "How do I know if an item is available?",
      answer: "All items shown on our menu are currently available. If something runs out, we'll contact you immediately to suggest alternatives."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-500/20 to-amber-600/20" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroImage})` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-700 font-semibold flex items-center gap-2">
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              Authentic Nigerian Cuisine in Russia
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
              Taste of Home,
            </span>
            <br />
            <span className="text-gray-800">Right Here in Moscow</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the rich flavors of Nigeria with Ajoke's Kitchen. From Jollof Rice to Egusi Soup, every bite brings you closer to home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Menu">
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                Order Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/About">
              <Button variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-xl">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ajoke's Kitchen?</h2>
            <p className="text-xl text-gray-600">Quality, authenticity, and love in every dish</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Favorites</h2>
            <p className="text-xl text-gray-600">The dishes everyone loves</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jollof Rice", image: heroImage, description: "The iconic West African dish" },
              { name: "Suya", image: suyaImage, description: "Spicy grilled meat skewers" },
              { name: "Pounded Yam", image: yamImage, description: "Served with rich soups like Egusi or Okra" },
            ].map((dish, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/Menu">
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg">
                View Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about ordering from us</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl px-6 border-none shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-lg text-gray-900 hover:text-orange-600 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hungry? Let's Get You Fed!
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Order now and experience the warmth and flavor of authentic Nigerian cuisine
          </p>
          <Link to="/Menu">
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all">
              Start Your Order
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
