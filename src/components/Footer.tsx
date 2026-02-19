'use client';
import { Facebook, Twitter, Instagram, Linkedin, Shield } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white relative border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="text-4xl filter drop-shadow-[0_0_5px_rgba(14,165,233,0.5)] group-hover:scale-110 transition-transform">🦁</span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Leo Infocom
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering Puducherry with state-of-the-art security solutions. 
              We protect what matters most to you.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'Products', 'Stats', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="hover:text-white hover:pl-2 transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-400">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li className="pt-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs">GST: 33EZJPM3196M1ZQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Leo Infocom & Security Solutions. All rights reserved.</p>
          <p className="mt-2 text-xs">Proprietor: Metildamary</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
