import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 bg-brand-navy overflow-hidden">
        {/* Background Animation/Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1532187875605-2fe358a71408?auto=format&fit=crop&q=80&w=2070"
            alt="Biotech Hero"
            className="w-full h-full object-cover opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full animate-bounce delay-700" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Next-Generation <br />
                <span className="text-brand-gold">Lipid Nanoparticle</span> <br />
                Platforms
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                Advancing precision drug delivery through rational nanoengineering and scalable process innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/technology"
                  className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 flex items-center"
                >
                  Technologies <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/company"
                  className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-2 font-display">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
        </div>
      </section>

      {/* Vision & Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest rounded-full mb-6 italic">
                Our Vision
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                Expanding the Boundaires of <span className="text-brand-gold underline decoration-4">Therapeutic Reach</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                Hermez Nanomedicine is advancing a precision-engineered, clinically scalable delivery architecture designed to redefine how medicines are translated from molecular discovery to global deployment.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="space-y-2">
                    <h4 className="font-display font-bold text-brand-navy text-3xl">30-50nm</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Nano-Architecture</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-display font-bold text-brand-navy text-3xl">One-Pot</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Synthesis Process</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-2xl relative z-10">
                 <img
                    src="https://images.unsplash.com/photo-1579165466541-74e2bdd6fe0c?auto=format&fit=crop&q=80&w=2000"
                    alt="Nano Synthesis"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                 />
              </div>
              {/* Decorative block */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Core Competencies</h2>
            <p className="text-gray-500 font-light">
              Our technology platform integrates precision particle engineering, controlled synthesis, and industrial-grade manufacturing architecture to overcome biological barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target className="text-brand-gold" size={40} />,
                title: "Precision LNP Engineering",
                desc: "Proprietary LNP design framework featuring controlled nanoparticle size distribution within the 30–50 nm range."
              },
              {
                icon: <Zap className="text-brand-red" size={40} />,
                title: "One-Pot Synthesis Innovation",
                desc: "Controlled, single-step assembly of nanoparticles ensuring high reproducibility and batch-to-batch consistency."
              },
              {
                icon: <ShieldCheck className="text-brand-navy" size={40} />,
                title: "Translational Advantage",
                desc: "Supports small molecule therapeutics, nucleic acid-based modalities, and emerging next-gen drug constructs."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-xl group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Revolutionize Drug Delivery?</h2>
                <p className="text-brand-gold font-light opacity-90">Connect with our engineering team to explore the possibilities of LNP technology.</p>
              </div>
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-brand-navy font-bold rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
