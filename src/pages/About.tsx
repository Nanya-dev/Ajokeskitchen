import { Navigation } from "@/components/Navigation";
import React from "react";
import { Heart, Award, Users, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bringing the warmth and flavors of Nigeria to the heart of Russia
          </p>
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/image.png"
              alt="African woman chef"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Welcome to Ajoke's Kitchen</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by Ajoke, a passionate Nigerian chef who moved to Moscow with a dream - 
              to share the rich, vibrant flavors of her homeland with the Russian community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as cooking for friends and family has blossomed into a beloved 
              restaurant that serves authentic Nigerian cuisine, prepared with traditional 
              recipes passed down through generations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every dish we serve is made with love, using the finest ingredients and 
              traditional cooking methods that honor our culinary heritage.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Heart,
              title: "Made with Love",
              description: "Every dish prepared with passion and care"
            },
            {
              icon: Award,
              title: "Authentic Recipes",
              description: "Traditional Nigerian cooking methods"
            },
            {
              icon: Users,
              title: "Community First",
              description: "Creating a home away from home"
            },
            {
              icon: MapPin,
              title: "Local Pride",
              description: "Proudly serving Moscow since 2020"
            }
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            To create a bridge between cultures through food, bringing people together 
            over authentic Nigerian cuisine. We believe that every meal is an opportunity 
            to share our culture, tell our stories, and create lasting memories.
          </p>
        </div>
      </div>
    </div>
    
  );
}