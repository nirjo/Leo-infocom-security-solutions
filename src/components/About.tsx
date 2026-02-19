const About = () => {
  return (
    <section id="about" className="py-20 bg-[#101018]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1e1e2e] to-[#0a0a0a] rounded-2xl p-8 md:p-12 border border-gray-800 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-6">About Leo Infocom</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leo Infocom & Security Solutions is a trusted partner for enterprise-grade security in India. 
              We specialize in providing top-tier surveillance, communication, and automation systems tailored 
              to your specific needs. With a commitment to quality and innovation, we ensure your peace of mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[#0ea5e9]">Proprietor:</span> Metildamary
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0ea5e9]">GST:</span> 33EZJPM3196M1ZQ
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            {/* Placeholder for About Image or Graphic */}
            <div className="w-48 h-48 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center border-2 border-[#0ea5e9]/30">
               <span className="text-5xl">🛡️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
