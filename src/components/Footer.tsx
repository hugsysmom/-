import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                 <span className="text-brand-navy font-display font-bold text-xl">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight leading-none text-white">HERMEZ</span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-gray-400 uppercase">Nanomedicine</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
              Hermez Nanomedicine is a next-generation lipid nanoparticle (LNP) platform company dedicated to advancing precision drug delivery through rational nanoengineering.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/technology" className="hover:text-white transition-colors">Technologies</Link></li>
              <li><Link to="/applications" className="hover:text-white transition-colors">Applications</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Company</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-gold font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span>Nangang Software Park, Taipei City, Taiwan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+886 2 XXXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>info@hermez-bio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Hermez Nanomedicine. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
