'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, MapPin, ChevronDown } from 'lucide-react';

const categories = [
  "All", "IPBX", "CCTV", "Access Control", "Burglar Alarm", "Fire Alarm", "Networking", "Smart Room"
];

const Navbar = () => {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-50">
      {/* Top Main Bar */}
      <div className="bg-amazon-blue text-white h-16 flex items-center px-4 gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center pt-2 px-2 border border-transparent hover:border-white rounded-sm pb-1">
          <div className="relative w-24 h-8">
            {/* Using text fallback if image fails, or styled text to look like logo */}
            <div className="font-bold text-2xl tracking-tight flex items-center">
              <span className="text-white">Leo</span>
              <span className="text-amazon-orange text-3xl leading-4">.</span>
              <span className="text-gray-300 text-sm italic mt-2 ml-1">Infocom</span>
            </div>
          </div>
        </Link>

        {/* Deliver To */}
        <div className="hidden md:flex flex-col justify-center px-2 border border-transparent hover:border-white rounded-sm cursor-pointer leading-tight">
          <span className="text-gray-300 text-xs ml-4">Deliver to</span>
          <div className="flex items-center font-bold text-sm">
            <MapPin className="w-4 h-4 mr-1 text-white" />
            Puducherry
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow hidden sm:flex h-10 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-amazon-orange">
          <button className="bg-gray-100 text-gray-600 px-3 text-xs border-r border-gray-300 hover:bg-gray-200 transition-colors flex items-center gap-1">
            All <ChevronDown className="w-3 h-3" />
          </button>
          <input 
            type="text" 
            className="flex-grow px-4 text-black outline-none" 
            placeholder="Search Leo Infocom..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-amazon-orange hover:bg-[#fa8900] px-4 flex items-center justify-center transition-colors">
            <Search className="w-6 h-6 text-amazon-blue" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Sign In */}
          <div className="hidden md:flex flex-col justify-center px-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
            <span className="text-xs text-gray-300">Hello, Sign in</span>
            <span className="text-sm font-bold">Account & Lists</span>
          </div>

          {/* Returns */}
          <div className="hidden md:flex flex-col justify-center px-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
            <span className="text-xs text-gray-300">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </div>

          {/* Cart */}
          <Link href="#cart" className="flex items-end px-2 border border-transparent hover:border-white rounded-sm relative">
            <div className="relative">
              <ShoppingCart className="w-8 h-8 mb-1" />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-amazon-orange font-bold text-base">0</span>
            </div>
            <span className="font-bold text-sm mb-2 hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Sub Navbar */}
      <div className="bg-amazon-light text-white h-10 flex items-center px-4 text-sm gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <button className="flex items-center gap-1 font-bold px-2 border border-transparent hover:border-white rounded-sm">
          <Menu className="w-6 h-6" /> All
        </button>
        {categories.slice(1).map((cat) => (
          <Link key={cat} href={`#${cat.toLowerCase().replace(' ', '-')}`} className="px-2 py-1 border border-transparent hover:border-white rounded-sm">
            {cat}
          </Link>
        ))}
        <Link href="#deals" className="px-2 py-1 border border-transparent hover:border-white rounded-sm font-bold text-amazon-orange">
          Today's Deals
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
