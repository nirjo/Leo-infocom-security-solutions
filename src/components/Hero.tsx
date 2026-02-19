'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
        {/* Animated Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative inline-block"
        >
          <div className="w-40 h-40 mx-auto mb-6 relative group">
             <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
             <div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 shadow-[0_0_50px_rgba(14,165,233,0.3)] relative z-10 group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl filter drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]">🦁</span>
             </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Secure Tomorrow with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 animate-gradient-x background-animate">
            Leo Infocom Today
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 font-light"
        >
          <span className="text-blue-400">IPBX</span> • <span className="text-purple-400">CCTV</span> • <span className="text-green-400">Alarms</span> • <span className="text-orange-400">Smart Solutions</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#products"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            View Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white rounded-full font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
          >
            Get Quote
            <ShieldCheck className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
