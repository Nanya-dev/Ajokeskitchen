import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  // Countdown logic
  useEffect(() => {
    const christmas = new Date("2025-12-25T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = christmas - now;

      if (diff <= 0) {
        setTimeLeft("🎄 Merry Christmas!");
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-amber-600 text-white overflow-hidden">
      
      {/* 🎄 Christmas Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 w-full bg-green-700 text-white py-3 px-6 flex justify-between items-center z-50 shadow-lg">
          <p className="text-sm md:text-base font-semibold">
            🎅 Site Opening Countdown: <span className="text-yellow-300">{timeLeft}</span>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="text-white hover:text-green-300 transition"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* 🧡 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full flex-grow pt-32 md:pt-40">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden mb-6">
          <img
            src={logo}
            alt="Ajoke's Kitchen Logo"
            className="object-cover w-full h-full scale-110"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Ajoke’s Kitchen
        </h1>

        <p className="text-2xl md:text-3xl font-semibold bg-white/20 px-6 py-3 rounded-full border border-white/30 backdrop-blur-md inline-block">
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
