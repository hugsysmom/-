import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const pipelineCategories = [
  { id: 'oncology', label: 'Oncology' },
  { id: 'cns', label: 'CNS Disorders' },
  { id: 'metabolic', label: 'Metabolic & Rare' },
];

const pipelineData = {
  oncology: [
    { program: 'HZ-101', indication: 'Solid Tumors (Pan-Cancer)', asset: 'LNP-siRNA', stage: 'Preclinical', status: 'In Vivo Validation' },
    { program: 'HZ-105', indication: 'HCC (Liver Cancer)', asset: 'LNP-mRNA', stage: 'Discovery', status: 'Lead Optimization' },
  ],
  cns: [
    { program: 'HZ-102', indication: 'Glioblastoma / Brain Metastasis', asset: 'LNP-mRNA', stage: 'Preclinical', status: 'Lead Optimization' },
    { program: 'HZ-106', indication: 'Alzheimer\'s Disease', asset: 'LNP-pDNA', stage: 'Discovery', status: 'Target Selection' },
  ],
  metabolic: [
    { program: 'HZ-201', indication: 'Hypercholesterolemia', asset: 'LNP-siRNA', stage: 'Discovery', status: 'Target Selection' },
    { program: 'HZ-205', indication: 'Fabry Disease', asset: 'LNP-mRNA', stage: 'Discovery', status: 'POC Studies' },
  ],
};

const stages = ['Discovery', 'Preclinical', 'IND-Enabling', 'Phase 1', 'Phase 2', 'Phase 3'];

export default function ProductPipeline() {
  const [activeTab, setActiveTab] = useState('oncology');

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-6">Product Pipeline</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            A robust portfolio of clinical-ready candidates powered by our modular LNP engine.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Internal Tabs */}
          <div className="flex justify-center mb-16 border-b border-gray-100">
            {pipelineCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-10 py-5 text-sm font-bold transition-all border-b-2",
                  activeTab === cat.id 
                    ? "border-brand-gold text-brand-navy" 
                    : "border-transparent text-gray-400 hover:text-brand-navy"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[40px] shadow-2xl shadow-brand-navy/5 overflow-hidden border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-brand-navy text-white text-[10px] uppercase tracking-[0.2em] font-display">
                        <th className="py-8 px-10">Program</th>
                        <th className="py-8 px-10">Indication</th>
                        <th className="py-8 px-10">Asset Type</th>
                        <th className="py-8 px-10 w-[450px]">R&D PROGRESS</th>
                        <th className="py-8 px-10 text-right">Current Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {pipelineData[activeTab as keyof typeof pipelineData].map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-10 px-10"><span className="font-display font-bold text-brand-navy text-xl">{item.program}</span></td>
                          <td className="py-10 px-10">
                             <div>
                               <span className="text-gray-800 font-bold block mb-1">{item.indication}</span>
                               <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{item.asset}</span>
                             </div>
                          </td>
                          <td className="py-10 px-10">
                             <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-full">{item.asset.split('-')[1]}</span>
                          </td>
                          <td className="py-10 px-10">
                            <div className="relative w-full h-[6px] bg-gray-100 rounded-full flex items-center">
                               {stages.map((stage) => {
                                  const isCurrent = item.stage === stage;
                                  const isPast = stages.indexOf(item.stage) > stages.indexOf(stage);
                                  return (
                                    <div 
                                      key={stage}
                                      className={cn(
                                        "flex-grow h-full first:rounded-l-full last:rounded-r-full transition-all relative",
                                        isCurrent ? "bg-brand-gold w-[120%]" : isPast ? "bg-brand-navy" : "bg-transparent"
                                      )}
                                    >
                                       {isCurrent && (
                                         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-brand-gold rounded-full shadow-lg" />
                                       )}
                                       <div className="absolute -bottom-6 left-0 text-[8px] font-bold text-gray-300 pointer-events-none uppercase">{stage}</div>
                                    </div>
                                  );
                               })}
                            </div>
                          </td>
                          <td className="py-10 px-10 text-right">
                             <span className="px-5 py-2 bg-brand-gold/10 text-brand-gold text-[10px] uppercase font-bold rounded-full border border-brand-gold/20 leading-none">
                                {item.status}
                             </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
