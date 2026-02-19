'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Camera, 
  Fingerprint, 
  GalleryVerticalEnd, 
  Flame, 
  Network, 
  Lightbulb, 
  Zap, 
  Video 
} from 'lucide-react';

const services = [
  {
    id: 'ipbx',
    title: 'IPBX Systems',
    icon: Phone,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    desc: 'Advanced intercom for seamless voice communication.',
    features: ['Crystal Clear Voice', 'Scalable', 'Remote Access'],
  },
  {
    id: 'cctv',
    title: 'Surveillance',
    icon: Camera,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    desc: 'HD & IP cameras for 24/7 monitoring and recording.',
    features: ['Night Vision', 'Mobile View', 'AI Detection'],
  },
  {
    id: 'access',
    title: 'Access Control',
    icon: Fingerprint,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    desc: 'Biometric and card-based secure entry systems.',
    features: ['Face Recog', 'Time Attendance', 'Logs'],
  },
  {
    id: 'security',
    title: 'Burglar Alarm',
    icon: GalleryVerticalEnd,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
    desc: 'Intrusion detection to protect your premises.',
    features: ['Motion Sensors', 'Siren Alerts', 'App Control'],
  },
  {
    id: 'fire',
    title: 'Fire Alarm',
    icon: Flame,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
    desc: 'Early warning systems for fire safety.',
    features: ['Smoke Detectors', 'Heat Sensors', 'Emergency Call'],
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: Network,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    desc: 'Robust wired and wireless network infrastructure.',
    features: ['Structured Cabling', 'Wi-Fi', 'Server Racks'],
  },
  {
    id: 'smart',
    title: 'Smart Room',
    icon: Lightbulb,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    desc: 'Automated lighting and climate control systems.',
    features: ['Voice Control', 'Mood Lighting', 'Energy Saving'],
  },
  {
    id: 'elv',
    title: 'ELV Systems',
    icon: Zap,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    border: 'border-indigo-400/20',
    desc: 'Extra Low Voltage systems integration.',
    features: ['PA Systems', 'BMS', 'Integration'],
  },
  {
    id: 'conference',
    title: 'Conferencing',
    icon: Video,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
    desc: 'High-quality video and audio conferencing setup.',
    features: ['4K Video', 'Clear Audio', 'Screen Share'],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Innovative Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive security and technology services tailored for your peace of mind.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Icons Grid / Tabs */}
          <div className="lg:w-1/3 grid grid-cols-3 gap-3">
            {services.map((service, idx) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveTab(service.id)}
                className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border ${
                  activeTab === service.id
                    ? `${service.bg} ${service.border} shadow-[0_0_20px_rgba(0,0,0,0.5)] scale-105 z-10`
                    : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <service.icon className={`w-8 h-8 ${service.color}`} />
                <span className={`text-xs font-medium ${activeTab === service.id ? 'text-white' : 'text-gray-400'}`}>
                  {service.title.split(' ')[0]}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                activeTab === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`h-full rounded-3xl p-8 border ${service.border} bg-gradient-to-br from-black/80 to-transparent backdrop-blur-xl relative overflow-hidden`}
                  >
                    {/* Background Icon */}
                    <service.icon className={`absolute -right-10 -bottom-10 w-64 h-64 opacity-5 ${service.color}`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-2xl ${service.bg}`}>
                          <service.icon className={`w-8 h-8 ${service.color}`} />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>
                      
                      <p className="text-xl text-gray-300 mb-8 font-light">
                        {service.desc}
                      </p>
                      
                      <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                            <span className={`text-sm font-medium ${service.color}`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105 bg-gradient-to-r ${
                        service.id === 'ipbx' ? 'from-blue-600 to-blue-400' : 
                        service.id === 'security' ? 'from-red-600 to-red-400' :
                        service.id === 'fire' ? 'from-orange-600 to-orange-400' :
                        'from-purple-600 to-purple-400'
                      }`}>
                        View Details
                      </button>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
