import { motion } from 'motion/react';
import { Users, Handshake, Briefcase, FileText, Globe2, Award } from 'lucide-react';

const sections = [
  { id: 'about', title: 'About Us', icon: <Globe2 />, content: 'Hermez Nanomedicine is a mission-driven LNP platform company. We believe that the limitation of therapy is often not the molecule itself, but the delivery. Our journey started with a simple goal: to make complex drug delivery robust and scalable.' },
  { id: 'team', title: 'Our Team', icon: <Users />, content: 'Driven by passion and scientific rigor, our team brings together experts in nanoparticle physics, lipid chemistry, and clinical pharmacology.' },
  { id: 'partners', title: 'Our Partners', icon: <Handshake />, content: 'We collaborate with leading research institutes and biopharmaceutical companies globally to push the boundaries of what is possible in drug delivery.' },
  { id: 'careers', title: 'Careers', icon: <Briefcase />, content: 'Join us in redefining nanomedicine. We are always looking for curious minds in chemical engineering, cell biology, and manufacturing science.' },
  { id: 'patents', title: 'Patents', icon: <FileText />, content: 'Our intellectual property portfolio covers novel lipid compositions, one-pot synthesis methodologies, and disease-specific targeting ligands.' },
];

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,191,33,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl font-bold mb-8">關於我們</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Advancing precision drug delivery through rational nanoengineering and scalable process innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Layout for the 5 sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Nav */}
            <div className="lg:col-span-1 space-y-2">
               {sections.map((s) => (
                 <a 
                   key={s.id} 
                   href={`#${s.id}`}
                   className="flex items-center space-x-3 px-6 py-4 rounded-xl hover:bg-gray-50 transition-colors text-brand-navy font-bold group"
                 >
                    <span className="text-brand-gold group-hover:scale-110 transition-transform">{s.icon}</span>
                    <span>{s.title}</span>
                 </a>
               ))}
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-32">
               {sections.map((s, i) => (
                 <motion.div 
                   key={s.id} 
                   id={s.id}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: '-100px' }}
                   className="scroll-mt-32"
                 >
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center">
                            {s.icon}
                        </div>
                        <h2 className="font-display text-3xl font-bold text-brand-navy">{s.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                {s.content}
                            </p>
                            {s.id === 'patents' && (
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4">
                                    <Award className="text-brand-gold" size={32} />
                                    <div>
                                        <p className="text-sm font-bold text-brand-navy">Portfolio Growth</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-tighter">15+ Filed Patents Internationally</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="bg-gray-100 rounded-3xl h-64 overflow-hidden relative">
                             <img 
                                src={`https://images.unsplash.com/photo-1574689232449-396a461c696e?auto=format&fit=crop&q=80&w=1000&seed=${i}`} 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                                alt={s.title}
                                referrerPolicy="no-referrer"
                             />
                             <div className="absolute inset-0 bg-brand-navy/20" />
                        </div>
                    </div>
                    {i < sections.length - 1 && <div className="mt-32 border-b border-gray-100" />}
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
