'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';

const categories = ["IPBX", "CCTV", "Access Control", "Burglar Alarm", "Fire Alarm", "Networking", "Smart Room"];

// Mock data generator
const generateProducts = (category: string) => {
  return Array.from({ length: 8 }).map((_, i) => ({
    title: `${category} Pro Series Model ${i + 100} - Advanced Security Solution`,
    price: `${(i + 1) * 1500 + 999}`,
    rating: 3.5 + Math.random() * 1.5,
    reviews: Math.floor(Math.random() * 500),
    tag: i === 0 ? "Best Seller" : i === 2 ? "Limited Time" : undefined
  }));
};

const CategoryShowcase = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="bg-white p-6 mb-4">
      <h2 className="text-2xl font-bold text-amazon-blue mb-6">Explore Our Solutions</h2>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeTab === cat
                ? 'border-amazon-orange text-amazon-orange'
                : 'border-transparent text-gray-600 hover:text-amazon-orange hover:border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {generateProducts(activeTab).map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="text-sm font-medium text-blue-600 hover:text-orange-600 hover:underline border border-gray-300 px-10 py-2 rounded-md shadow-sm">
          See more in {activeTab}
        </button>
      </div>
    </section>
  );
};

export default CategoryShowcase;
