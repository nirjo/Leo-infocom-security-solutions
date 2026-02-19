'use client';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Successful Installations', value: '500+', color: 'text-blue-400' },
  { label: 'Years of Excellence', value: '10+', color: 'text-purple-400' },
  { label: 'Uptime Reliability', value: '99.9%', color: 'text-green-400' },
  { label: 'Happy Clients', value: '300+', color: 'text-orange-400' },
];

const Stats = () => {
  return (
    <section id="stats" className="py-12 bg-black/50 border-y border-white/5 relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <h3 className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform`}>
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Stats;
