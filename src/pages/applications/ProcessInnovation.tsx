import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function ProcessInnovation() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-6">One-Pot Synthesis & Process Innovation</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Scaling standard R&D to industrial production with absolute consistency.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/10 rounded-full blur-3xl -z-10" />
                 <img 
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000" 
                  className="rounded-[40px] shadow-2xl relative z-10" 
                  alt="Process Innovation"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-navy">
                      <Zap size={24} />
                   </div>
                   <span className="text-brand-navy font-bold uppercase tracking-widest text-xs">Scalable Innovation</span>
                </div>
                <h2 className="font-display text-4xl font-bold text-brand-navy mb-8">One-Pot Methodology</h2>
                <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                  <p>
                    Transitioning from lab-scale R&D to commercial manufacturing often involves significant risks. Our patented "One-Pot Synthesis" methodology eliminates complex multi-step protocols, ensuring absolute batch-to-batch consistency.
                  </p>
                  <p>
                    By simplifying the controlled assembly of lipid shells and genetic cores into a single cohesive step, we reduce process variability and accelerate the timeline from concept to clinical supply.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                     <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-brand-gold font-bold text-2xl mb-1">99%</p>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Encapsulation Efficiency</p>
                     </div>
                     <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-brand-navy font-bold text-2xl mb-1">Instant</p>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Scale Translation</p>
                     </div>
                  </div>
                </div>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
