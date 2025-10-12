import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { submitContactForm } from '../lib/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    sms_consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', sms_consent: false });
    } catch (err) {
      setError('Failed to submit form. Please try again or email us directly.');
      console.error(err);
    } finally {
      setLoading(false);
    }
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
                Let's build something amazing together
              </h1>
              <p className="text-2xl text-sakura-ink leading-relaxed mb-12">
                Ready to start your project? Have questions about our services? We'd love to hear from you. Reach out and let's discuss how we can help your business grow.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sakura-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-sakura-brand" />
                  </div>
                  <span className="text-sakura-ink font-medium text-lg">5900 BALCONES DR NUM 25344, AUSTIN, TX 78731</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sakura-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-sakura-brand" />
                  </div>
                  <span className="text-sakura-ink font-medium text-lg">(512) 555-0123</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sakura-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-sakura-brand" />
                  </div>
                  <span className="text-sakura-ink font-medium text-lg">hello@xfservices.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sakura-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-sakura-brand" />
                  </div>
                  <span className="text-sakura-ink font-medium text-lg">Mon-Fri 9AM-6PM CST</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              {success ? (
                <div className="bg-sakura-bg rounded-2xl p-12 border border-sakura-border text-center">
                  <div className="w-20 h-20 bg-sakura-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-sakura-ink mb-6">Message Sent!</h3>
                  <p className="text-sakura-ink text-lg mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-8 py-4 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-sakura-bg rounded-2xl p-10 border border-sakura-border">
                  <h3 className="text-3xl font-bold text-sakura-ink mb-8">Send us a message</h3>
                  
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-sakura-ink mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 border border-sakura-border rounded-xl focus:ring-2 focus:ring-sakura-brand focus:border-transparent transition-all text-lg"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-sakura-ink mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 border border-sakura-border rounded-xl focus:ring-2 focus:ring-sakura-brand focus:border-transparent transition-all text-lg"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-sakura-ink mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 border border-sakura-border rounded-xl focus:ring-2 focus:ring-sakura-brand focus:border-transparent transition-all text-lg"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-sakura-ink mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-6 py-4 border border-sakura-border rounded-xl focus:ring-2 focus:ring-sakura-brand focus:border-transparent transition-all resize-none text-lg"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="sms_consent"
                        checked={formData.sms_consent}
                        onChange={(e) => setFormData({ ...formData, sms_consent: e.target.checked })}
                        className="mt-1 w-5 h-5 text-sakura-brand border-sakura-border rounded focus:ring-sakura-brand"
                      />
                      <label htmlFor="sms_consent" className="text-sm text-sakura-ink">
                        I agree to receive SMS notifications about my project status
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-sakura-brand text-white rounded-xl font-semibold hover:bg-sakura-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group text-lg"
                    >
                      {loading ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-sakura-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakura-ink leading-tight mb-6">
              Find us in <span className="text-sakura-brand">Austin, Texas</span>
            </h2>
            <p className="text-xl text-sakura-ink">
              Located in the heart of Austin's tech community
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-sakura-border shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={60} className="text-sakura-brand mx-auto mb-6" />
                <p className="text-sakura-ink font-semibold text-xl">Interactive Map Coming Soon</p>
                <p className="text-sakura-muted">5900 BALCONES DR NUM 25344, AUSTIN, TX 78731</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}