'use client';
import ProductCard from './ProductCard';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const deals = [
  { title: "Wireless CCTV Camera", price: "2,499", rating: 4.5, reviews: 120, tag: "Deal of the Day" },
  { title: "Smart Video Doorbell", price: "4,999", rating: 4.8, reviews: 85, tag: "20% Off" },
  { title: "Biometric Fingerprint Lock", price: "8,999", rating: 4.2, reviews: 45, tag: "Lightning Deal" },
  { title: "Smoke Detector Pack", price: "1,299", rating: 4.6, reviews: 210 },
  { title: "Motion Sensor Light", price: "899", rating: 4.0, reviews: 75 },
  { title: "Wi-Fi Range Extender", price: "1,599", rating: 4.3, reviews: 300, tag: "Best Seller" },
];

const DealsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white p-4 mb-4">
      <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-2">
        <h2 className="text-xl font-bold text-amazon-blue">Today's Deals</h2>
        <a href="#" className="text-sm text-blue-600 hover:text-orange-600 hover:underline">See all deals</a>
      </div>

      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 shadow-md hover:bg-white border rounded-r-md hidden group-hover:block"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {deals.map((deal, idx) => (
            <div key={idx} className="min-w-[220px] snap-start">
              <ProductCard {...deal} />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 shadow-md hover:bg-white border rounded-l-md hidden group-hover:block"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default DealsSection;
