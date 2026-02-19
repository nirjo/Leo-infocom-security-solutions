'use client';
import Link from 'next/link';
import { Globe } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-amazon-blue text-white mt-8">
      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="w-full bg-amazon-light hover:bg-[#485769] py-4 text-sm font-medium transition-colors"
      >
        Back to top
      </button>

      {/* Valid Links Grid */}
      <div className="max-w-[1000px] mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-4">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#about" className="hover:underline">About Leo Infocom</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Press Releases</Link></li>
            <li><Link href="#" className="hover:underline">Amazon Science</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect with Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="https://facebook.com/leoinfocom" className="hover:underline">Facebook</a></li>
            <li><a href="https://instagram.com/leoinfocom" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Make Money with Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:underline">Sell on Leo</Link></li>
            <li><Link href="#" className="hover:underline">Become an Affiliate</Link></li>
            <li><Link href="#" className="hover:underline">Fulfilment by Leo</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Let Us Help You</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:underline">Your Account</Link></li>
            <li><Link href="#" className="hover:underline">Returns Centre</Link></li>
            <li><Link href="#" className="hover:underline">100% Purchase Protection</Link></li>
            <li><Link href="#" className="hover:underline">Help</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-8"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center gap-4 pb-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦁</span>
          <span className="font-bold text-xl">Leo Infocom</span>
        </div>
        
        <div className="flex items-center gap-4 border border-gray-500 rounded-sm px-4 py-2 text-sm text-gray-300">
           <Globe className="w-4 h-4" /> English
        </div>

        <div className="text-xs text-gray-400 text-center mt-4">
          <ul className="flex flex-wrap justify-center gap-4 mb-2">
            <li><a href="#" className="hover:underline">Conditions of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Notice</a></li>
            <li><a href="#" className="hover:underline">Interest-Based Ads</a></li>
          </ul>
          <p>© 1996-{new Date().getFullYear()}, Leo Infocom, Inc. or its affiliates</p>
          <p className="mt-1">Proprietor: Metildamary | GST: 33EZJPM3196M1ZQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
