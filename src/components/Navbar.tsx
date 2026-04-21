import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: '技術平台', path: '/technology' },
  { name: '應用面介紹', path: '/applications' },
  { name: '最新消息', path: '/news' },
  { 
    name: '關於我們', 
    path: '/about',
    dropdown: [
      { name: 'About Us', path: '/about#about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Our Partners', path: '/about#partners' },
      { name: 'Careers', path: '/about#careers' },
      { name: 'Patents', path: '/about#patents' },
    ]
  },
  { name: '聯絡我們', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-navy rounded-md flex items-center justify-center transition-transform group-hover:scale-110">
               <span className="text-brand-gold font-display font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight leading-none text-brand-navy">HERMEZ</span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-gray-500 uppercase">Nanomedicine</span>
            </div>
          </Link>

          {/* Desktop Menu - Right Aligned */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.path} className="relative group/item">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    <button
                      className={cn(
                        'flex items-center space-x-1 text-sm font-semibold tracking-wide transition-colors py-2 focus:outline-none',
                        location.pathname.startsWith(item.path) || activeDropdown === item.name
                          ? 'text-brand-gold' 
                          : 'text-brand-navy/80 hover:text-brand-gold'
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === item.name && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-6 py-3 text-sm text-brand-navy/80 hover:bg-gray-50 hover:text-brand-gold font-medium transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      'text-sm font-semibold tracking-wide transition-colors hover:text-brand-gold py-2 block',
                      location.pathname === item.path ? 'text-brand-gold' : 'text-brand-navy/80 hover:text-brand-gold'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-4 py-3 text-base font-bold text-gray-400 uppercase tracking-widest text-xs">
                        {item.name}
                      </div>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'block px-8 py-3 text-base font-medium rounded-lg',
                            location.pathname + location.hash === subItem.path
                              ? 'bg-brand-navy text-brand-gold'
                              : 'text-brand-navy hover:bg-gray-50'
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block px-4 py-3 text-base font-medium rounded-lg',
                        location.pathname === item.path
                          ? 'bg-brand-navy text-brand-gold'
                          : 'text-brand-navy hover:bg-gray-50'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

