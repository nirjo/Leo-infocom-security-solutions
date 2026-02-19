'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    bg: "bg-gradient-to-r from-gray-900 to-gray-800",
    title: "Secure Your World",
    subtitle: "Advanced IPBX & CCTV Solutions",
    cta: "Shop Now",
    image: null // Using CSS gradients/text primarily to avoid asset issues
  },
  {
    bg: "bg-gradient-to-r from-blue-900 to-blue-800",
    title: "Smart Home Automation",
    subtitle: "Up to 30% Off on Smart Switches",
    cta: "See Deals",
    image: null
  },
  {
    bg: "bg-gradient-to-r from-green-900 to-green-800",
    title: "Fire Safety Week",
    subtitle: "Protect what matters most",
    cta: "Explore",
    image: null
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[1500px] mx-auto z-0">
      <div className="relative h-[250px] md:h-[400px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            } ${slide.bg}`}
          >
            <div className="h-full flex flex-col justify-center px-10 md:px-20 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 animate-fade-in-up">{slide.title}</h2>
              <p className="text-xl mb-6 text-gray-200">{slide.subtitle}</p>
              <button className="w-fit bg-amazon-orange hover:bg-[#fa8900] text-amazon-blue px-6 py-2 rounded-sm font-semibold shadow-sm transition-colors">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
        
        {/* Gradient Overlay looking like Amazon's fade to white/gray at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#EAEDED] to-transparent z-20 pointer-events-none"></div>

        {/* Arrows */}
        <button 
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/4 z-30 p-2 hover:border hover:border-white rounded-sm focus:outline-none"
        >
          <ChevronLeft className="w-10 h-10 text-white drop-shadow-lg" />
        </button>
        <button 
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="absolute right-2 top-1/4 z-30 p-2 hover:border hover:border-white rounded-sm focus:outline-none"
        >
          <ChevronRight className="w-10 h-10 text-white drop-shadow-lg" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
