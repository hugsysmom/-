import { motion } from 'motion/react';
import { LayoutGrid, ChevronRight } from 'lucide-react';

export default function LnpEngineering() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-6">Precision LNP Engineering</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Innovating at the molecular level for targeted delivery and enhanced stability.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                      <LayoutGrid size={24} />
                   </div>
                   <span className="text-brand-navy font-bold uppercase tracking-widest text-xs">Engineering Excellence</span>
                </div>
                <h2 className="font-display text-4xl font-bold text-brand-navy mb-8">Next-Generation Architecture</h2>
                <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                  <p>
                    Our platform leverages proprietary lipid chemistry and molecular modeling to design nanoparticles with surgical precision. By controlling the internal architecture and surface landscape, we optimize the encapsulation of sensitive genetic payloads.
                  </p>
                  <ul className="space-y-4">
                     {[
                       'Sub-50nm size control for superior tissue penetration',
                       'Custom lipid screening for target-specific delivery',
                        'Optimized ionizable lipid pKa for endosomal escape efficiency',
                        'Tunable surface charge for prolonged circulation half-life'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start space-x-3">
                          <ChevronRight className="text-brand-gold mt-1 shrink-0" size={18} />
                          <span className="text-gray-700">{item}</span>
                       </li>
                     ))}
                  </ul>
                </div>
              </motion.div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1579165466541-74e2bdd6fe0c?auto=format&fit=crop&q=80&w=2000" 
                  className="rounded-[40px] shadow-2xl" 
                  alt="Precision Engineering"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
