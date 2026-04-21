import { motion } from 'motion/react';
import { ChevronRight, Zap, Microscope, LayoutGrid, BarChart4 } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    id: 'pipeline', 
    title: 'Product Pipeline', 
    desc: 'Explore our multi-vertical therapeutic research portfolio.',
    icon: <BarChart4 size={32} />,
    path: '/applications/pipeline'
  },
  { 
    id: 'precision', 
    title: 'Precision LNP Engineering', 
    desc: 'Molecularly-engineered nanoparticles for targeted delivery.',
    icon: <LayoutGrid size={32} />,
    path: '/applications/lnp-engineering'
  },
  { 
    id: 'onepot', 
    title: 'One-Pot Synthesis & Process Innovation', 
    desc: 'Scalable manufacturing architecture for clinical and commercial supply.',
    icon: <Zap size={32} />,
    path: '/applications/process-innovation'
  },
  { 
    id: 'translation', 
    title: 'Translational Platform Advantage', 
    desc: 'De-risking drug development through integrated science.',
    icon: <Microscope size={32} />,
    path: '/applications/translational-platform'
  },
];

export default function Applications() {
  return (
    <div className="pt-24 min-h-screen bg-white">
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
            <h1 className="font-display text-5xl font-bold text-white mb-6">Applications Overview</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Advancing therapeutic candidates through modular nanoengineering and scalable synthesis.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {categories.map((cat, idx) => (
             <Link 
               to={cat.path} 
               key={idx}
               className="p-12 bg-gray-50 rounded-[40px] border border-gray-100 group hover:bg-brand-navy hover:shadow-2xl transition-all duration-500"
             >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-gold mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h2 className="font-display text-3xl font-bold text-brand-navy mb-4 group-hover:text-white transition-colors">{cat.title}</h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed mb-8 group-hover:text-gray-400 transition-colors">{cat.desc}</p>
                <div className="flex items-center text-brand-gold font-bold">
                   <span>Explore {cat.title}</span>
                   <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
}
