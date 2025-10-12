import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-sakura-bg/95 backdrop-blur-sm border-b border-sakura-border transition-all duration-300 ${
      scrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="font-bold text-2xl text-sakura-ink hover:text-sakura-brand transition-colors group">
            <span className="relative">
              XF Services 
              <span className="text-sakura-brand">LLC</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sakura-brand group-hover:w-full transition-all duration-300"></div>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sakura-ink hover:text-sakura-brand transition-colors ${
                  isActive(link.path) ? 'text-sakura-brand' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-sakura-brand text-white rounded-lg font-medium hover:bg-sakura-brand/90 transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} className="text-white" />
          </Link>

          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-white/50 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 slide-in-up">
            <div className="flex flex-col gap-2 bg-white/95 rounded-2xl p-4 shadow-xl backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all ${
                    isActive(link.path)
                      ? 'bg-sakura-brand-light text-sakura-brand shadow-sm'
                      : 'text-sakura-ink hover:bg-sakura-brand-light/50 hover:text-sakura-brand'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-5 py-3 bg-sakura-brand text-white rounded-button font-bold shadow-brand text-center hover:scale-105 transition-transform"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
