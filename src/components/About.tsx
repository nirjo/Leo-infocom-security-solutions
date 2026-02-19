import { Shield, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-500" />
              About Leo Infocom
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Leading the security revolution in Puducherry, Leo Infocom & Security Solutions 
              delivers enterprise-grade protection for homes and businesses. We combine cutting-edge 
              technology with expert installation to ensure your safety is never compromised.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400 mt-8">
              <div className="flex items-center gap-3 bg-black/30 p-3 rounded-lg border border-white/5">
                <Award className="w-5 h-5 text-yellow-400" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">Proprietor</span>
                  <span className="text-white font-medium">Metildamary</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/30 p-3 rounded-lg border border-white/5">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500">GST Registration</span>
                  <span className="text-white font-medium font-mono">33EZJPM3196M1ZQ</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-black/50 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden">
               {/* Abstract decorative element for 'Innovation' */}
               <div className="w-full h-full absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
               <div className="relative z-10 text-center">
                  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">Since 2016</h3>
                  <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">Innovating Security</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
