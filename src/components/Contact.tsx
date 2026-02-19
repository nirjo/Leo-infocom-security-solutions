'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
        setFormStatus('success');
    }, 2000); // Simulate API call
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Security</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to upgrade your safety? Get a free quote or consultation today.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 9600162818', href: 'tel:9600162818', color: 'text-blue-400' },
                { icon: Mail, label: 'Email Us', value: 'info@leoinfocom.com', href: 'mailto:info@leoinfocom.com', color: 'text-purple-400' },
                { icon: MapPin, label: 'Visit Us', value: 'Puducherry, India', href: '#', color: 'text-green-400' }
              ].map((item, idx) => (
                <a key={idx} href={item.href} className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className={`p-3 rounded-lg bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/leoinfocom', color: 'hover:text-pink-500' },
                { icon: Facebook, href: 'https://facebook.com/leoinfocom', color: 'hover:text-blue-500' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-400' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all hover:bg-white/10 ${social.color} hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-[#0a0a0a] p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:bg-blue-500/5 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Phone</label>
                    <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:bg-green-500/5 transition-all outline-none" placeholder="+91..." />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:bg-purple-500/5 transition-all outline-none" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea rows={4} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:bg-orange-500/5 transition-all outline-none" placeholder="How can we help?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-400 text-center text-sm animate-fade-in">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
