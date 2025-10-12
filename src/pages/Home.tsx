import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { getTestimonials } from '../lib/api';

interface Testimonial {
  id: number;
  quote: string;
  client_name: string;
  position?: string;
  company_name: string;
  rating: number;
}

const Home: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section - Matching Project Design System */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              {/* Large Bold Headline - Adjusted Sizing */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
                <span className="block text-sakura-ink">We make</span>
                <span className="block text-sakura-brand">apps &</span>
                <span className="block text-sakura-brand-light">websites</span>
              </h1>
              
              {/* Description - Matching Project Typography */}
              <p className="text-xl text-sakura-ink leading-relaxed mb-12 max-w-lg">
                At XF Services LLC, we specialize in delivering personalized web development and marketing solutions that propel your business forward.
              </p>
              
              {/* CTA Buttons - Matching Project Style */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sakura-brand text-white border-2 border-sakura-ink rounded-xl font-semibold hover:bg-sakura-brand/90 transition-colors"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sakura-brand-light text-sakura-ink border-2 border-sakura-ink rounded-xl font-semibold hover:bg-sakura-brand-light/90 transition-colors"
                >
                  View Services
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Side - Circular Image - Adjusted Size */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-sakura-ink">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=faces" 
                    alt="Professional team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Small decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-sakura-brand rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-sakura-brand-light rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Corner Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-10">
        <Link
          to="/services"
          className="px-6 py-3 bg-white border-2 border-sakura-ink rounded-xl text-sakura-ink font-medium hover:bg-sakura-bg transition-colors shadow-lg"
        >
          More Services ↗
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white border-2 border-sakura-ink rounded-xl text-sakura-ink font-medium hover:bg-sakura-bg transition-colors shadow-lg"
        >
          Get Quote ↗
        </Link>
      </div>

      {/* Stats Section - Matching Other Pages */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-sakura-brand mb-3">500+</div>
              <div className="text-sakura-ink font-medium">Projects Done</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sakura-brand mb-3">98%</div>
              <div className="text-sakura-ink font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sakura-brand mb-3">5+</div>
              <div className="text-sakura-ink font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Only if we have data */}
      {!loading && testimonials.length > 0 && (
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-sakura-ink leading-tight mb-8">
                What our <span className="text-sakura-brand">clients say</span>
              </h2>
              <p className="text-lg text-sakura-ink leading-relaxed max-w-2xl mx-auto">
                Real feedback from businesses we've helped grow and succeed
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? "fill-sakura-brand text-sakura-brand" : "text-sakura-border"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-sakura-ink mb-8 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-sakura-border">
                    <div className="w-12 h-12 rounded-full bg-sakura-brand flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.client_name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-sakura-ink">{testimonial.client_name}</div>
                      {testimonial.position && (
                        <div className="text-sm text-sakura-muted">{testimonial.position}</div>
                      )}
                      <div className="text-sm font-semibold text-sakura-brand">{testimonial.company_name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Matching Other Pages */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-sakura-bg rounded-3xl p-16 border border-sakura-border">
            <h2 className="text-4xl md:text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Ready to start your <span className="text-sakura-brand">project?</span>
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed mb-12 max-w-2xl mx-auto">
              Let's discuss your needs and create a solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
              >
                Get Started Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-10 py-5 bg-white border-2 border-sakura-border rounded-xl font-semibold text-sakura-ink hover:border-sakura-brand hover:bg-sakura-brand hover:text-white transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;