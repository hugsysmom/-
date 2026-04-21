import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-bold text-brand-navy mb-6">Contact Us</h1>
            <p className="text-xl text-gray-500 font-light">
              Whether you are looking for technical consultation or business partnership, our team is ready to connect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
               <h2 className="font-display text-2xl font-bold text-brand-navy mb-8">Contact Information</h2>
               <div className="space-y-8">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-brand-navy font-bold">info@hermez-bio.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-brand-navy font-bold">+886 2 XXXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Address</p>
                      <p className="text-brand-navy font-bold">Nangang Software Park, Taipei City, Taiwan</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-brand-navy rounded-3xl text-white relative overflow-hidden">
                <h3 className="font-display font-bold text-xl mb-4 relative z-10">Need Immediate Support?</h3>
                <p className="text-gray-400 text-sm font-light mb-6 relative z-10">Our specialists typically respond within 24 hours.</p>
                <button className="flex items-center space-x-2 text-brand-gold font-bold hover:translate-x-2 transition-transform relative z-10">
                   <span>Official LINE Consultation</span>
                   <Send size={18} />
                </button>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[60px]" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
             <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl shadow-brand-navy/5 border border-gray-100">
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy ml-1">Name</label>
                        <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="Enter Full Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-navy ml-1">Position</label>
                        <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="Your Title" />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy ml-1">Company</label>
                      <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="Your Organization" />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy ml-1">Email</label>
                      <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="example@domain.com" />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy ml-1">Message</label>
                      <textarea rows={5} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all resize-none" placeholder="Describe your inquiry or partnership idea" />
                   </div>

                   <button className="w-full py-5 bg-brand-navy text-white rounded-2xl font-bold text-lg hover:bg-brand-gold hover:text-brand-navy transition-all transform active:scale-[0.98] mt-4 shadow-lg shadow-brand-navy/10">
                      Submit Inquiry
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
         <div className="w-full h-96 bg-gray-200 rounded-[50px] flex items-center justify-center text-gray-500 overflow-hidden border border-gray-100 shadow-inner">
            <div className="text-center">
                <MapPin className="mx-auto mb-4 text-brand-gold animate-bounce" size={48} />
                <p className="font-display font-bold">Interactive Map Interactive Placeholder</p>
                <p className="text-xs uppercase tracking-widest mt-2 opacity-50">Nan-Gang Software Park, Taipei</p>
            </div>
         </div>
      </section>
    </div>
  );
}
