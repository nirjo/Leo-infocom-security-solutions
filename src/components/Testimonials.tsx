'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Leo Infocom transformed our office security. The IPBX and CCTV integration is seamless, and the support is top-notch.",
    author: "Rajesh Kumar",
    role: "CEO, TechPark",
    rating: 5
  },
  {
    text: "Professional installation and excellent after-sales service. Their fire alarm systems give us total peace of mind.",
    author: "Anita Desai",
    role: "Manager, BlueHeight Hotel",
    rating: 5
  },
  {
    text: "The best security partners in Puducherry. Innovative smart room solutions that actually work reliable.",
    author: "Senthil Nathan",
    role: "Owner, Green Villas",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-black/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Quote className="w-16 h-16 text-blue-500 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
        </motion.div>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <p className="text-2xl md:text-3xl font-light text-gray-300 italic mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white">{testimonials[current].author}</h4>
                <p className="text-blue-400 text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-blue-500 w-8' : 'bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
