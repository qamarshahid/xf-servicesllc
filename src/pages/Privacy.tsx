export default function Privacy() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sakura-muted mb-4">
            <strong>Effective Date:</strong> January 1, 2025
          </p>
          <p className="text-sakura-muted mb-8">
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-sakura-muted leading-relaxed">
              Xf Service LLC ("we," "us," or "our") respects your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services. Please read this privacy policy carefully. If you do not
              agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="text-sakura-muted leading-relaxed mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sakura-muted ml-4">
                  <li>Fill out contact forms on our website</li>
                  <li>Request quotes or consultations for our services</li>
                  <li>Subscribe to our newsletter or blog updates</li>
                  <li>Communicate with us via email, phone, or SMS</li>
                  <li>Apply for job positions through our careers page</li>
                </ul>
                <p className="text-sakura-muted leading-relaxed mt-3">
                  This information may include: full name, email address, phone number, company name, job title,
                  and any other information you choose to provide in messages or forms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                <p className="text-sakura-muted leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device and
                  browsing behavior, including: IP address, browser type, operating system, referring URLs, pages
                  viewed, time spent on pages, and other diagnostic data. This information helps us improve our
                  website performance and user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sakura-brand-light border-l-4 border-sakura-brand rounded-card p-6">
            <h2 className="text-2xl font-bold mb-4">SMS Communication and Consent</h2>
            <div className="space-y-3 text-sakura-muted leading-relaxed">
              <p>
                <strong>Important:</strong> If you provide your phone number and consent to SMS communications
                through our contact forms or other means, you authorize Xf Service LLC to send you text messages
                regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responses to your inquiries and service requests</li>
                <li>Appointment confirmations and reminders</li>
                <li>Project updates and status notifications</li>
                <li>Important service announcements</li>
                <li>Occasional promotional messages (you can opt out at any time)</li>
              </ul>
              <p className="mt-4">
                <strong>SMS Terms:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Message frequency varies based on your service engagement</li>
                <li>Standard message and data rates may apply from your carrier</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>To opt out, reply STOP to any message or contact us directly</li>
                <li>For help, reply HELP or contact us at info@xfservice.com</li>
              </ul>
              <p className="mt-4">
                We use <strong>RingCentral</strong> and similar business communication platforms to manage SMS
                communications. Your phone number and message content may be processed through these third-party
                services in accordance with their respective privacy policies.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-sakura-muted leading-relaxed mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sakura-muted ml-4">
              <li><strong>Client Support:</strong> To respond to your inquiries, provide customer service, and communicate about our services</li>
              <li><strong>Service Delivery:</strong> To deliver, maintain, and improve our IT services, websites, and software solutions</li>
              <li><strong>Business Communications:</strong> To send appointment reminders, project updates, and service-related notifications via email, phone, or SMS</li>
              <li><strong>Marketing:</strong> To send newsletters, promotional materials, and information about our services (with your consent)</li>
              <li><strong>Analytics:</strong> To understand how visitors use our website and improve user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
              <li><strong>Business Operations:</strong> To process job applications, manage vendor relationships, and conduct internal business operations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
            <p className="text-sakura-muted leading-relaxed mb-3">
              We store your information using <strong>Supabase</strong>, a secure cloud database platform.
              Your contact form submissions, newsletter subscriptions, and other data are encrypted and stored
              in compliance with industry-standard security practices.
            </p>
            <p className="text-sakura-muted leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-sakura-muted leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in
              this Privacy Policy, unless a longer retention period is required or permitted by law. Contact form
              submissions and client communications are typically retained for the duration of the business relationship
              and up to seven years thereafter for legal and business record purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-sakura-muted leading-relaxed mb-3">
              We may use third-party services to help us operate our business and deliver services to you, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sakura-muted ml-4">
              <li><strong>Supabase:</strong> Database and backend services for data storage</li>
              <li><strong>RingCentral:</strong> Business communication platform for SMS and phone services</li>
              <li><strong>Google Maps:</strong> Location services for displaying our office location</li>
              <li><strong>Analytics Services:</strong> To understand website traffic and user behavior</li>
            </ul>
            <p className="text-sakura-muted leading-relaxed mt-3">
              These third parties have access to your personal information only to perform specific tasks on our
              behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-sakura-muted leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and store certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-sakura-muted leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sakura-muted ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails or SMS communications at any time</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
            </ul>
            <p className="text-sakura-muted leading-relaxed mt-3">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-sakura-muted leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If you are a parent or guardian and believe your child has provided us with
              personal information, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-sakura-muted leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal,
              regulatory, or operational reasons. We will notify you of any material changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website
              and services after any changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-sakura-muted leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us:
            </p>
            <div className="bg-white border border-sakura-border rounded-card p-6">
              <p className="font-semibold mb-2">Xf Service LLC</p>
              <p className="text-sakura-muted">5900 BALCONES DR NUM 25344</p>
              <p className="text-sakura-muted">AUSTIN, TX 78731</p>
              <p className="text-sakura-muted mt-3">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@xfservice.com" className="text-sakura-brand hover:underline">
                  privacy@xfservice.com
                </a>
              </p>
              <p className="text-sakura-muted">
                <strong>Phone:</strong>{' '}
                <a href="tel:+15551234567" className="text-sakura-brand hover:underline">
                  (555) 123-4567
                </a>
              </p>
            </div>
          </div>

          <div className="bg-sakura-bg border border-sakura-border rounded-card p-6">
            <p className="text-sm text-sakura-muted">
              This Privacy Policy is governed by the laws of the State of Texas and the United States. By using our
              website and services, you consent to the collection, use, and disclosure of your information as
              described in this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
