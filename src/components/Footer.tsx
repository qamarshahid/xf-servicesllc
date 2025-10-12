import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-sakura-border bg-gradient-to-b from-white to-sakura-bg overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sakura-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sakura-brand-light rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sakura-brand to-sakura-brand-light shadow-brand"></div>
              <span className="font-bold text-xl">
                Xf Service <span className="text-sakura-brand">LLC</span>
              </span>
            </div>
            <p className="text-sakura-muted mb-6 max-w-md leading-relaxed">
              Professional IT services including website development, SEO optimization, and custom software solutions for businesses of all sizes.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-sakura-brand-light hover:bg-sakura-brand text-sakura-brand hover:text-white flex items-center justify-center transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-sakura-brand-light hover:bg-sakura-brand text-sakura-brand hover:text-white flex items-center justify-center transition-all hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-sakura-brand-light hover:bg-sakura-brand text-sakura-brand hover:text-white flex items-center justify-center transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-sakura-brand-light hover:bg-sakura-brand text-sakura-brand hover:text-white flex items-center justify-center transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sakura-muted">
              <div className="flex items-start gap-3 group">
                <MapPin size={18} className="text-sakura-brand flex-shrink-0 mt-0.5" />
                <span className="text-sm">5900 BALCONES DR NUM 25344, AUSTIN, TX 78731</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={18} className="text-sakura-brand flex-shrink-0" />
                <a href="tel:+15551234567" className="text-sm hover:text-sakura-brand transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail size={18} className="text-sakura-brand flex-shrink-0" />
                <a href="mailto:info@xfservice.com" className="text-sm hover:text-sakura-brand transition-colors">
                  info@xfservice.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>Home</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>About Us</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>Services</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>Careers</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>Blog</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>Contact</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>Privacy Policy</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sakura-muted hover:text-sakura-brand transition-colors inline-flex items-center gap-2 group">
                  <span>Terms & Conditions</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sakura-muted text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-button border border-sakura-border focus:outline-none focus:ring-2 focus:ring-sakura-brand/30 focus:border-sakura-brand transition-all"
              />
              <button className="px-6 py-3 bg-sakura-brand text-white rounded-button font-bold shadow-brand hover:scale-105 active:scale-95 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sakura-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sakura-muted text-sm">
              &copy; {new Date().getFullYear()} Xf Service LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-sakura-muted">
              <Link to="/privacy" className="hover:text-sakura-brand transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-sakura-brand transition-colors">Terms</Link>
              <Link to="/contact" className="hover:text-sakura-brand transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
