'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#101018] to-[#1e1e2e]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg-pattern.svg')] opacity-10 animate-pulse"></div>
        {/* Particle/Cyber Lines Placeholder - using CSS gradients for subtle effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Large Logo Placeholder if needed, or just text */}
          <div className="w-32 h-32 mx-auto mb-6 relative">
             {/* Use Image component if logo available, or just icon */}
             <div className="w-full h-full bg-[#0ea5e9]/20 rounded-full flex items-center justify-center border border-[#0ea5e9]/50 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                <span className="text-4xl">🦁</span>
             </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Empowering Security with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]">
              Cutting-Edge Solutions
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            IPBX, CCTV, Alarms & More for Your Peace of Mind
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="px-8 py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:scale-105"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 hover:border-[#0ea5e9] text-gray-300 hover:text-white rounded-full font-semibold transition-all hover:bg-[#0ea5e9]/10"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#0ea5e9] rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
