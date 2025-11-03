import React from "react";
import { UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-600 via-red-600 to-amber-600 text-white relative overflow-hidden">
      {/* Soft glowing background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="mb-8 flex justify-center">
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform overflow-hidden">
            <img
              src={require("@/assets/logo.png")}
              alt="Ajoke's Kitchen Logo"
              className="object-contain w-24 h-24"
            />
        </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-4">Ajoke’s Kitchen</h1>
        <p className="text-3xl md:text-4xl font-semibold bg-white/20 px-6 py-3 rounded-full border border-white/30 backdrop-blur-md inline-block">
          Coming Soon
        </p>

        <p className="mt-8 text-lg text-white/80 max-w-xl mx-auto">
          We’re cooking something special — stay tuned for the grand opening!
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-white/70 text-sm">
        Made with ❤️ and spice in Moscow
      </footer>
    </div>
  );
}
