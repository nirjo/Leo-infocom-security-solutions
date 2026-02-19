'use client';
import { Star, Check } from 'lucide-react';
import Image from 'next/image';

interface ProductProps {
  title: string;
  price: string;
  rating: number;
  reviews: number;
  image?: string;
  tag?: string;
}

const ProductCard = ({ title, price, rating, reviews, tag }: ProductProps) => {
  return (
    <div className="bg-white p-4 flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative h-48 bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
        {/* Placeholder image logic */}
        <div className="text-gray-400 font-bold text-4xl select-none opacity-20">IMAGE</div>
        {tag && (
          <span className="absolute top-2 left-2 bg-[#CC0C39] text-white text-xs font-bold px-2 py-1 rounded-sm">
            {tag}
          </span>
        )}
      </div>

      <div className="flex-grow">
        <h3 className="font-medium text-amazon-blue line-clamp-2 hover:text-orange-600 mb-1">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amazon-orange fill-amazon-orange' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-xs text-blue-600 hover:underline hover:text-orange-600 ml-1">{reviews}</span>
        </div>

        <div className="mb-2">
           <span className="text-xs align-top">₹</span>
           <span className="text-2xl font-medium">{price}</span>
           <span className="text-xs align-top">00</span>
        </div>
        
        <div className="flex items-center gap-1 mb-3 text-xs text-gray-500">
           <div className="bg-blue-100 text-blue-600 p-0.5 rounded-sm px-1 font-bold italic">prime</div>
           <span>Get it by <span className="font-bold text-gray-700">Tomorrow</span></span>
        </div>
      </div>

      <button className="w-full bg-amazon-yellow hover:bg-[#f7ca00] text-sm py-2 rounded-full shadow-sm border border-yellow-400 active:border-yellow-500">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
