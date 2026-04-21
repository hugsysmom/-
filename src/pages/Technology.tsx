import { motion } from 'motion/react';
import { Layers, Workflow, Beaker, BarChart3, Clock, CheckCircle2 } from 'lucide-react';

export default function Technology() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gray-50 py-20 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl font-bold text-brand-navy mb-6">技術平台</h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed italic">
              "Advancing a precision-engineered, clinically scalable delivery architecture."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 30-50nm Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-8">Precision LNP Engineering</h2>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                Hermez has established a proprietary LNP design framework featuring:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Controlled nanoparticle size distribution within the 30–50 nm range",
                  "Programmable lipid composition and molar ratio optimization",
                  "Surface functionalization strategies for tissue-selective targeting",
                  "Tunable release kinetics and biodistribution control"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="text-brand-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-brand-navy/5 p-8 rounded-xl border-l-4 border-brand-navy">
                <p className="text-brand-navy font-medium italic">
                  "The 30–50 nm nanoarchitecture is specifically engineered to optimize tissue penetration, circulation dynamics, and cellular uptake while minimizing off-target distribution and systemic toxicity."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative p-10 border-2 border-dashed border-gray-200 rounded-full aspect-square flex items-center justify-center animate-spin-slow">
                 <div className="absolute inset-0 bg-brand-gold/5 rounded-full blur-3xl" />
                 <div className="w-64 h-64 bg-brand-navy rounded-full flex flex-col items-center justify-center text-white p-10 text-center relative z-10 animate-reverse-spin">
                    <span className="text-4xl font-display font-bold text-brand-gold">30-50</span>
                    <span className="text-sm uppercase tracking-widest font-light">nanometers</span>
                 </div>
                 {/* Satellites */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-lg transform -translate-y-6">
                    <Layers size={20} className="text-white" />
                 </div>
                  <div className="absolute bottom-0 left-1/4 w-10 h-10 bg-brand-gold rounded-full shadow-lg transform translate-y-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Innovation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">One-Pot Synthesis & Process Innovation</h2>
            <p className="text-gray-500 font-light">
              Scientific innovation must translate into manufacturing precision. Hermez integrates nanoparticle assembly into a controlled, single-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Workflow size={32} />, title: "Reproducible Formation", desc: "Ensure nanoparticle formation remains consistent." },
              { icon: <BarChart3 size={32} />, title: "Tight Control", desc: "Rigid control of size distribution (30–50 nm)." },
              { icon: <Beaker size={32} />, title: "Reduced Complexity", desc: "Simplified process reduces human error." },
              { icon: <Clock size={32} />, title: "One-Day Cycle", desc: "Complete production cycle achieved within 24 hours." }
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-6 text-brand-gold">{box.icon}</div>
                <h4 className="font-display font-bold text-brand-navy mb-3">{box.title}</h4>
                <p className="text-gray-500 text-sm font-light">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* Scale Section */}
          <div className="mt-24 p-12 bg-brand-navy rounded-3xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-6">Seamless Scale Translation</h3>
                <p className="text-gray-300 mb-8 font-light leading-relaxed">
                  Our architecture ensures that the transition from small-scale R&D to industrial manufacturing is fluid and risk-free.
                </p>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-gold font-bold">01</div>
                        <p className="text-white text-sm">100 mL Lab Development Batches</p>
                    </div>
                    <div className="w-1 md:w-full h-8 md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-brand-gold to-transparent ml-6 md:ml-0 my-2" />
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-gold font-bold">02</div>
                        <p className="text-white text-sm">500 L Industrial-Scale Production</p>
                    </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-md">
                    <span className="text-brand-gold font-bold text-3xl mb-2">Cost</span>
                    <span className="text-white text-xs uppercase tracking-widest font-light">Efficient</span>
                 </div>
                 <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center backdrop-blur-md mt-10">
                    <span className="text-brand-gold font-bold text-3xl mb-2">Rapid</span>
                    <span className="text-white text-xs uppercase tracking-widest font-light">Tech Transfer</span>
                 </div>
              </div>
            </div>
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[100px] -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Disease Reach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-brand-navy">Expansion into Disease Verticals</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Oncology", "CNS Disorders", "Metabolic Diseases"].map((disease, i) => (
                <div key={i} className="p-1 border border-gray-100 rounded-2xl group cursor-pointer overflow-hidden">
                    <div className="bg-gray-50 h-48 rounded-xl overflow-hidden mb-6">
                        <img 
                          src={`https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000&seed=${i}`} 
                          alt={disease}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="px-6 pb-6">
                       <h3 className="font-display font-bold text-brand-navy text-xl mb-4 group-hover:text-brand-gold transition-colors">{disease}</h3>
                       <p className="text-gray-500 text-sm font-light">Transforming delivery-constrained drug candidates into actionable therapeutic programs.</p>
                    </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
