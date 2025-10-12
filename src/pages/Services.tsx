import { useState } from 'react';
import { Check, ArrowRight, X, Globe, Code, Search, Smartphone } from 'lucide-react';

export default function Services() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openQuoteModal = (service: string) => {
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Main Content */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-sakura-ink leading-[0.9] mb-8">
                Complete technology solutions
              </h1>
              <p className="text-2xl text-sakura-ink leading-relaxed mb-12">
                Professional services designed to help your business grow. From modern websites to custom software, we deliver solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openQuoteModal('General Inquiry')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
                >
                  Get a Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => openQuoteModal('Consultation')}
                  className="px-8 py-4 bg-white border-2 border-sakura-border rounded-xl font-semibold text-sakura-ink hover:border-sakura-brand hover:bg-sakura-brand hover:text-white transition-all"
                >
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Right Side - Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">500+</div>
                <div className="text-sakura-ink font-medium">Projects Completed</div>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">98%</div>
                <div className="text-sakura-ink font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">24/7</div>
                <div className="text-sakura-ink font-medium">Support Available</div>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">5+</div>
                <div className="text-sakura-ink font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Our core services
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-sakura-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <Globe size={32} className="text-sakura-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-sakura-ink">Web Design & Development</h3>
              <p className="text-sakura-ink leading-relaxed text-lg mb-8">
                Beautiful, responsive websites that convert visitors into customers. Built with modern technologies and optimized for performance.
              </p>
              <ul className="space-y-3 text-sakura-ink">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Responsive Design
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  UI/UX Optimization
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Performance Optimization
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Custom Solutions
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-sakura-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <Search size={32} className="text-sakura-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-sakura-ink">SEO & Digital Marketing</h3>
              <p className="text-sakura-ink leading-relaxed text-lg mb-8">
                Improve your search rankings and drive organic traffic with our comprehensive SEO and digital marketing strategies.
              </p>
              <ul className="space-y-3 text-sakura-ink">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Keyword Research
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Technical SEO
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Content Strategy
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Analytics & Reporting
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-sakura-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <Code size={32} className="text-sakura-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-sakura-ink">Custom Software Development</h3>
              <p className="text-sakura-ink leading-relaxed text-lg mb-8">
                Tailored software solutions built specifically for your business needs. From web applications to automation tools.
              </p>
              <ul className="space-y-3 text-sakura-ink">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Custom Web Applications
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  API Development
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Database Design
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Integration Services
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-sakura-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <Smartphone size={32} className="text-sakura-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-sakura-ink">Mobile App Development</h3>
              <p className="text-sakura-ink leading-relaxed text-lg mb-8">
                Native and cross-platform mobile applications that engage your users and drive business growth.
              </p>
              <ul className="space-y-3 text-sakura-ink">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  iOS & Android Apps
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Cross-Platform Solutions
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  App Store Optimization
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-sakura-brand" />
                  Maintenance & Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              How we work
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed max-w-2xl mx-auto">
              A proven methodology that ensures your project's success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business goals, target audience, and project requirements.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Based on our findings, we develop a comprehensive strategy and project roadmap.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our team builds your solution using the latest technologies and best practices.',
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We deploy your project and provide ongoing support to ensure continued success.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sakura-brand">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-sakura-ink">{item.title}</h3>
                <p className="text-sakura-ink leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-16 border border-sakura-border shadow-lg">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Ready to start your project?
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed mb-12 max-w-2xl mx-auto">
              Let's discuss your needs and create a solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => openQuoteModal('General Inquiry')}
                className="inline-flex items-center gap-3 px-10 py-5 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
              >
                Get Started Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => openQuoteModal('Consultation')}
                className="px-10 py-5 bg-white border-2 border-sakura-border rounded-xl font-semibold text-sakura-ink hover:border-sakura-brand hover:bg-sakura-brand hover:text-white transition-all"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-sakura-ink">Get a Quote</h3>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="p-2 hover:bg-sakura-bg rounded-lg transition-colors"
              >
                <X size={20} className="text-sakura-ink" />
              </button>
            </div>
            <p className="text-sakura-ink mb-6">
              Interested in our {selectedService}? Let's discuss your project and provide you with a detailed quote.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="flex-1 px-6 py-3 bg-white border-2 border-sakura-border rounded-lg font-medium text-sakura-ink hover:border-sakura-brand transition-all"
              >
                Cancel
              </button>
              <a
                href="/contact"
                className="flex-1 px-6 py-3 bg-sakura-brand text-white rounded-lg font-medium hover:bg-sakura-brand/90 transition-all text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}