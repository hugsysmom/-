import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';

const newsItems = [
  { date: '2024.11.15', category: 'Articles', title: 'Hermez Nanomedicine featured in Biotechnology Today', image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1000' },
  { date: '2024.10.02', category: 'News', title: 'Breakthrough: One-Pot Synthesis system achieves 500L standard', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1000' },
  { date: '2024.08.20', category: 'Awards', title: 'Hermez wins Innovation Excellence Award 2024', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000' },
];

export default function News() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-brand-navy mb-4">News & Media</h1>
          <p className="text-xl text-gray-400 font-light tracking-wide italic">Latest Research, Insights, and Awards</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsItems.map((item, i) => (
             <motion.article 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="group cursor-pointer"
             >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative">
                   <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute top-4 left-4 px-3 py-1 bg-brand-navy/90 text-white text-[10px] uppercase font-bold tracking-widest rounded-full backdrop-blur-sm">
                      {item.category}
                   </div>
                </div>
                <div className="flex items-center space-x-2 text-brand-gold mb-3">
                   <Calendar size={14} />
                   <span className="text-xs font-mono font-medium">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors leading-tight mb-4">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-brand-navy transition-colors">
                   <span>Read More</span>
                   <ChevronRight size={16} className="ml-1 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
             </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50 mt-20 border-y border-gray-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">Stay Updated on Our Research</h2>
            <p className="text-gray-500 font-light mb-10 max-w-xl mx-auto">
              Get the latest updates on nanomedicine advancements and Hermez milestones directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-8 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold font-light"
                />
                <button className="px-10 py-4 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all whitespace-nowrap">
                   Subscribe
                </button>
            </form>
        </div>
      </section>
    </div>
  );
}
