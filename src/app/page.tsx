'use client';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import DealsSection from '@/components/DealsSection';
import CategoryShowcase from '@/components/CategoryShowcase';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navbar />
      
      <div className="flex-grow bg-gray-100">
        <div className="relative">
            <HeroSlider />
             <div className="bg-gradient-to-b from-transparent to-gray-100 h-24 absolute bottom-0 w-full z-10 pointer-events-none"></div>
        </div>

        
        <div className="max-w-[1500px] mx-auto px-4 relative z-20 -mt-20 md:-mt-32 space-y-6 pb-8">
          {/* Top Quick Grid (Simulated) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white p-6 h-[420px] flex flex-col shadow-sm z-30">
                <h2 className="text-xl font-bold mb-4">CCTV Surveillance</h2>
                <div className="flex-grow bg-gray-100 mb-4 flex items-center justify-center text-gray-400 font-bold text-2xl">IMAGE</div>
                <Link href="#" className="text-sm text-blue-600 font-medium hover:underline hover:text-orange-700">See more</Link>
             </div>
             <div className="bg-white p-6 h-[420px] flex flex-col shadow-sm z-30">
                <h2 className="text-xl font-bold mb-4">Smart Home</h2>
                <div className="grid grid-cols-2 gap-4 flex-grow mb-4">
                   <div className="bg-gray-100"></div><div className="bg-gray-100"></div>
                   <div className="bg-gray-100"></div><div className="bg-gray-100"></div>
                </div>
                <Link href="#" className="text-sm text-blue-600 font-medium hover:underline hover:text-orange-700">Explore smart devices</Link>
             </div>
             <div className="bg-white p-6 h-[420px] flex flex-col shadow-sm z-30">
                <h2 className="text-xl font-bold mb-4">Fire Alarms</h2>
                <div className="flex-grow bg-gray-100 mb-4 flex items-center justify-center text-gray-400 font-bold text-2xl">IMAGE</div>
                <Link href="#" className="text-sm text-blue-600 font-medium hover:underline hover:text-orange-700">Shop safety</Link>
             </div>
             {/* Sign in card */}
             <div className="bg-white p-6 h-[150px] flex flex-col justify-between shadow-sm lg:hidden z-30">
                <h2 className="text-xl font-bold">Sign in for best experience</h2>
                <button className="bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md shadow-sm text-sm border border-yellow-500 font-medium">Sign in securely</button>
             </div>
              <div className="bg-white p-6 h-[420px] hidden lg:flex flex-col shadow-sm z-30">
                <h2 className="text-xl font-bold mb-4">Deals of the Day</h2>
                <div className="flex-grow bg-gray-100 mb-4 flex items-center justify-center text-gray-400 text-center p-4 font-bold text-lg">
                  <p>Up to 50% off on Intercoms</p>
                </div>
                <Link href="#" className="text-sm text-blue-600 font-medium hover:underline hover:text-orange-700">See all deals</Link>
             </div>
          </div>

          <DealsSection />
          <CategoryShowcase />
          
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
