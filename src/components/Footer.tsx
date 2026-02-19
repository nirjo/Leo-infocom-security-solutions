import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                  <Image 
                    src="/logo.png" 
                    alt="Leo Infocom Logo" 
                    fill
                    className="object-contain"
                  />
              </div>
              <span className="text-white font-bold text-lg tracking-wide">
                Leo Infocom
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-sm">
              Empowering your security with state-of-the-art surveillance, communication, and automation solutions. 
              Trust us for a safer tomorrow.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="hover:text-[#0ea5e9] transition-colors">Home</Link></li>
              <li><Link href="#products" className="hover:text-[#0ea5e9] transition-colors">Products</Link></li>
              <li><Link href="#about" className="hover:text-[#0ea5e9] transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-[#0ea5e9] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>+91 9600162818</li>
              <li>info@leoinfocom.com</li>
              <li>Puducherry, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 Leo Infocom & Security Solutions. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <span>Proprietor: Metildamary</span>
            <span>GST: 33EZJPM3196M1ZQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
