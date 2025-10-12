import { Link } from 'react-router-dom';
import { Target, Users, Activity, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Main Content */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-sakura-ink leading-[0.9] mb-8">
                Transforming ideas into digital excellence
              </h1>
              <p className="text-2xl text-sakura-ink leading-relaxed mb-12">
                We're a team of passionate technologists and creative problem-solvers based in Austin, Texas, dedicated to helping businesses thrive in the digital age.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-sakura-ink rounded-xl font-semibold text-sakura-ink hover:bg-sakura-ink hover:text-white transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">150+</div>
                <div className="text-sakura-ink font-medium">Projects Delivered</div>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">98%</div>
                <div className="text-sakura-ink font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">5+</div>
                <div className="text-sakura-ink font-medium">Years in Business</div>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-8 border border-sakura-border text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-sakura-brand mb-3">24/7</div>
                <div className="text-sakura-ink font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Story Content */}
            <div>
              <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
                Built on innovation and trust
              </h2>
              <div className="space-y-8 text-lg text-sakura-ink leading-relaxed">
                <p>
                  Founded in Austin's vibrant tech community, XF Services LLC was built on a simple belief:
                  every business deserves access to world-class digital solutions, regardless of their size or budget.
                </p>
                <p>
                  We started by helping local startups build their first websites and optimize their online presence.
                  As word spread about our commitment to quality and customer success, we expanded our services to
                  include custom software development and comprehensive SEO strategies.
                </p>
                <p>
                  Today, we work with clients across industries, from e-commerce to healthcare, helping them
                  navigate the digital landscape with confidence. Our approach combines technical excellence
                  with genuine care for each client's unique goals and challenges.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Our team working together" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Empowering digital transformation
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed max-w-3xl mx-auto">
              To empower businesses with innovative, scalable digital solutions that drive real growth
              and create lasting value in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} className="text-sakura-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-sakura-ink">Innovation First</h3>
              <p className="text-sakura-ink leading-relaxed text-lg">
                We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage in your market.
              </p>
            </div>

            <div className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <Users size={32} className="text-sakura-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-sakura-ink">Client-Centric</h3>
              <p className="text-sakura-ink leading-relaxed text-lg">
                Your success is our success. We listen carefully, communicate clearly, and build solutions that truly meet your needs.
              </p>
            </div>

            <div className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <Activity size={32} className="text-sakura-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-sakura-ink">Results-Driven</h3>
              <p className="text-sakura-ink leading-relaxed text-lg">
                We measure our work by the impact it creates, focusing on tangible outcomes that move your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-16 border border-sakura-border shadow-lg">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Let's work together
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed mb-12 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? We'd love to hear about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
              >
                Get in Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-10 py-5 bg-white border-2 border-sakura-border rounded-xl font-semibold text-sakura-ink hover:border-sakura-brand hover:bg-sakura-brand hover:text-white transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}