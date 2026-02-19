import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f23] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
