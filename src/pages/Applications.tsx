import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, Zap, Microscope, LayoutGrid, BarChart4 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const pipelineData = [
  { program: 'HZ-101', indication: 'Solid Tumors', asset: 'LNP-siRNA', stage: 'Preclinical', status: 'In Vivo Validation' },
  { program: 'HZ-102', indication: 'Glioblastoma (CNS)', asset: 'LNP-mRNA', stage: 'Preclinical', status: 'Lead Optimization' },
  { program: 'HZ-201', indication: 'Rare Metabolic Disorder', asset: 'LNP-pDNA', stage: 'Discovery', status: 'Target Selection' },
  { program: 'HZ-301', indication: 'Liver Fibrosis', asset: 'LNP-ASO', stage: 'Discovery', status: 'POC Studies' },
];

const stages = ['Discovery', 'Preclinical', 'IND-Enabling', 'Phase 1', 'Phase 2', 'Phase 3'];

const tabs = [
  { id: 'platform', label: 'LNP Platform', icon: <LayoutGrid size={18} /> },
  { id: 'service', label: 'Service Model', icon: <Microscope size={18} /> },
  { id: 'pipeline', label: 'Product Pipeline', icon: <BarChart4 size={18} /> },
];

export default function Applications() {
  const [activeTab, setActiveTab] = useState('platform');

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
             src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover" 
             alt="Biotech Background"
             referrerPolicy="no-referrer"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl font-bold text-white mb-6">應用面介紹</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              From modular nano-architectures to comprehensive clinical translation strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center space-x-2 px-8 py-5 text-sm font-bold transition-all border-b-2 whitespace-nowrap",
                  activeTab === tab.id 
                    ? "border-brand-gold text-brand-navy bg-brand-gold/5" 
                    : "border-transparent text-gray-400 hover:text-brand-navy hover:bg-gray-50"
                )}
              >
                <span className={cn(activeTab === tab.id ? "text-brand-gold" : "text-gray-400")}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <AnimatePresence mode="wait">
          {activeTab === 'platform' && (
            <motion.div
              key="platform"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <div>
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Modular Architecture</span>
                <h2 className="font-display text-4xl font-bold text-brand-navy mt-4 mb-8">Universal LNP Delivery Platform</h2>
                <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                  <p>
                    Hermez provides a modular LNP platform capable of supporting small molecule therapeutics, nucleic acid-based modalities, and emerging next-generation drug constructs.
                  </p>
                  <p>
                    By integrating nanoengineering, pharmacological modeling, and scalable CMC strategy, we de-risk delivery-dependent programs while accelerating clinical advancement.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-12">
                   {['siRNA', 'mRNA', 'pDNA', 'ASO'].map(type => (
                     <div key={type} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <ChevronRight className="text-brand-gold" size={16} />
                        <span className="font-bold text-brand-navy">{type} Delivery</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000" 
                  className="rounded-3xl shadow-2xl" 
                  alt="LNP Research"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-gold p-8 rounded-2xl shadow-xl hidden md:block">
                   <Zap className="text-brand-navy mb-2" size={32} />
                   <p className="text-brand-navy font-bold">Modular & Scalable</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'service' && (
            <motion.div
              key="service"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Partnership & Service Model</h2>
                <p className="text-gray-500 font-light">We offer comprehensive co-development models for researchers and pharmaceutical partners.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { title: "Custom Formulation", desc: "Tailoring lipid compositions to match specific cargo requirements and target tissues.", icon: <Microscope /> },
                  { title: "Tech Transfer", desc: "Seamless scaling from 100mL lab batches to 500L industrial production.", icon: <Zap /> },
                  { title: "Regulatory Support", desc: "Providing data packages for IND enabling and chemistry, manufacturing, and control (CMC) compliance.", icon: <LayoutGrid /> }
                ].map((s, idx) => (
                  <div key={idx} className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-gold mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-navy mb-4">{s.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'pipeline' && (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
                <h2 className="font-display text-3xl font-bold text-brand-navy">R&D Pipeline</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search indication..." 
                    className="pl-10 pr-4 py-3 border border-gray-200 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold w-64 shadow-sm"
                  />
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-brand-navy text-white text-xs uppercase tracking-[0.15em] font-display">
                        <th className="py-6 px-10">Program</th>
                        <th className="py-6 px-10">Indication</th>
                        <th className="py-6 px-10">Asset</th>
                        <th className="py-6 px-10 w-[400px]">Development Stage</th>
                        <th className="py-6 px-10 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {pipelineData.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-8 px-10"><span className="font-display font-bold text-brand-navy">{item.program}</span></td>
                          <td className="py-8 px-10"><span className="text-gray-700 font-medium">{item.indication}</span></td>
                          <td className="py-8 px-10 text-sm text-gray-400 italic">{item.asset}</td>
                          <td className="py-8 px-10">
                            <div className="flex items-center space-x-1 h-2 w-full">
                              {stages.map((stage) => {
                                const isCurrent = item.stage === stage;
                                const isPast = stages.indexOf(item.stage) > stages.indexOf(stage);
                                return (
                                  <div 
                                    key={stage}
                                    title={stage}
                                    className={cn(
                                      "h-full flex-grow rounded-full transition-all",
                                      isCurrent ? "bg-brand-gold ring-4 ring-brand-gold/20" : isPast ? "bg-brand-navy" : "bg-gray-200"
                                    )}
                                  />
                                );
                              })}
                            </div>
                            <div className="mt-3 flex justify-between">
                              <span className="text-[10px] text-brand-navy font-bold uppercase">{item.stage}</span>
                            </div>
                          </td>
                          <td className="py-8 px-10 text-right">
                             <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] uppercase font-bold rounded-full">{item.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Partners section at bottom */}
      <section className="py-20 mt-20 bg-gray-50 skew-y-1">
         <div className="-skew-y-1">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
              <div className="max-w-md">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Innovation Through Collaboration</h3>
                <p className="text-gray-500 font-light">Join our growing ecosystem of biopharma pioneers.</p>
              </div>
              <div className="flex-grow flex justify-end gap-4">
                 <button className="px-10 py-4 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl shadow-brand-navy/10">Partner with Us</button>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}

