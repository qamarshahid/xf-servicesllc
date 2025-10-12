import { useEffect, useState } from 'react';
import { MapPin, Briefcase, ChevronDown, ChevronUp, Users, Heart, Zap, ArrowRight, Clock } from 'lucide-react';
import { getJobListings, type JobListing } from '../lib/api';

export default function Careers() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    try {
      const data = await getJobListings();
      setJobs(data);
    } catch (error) {
      console.error('Error loading job listings:', error);
    } finally {
      setLoading(false);
    }
  }

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
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
                Join our growing team
              </h1>
              <p className="text-2xl text-sakura-ink leading-relaxed mb-12">
                Be part of a dynamic team that's shaping the future of digital solutions. We're looking for passionate individuals who want to make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
                >
                  View Open Positions
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="mailto:careers@xfservices.com"
                  className="px-8 py-4 bg-white border-2 border-sakura-border rounded-xl font-semibold text-sakura-ink hover:border-sakura-brand hover:bg-sakura-brand hover:text-white transition-all"
                >
                  Send Resume
                </a>
              </div>
            </div>

            {/* Right Side - Why Work With Us */}
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border">
                <div className="w-16 h-16 bg-sakura-brand rounded-2xl flex items-center justify-center mb-8">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sakura-ink mb-6">Collaborative Culture</h3>
                <p className="text-sakura-ink text-lg leading-relaxed">Work with talented professionals in a supportive, inclusive environment</p>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border">
                <div className="w-16 h-16 bg-sakura-brand rounded-2xl flex items-center justify-center mb-8">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sakura-ink mb-6">Growth Opportunities</h3>
                <p className="text-sakura-ink text-lg leading-relaxed">Continuous learning and career development opportunities</p>
              </div>
              <div className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border">
                <div className="w-16 h-16 bg-sakura-brand rounded-2xl flex items-center justify-center mb-8">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sakura-ink mb-6">Work-Life Balance</h3>
                <p className="text-sakura-ink text-lg leading-relaxed">Flexible schedules and remote work options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Why you'll <span className="text-sakura-brand">love working here</span>
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed max-w-2xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and perks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
              { title: 'Flexible PTO', description: 'Take time off when you need it, no questions asked' },
              { title: 'Learning Budget', description: 'Annual budget for courses, conferences, and certifications' },
              { title: 'Remote Work', description: 'Work from anywhere with flexible schedules' },
              { title: 'Equipment Budget', description: 'Latest tech and equipment for your home office' },
              { title: 'Team Events', description: 'Regular team building and social events' },
              { title: 'Stock Options', description: 'Equity participation in our growing company' },
              { title: 'Mentorship', description: 'Pair with senior team members for guidance' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-sakura-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-sakura-ink mb-4">{benefit.title}</h3>
                <p className="text-sakura-ink leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Current <span className="text-sakura-brand">opportunities</span>
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for you
            </p>
          </div>

          {loading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border animate-pulse">
                  <div className="h-8 bg-sakura-border rounded w-1/3 mb-6"></div>
                  <div className="h-4 bg-sakura-border rounded w-1/4 mb-2"></div>
                  <div className="h-4 bg-sakura-border rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-sakura-bg rounded-2xl border border-sakura-border overflow-hidden">
                  <div
                    className="p-10 cursor-pointer hover:bg-white transition-colors"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-sakura-ink mb-4">{job.title}</h3>
                        <div className="flex items-center gap-8 text-sakura-muted">
                          <div className="flex items-center gap-3">
                            <MapPin size={20} />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-3">
                            <Briefcase size={20} />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock size={20} />
                            Posted {new Date(job.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="px-6 py-3 bg-sakura-brand-light text-sakura-brand rounded-xl text-sm font-semibold">
                          {job.department}
                        </span>
                        {expandedJob === job.id ? <ChevronUp size={28} className="text-sakura-ink" /> : <ChevronDown size={28} className="text-sakura-ink" />}
                      </div>
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <div className="px-10 pb-10 border-t border-sakura-border">
                      <div className="pt-8">
                        <div className="prose max-w-none">
                          <div className="text-sakura-ink leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: job.description }} />
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row gap-6">
                          <a
                            href={`mailto:careers@xfservices.com?subject=Application for ${job.title}`}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
                          >
                            Apply Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                          <button className="px-10 py-5 bg-white border-2 border-sakura-border rounded-xl font-semibold text-sakura-ink hover:border-sakura-brand transition-all">
                            Save Job
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-sakura-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Briefcase size={40} className="text-sakura-brand" />
              </div>
              <h3 className="text-3xl font-bold text-sakura-ink mb-6">No Open Positions Right Now</h3>
              <p className="text-sakura-ink text-lg mb-10 max-w-md mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a
                href="mailto:careers@xfservices.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
              >
                Send Your Resume
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-16 border border-sakura-border shadow-lg">
            <h2 className="text-5xl font-bold text-sakura-ink leading-tight mb-8">
              Don't see your <span className="text-sakura-brand">perfect role?</span>
            </h2>
            <p className="text-xl text-sakura-ink leading-relaxed mb-12 max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your resume and tell us how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:careers@xfservices.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all group"
              >
                Send Your Resume
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-10 py-5 bg-white border-2 border-sakura-border rounded-xl font-semibold text-sakura-ink hover:border-sakura-brand hover:bg-sakura-brand hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}