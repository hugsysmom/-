import { motion } from 'motion/react';
import { Microscope, Zap, BarChart4 } from 'lucide-react';

export default function TranslationalPlatform() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-6">Translational Platform Advantage</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            De-risking clinical candidates through integrated manufacturing science.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Bridging Research and Clinic</h2>
              <p className="text-gray-500 font-light text-lg italic">
                "Our technology doesn't just work in a test tube; it's designed for the human body."
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Indication-Driven Design", desc: "Selecting the optimal delivery profile based on disease pathophysiology and clinical endpoint requirements.", icon: <Microscope /> },
                { title: "Rapid Iteration", desc: "Shortening the cycle from molecular design to in-vivo proof of concept using our high-throughput platform.", icon: <Zap /> },
                { title: "CMC Readiness", desc: "Building quality-by-design (QbD) principles into early-stage research to simplify downstream regulatory filing.", icon: <BarChart4 /> }
              ].map((s, idx) => (
                <div key={idx} className="p-10 bg-gray-50 rounded-[32px] border border-gray-100 group hover:bg-brand-navy transition-all duration-500">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-gold mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-400 transition-colors">{s.desc}</p>
                </div>
              ))}
           </div>

           <div className="mt-20 p-12 bg-gray-50 rounded-[40px] border border-gray-100 italic text-center font-light text-gray-400">
              Additional platform details and case studies are available upon request for strategic partners.
           </div>
        </div>
      </section>
    </div>
  );
}
