'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneIcon, 
  VideoCameraIcon, 
  FingerPrintIcon, 
  ShieldCheckIcon, 
  FireIcon, 
  WifiIcon, 
  LightBulbIcon, 
  BoltIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'ipbx',
    title: 'IPBX (INTERCOM PHONES)',
    icon: PhoneIcon,
    desc: 'Seamless internal communication with advanced intercom systems.',
    features: ['Crystal clear voice', 'Scalable architecture', 'Remote extensions'],
  },
  {
    id: 'cctv',
    title: 'Surveillance Solutions',
    icon: VideoCameraIcon,
    desc: 'Crystal-clear monitoring with HD/IP cameras for total security.',
    features: ['HD & IP Cameras', 'Night Vision', 'Remote Mobile View'],
  },
  {
    id: 'access',
    title: 'Access & Attendance',
    icon: FingerPrintIcon,
    desc: 'Secure entry and time-tracking biometrics for modern workplaces.',
    features: ['Biometric Entry', 'Face Recognition', 'Attendance Logs'],
  },
  {
    id: 'security',
    title: 'Security Solutions',
    icon: ShieldCheckIcon,
    desc: '24/7 protection against intrusions with advanced burglar alarms.',
    features: ['Motion Sensors', 'Door Contacts', 'Instant Alerts'],
  },
  {
    id: 'fire',
    title: 'Fire Alarm System',
    icon: FireIcon,
    desc: 'Life-saving detection for all environments, addressable & conventional.',
    features: ['Smoke Detection', 'Heat Sensors', 'Emergency Alarms'],
  },
  {
    id: 'networking',
    title: 'Networking (DATA & VOICE)',
    icon: WifiIcon,
    desc: 'Reliable wired/wireless networks for seamless connectivity.',
    features: ['Structured Cabling', 'Wi-Fi Solutions', 'Server Racks'],
  },
  {
    id: 'smart',
    title: 'Smart Room Solutions',
    icon: LightBulbIcon,
    desc: 'Automated lighting, AV, and controls for modern living.',
    features: ['Mood Lighting', 'Voice Control', 'Energy Saving'],
  },
  {
    id: 'elv',
    title: 'ELV System',
    icon: BoltIcon,
    desc: 'Integrated low-voltage systems for building management.',
    features: ['PA Systems', 'BMS Integration', 'Cable Management'],
  },
  {
    id: 'conference',
    title: 'Video & Audio Conference',
    icon: UserGroupIcon,
    desc: 'High-quality hybrid meeting tech for global collaboration.',
    features: ['4K Video', 'Noise Cancellation', 'Screen Sharing'],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section id="products" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Solutions</h2>
          <div className="w-20 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 min-w-[280px] lg:min-w-0 text-left border border-transparent ${
                  activeTab === service.id
                    ? 'bg-[#0ea5e9]/10 border-[#0ea5e9] shadow-[0_0_15px_rgba(14,165,233,0.1)]'
                    : 'hover:bg-white/5 hover:border-white/10'
                }`}
              >
                <service.icon className={`w-8 h-8 ${activeTab === service.id ? 'text-[#0ea5e9]' : 'text-gray-400'}`} />
                <div>
                  <h3 className={`font-semibold ${activeTab === service.id ? 'text-white' : 'text-gray-300'}`}>
                    {service.title.split('(')[0]}
                  </h3>
                  <p className="text-xs text-gray-500 truncate max-w-[200px]">{service.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                activeTab === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#101018] border border-gray-800 rounded-2xl p-8 h-full relative group hover:border-[#0ea5e9]/50 transition-colors"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <service.icon className="w-64 h-64" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#0ea5e9]/20 rounded-lg">
                          <service.icon className="w-8 h-8 text-[#0ea5e9]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        {service.desc}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="text-[#0ea5e9] font-semibold mb-4 uppercase tracking-wider text-sm">Key Features</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-400">
                              <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="px-6 py-2 bg-[#0ea5e9] text-white rounded-lg hover:bg-[#0284c7] transition-colors font-medium text-sm">
                        Learn More
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
