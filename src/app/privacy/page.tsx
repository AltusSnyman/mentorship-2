import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Agency Mentorship",
  description: "Privacy Policy for AI Agency Mentorship by Altcutm LLC",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <header className="bg-primary text-white py-6 border-b border-accent/20">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="text-accent hover:text-accent/80 transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primaryDark mb-4">
          Privacy Policy
        </h1>
        <p className="text-secondary mb-2">
          <strong>Effective Date:</strong> January 1st, 2025
        </p>
        <p className="text-secondary mb-8">
          <strong>Last Updated:</strong> January 1st, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <p className="text-primaryDark leading-relaxed mb-4">
              <strong>Altcutm LLC</strong> ("we," "us," or "our") operates{" "}
              <strong>AI Agency School</strong> (the "Service"). This Privacy Policy explains
              how we collect, use, disclose, and safeguard your personal information when you
              use our Service.
            </p>
            <p className="text-primaryDark leading-relaxed">
              By using the Service, you consent to the practices described in this Privacy Policy.
              If you do not agree, please do not use the Service.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-primaryDark mb-3">
              a) Personal Information You Provide
            </h3>
            <p className="text-primaryDark leading-relaxed mb-3">
              When you register, subscribe, or interact with the Service, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li><strong>Name</strong></li>
              <li><strong>Email address</strong></li>
              <li><strong>Phone number</strong> (optional, for WhatsApp support)</li>
              <li><strong>Payment information</strong> (processed securely by Stripe; we do not store full card details)</li>
              <li><strong>Business details</strong> (optional, e.g., agency name, website)</li>
              <li><strong>Communication data</strong> (emails, support messages, course feedback)</li>
            </ul>

            <h3 className="text-xl font-semibold text-primaryDark mb-3">
              b) Automatically Collected Information
            </h3>
            <p className="text-primaryDark leading-relaxed mb-3">
              When you access the Service, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li><strong>Device information:</strong> IP address, browser type, operating system</li>
              <li><strong>Usage data:</strong> Pages viewed, time spent, clickstream data</li>
              <li><strong>Cookies and tracking technologies:</strong> See Section 8 below</li>
            </ul>

            <h3 className="text-xl font-semibold text-primaryDark mb-3">
              c) Information from Third Parties
            </h3>
            <p className="text-primaryDark leading-relaxed">
              We may receive information from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mt-3">
              <li><strong>Stripe:</strong> Payment and transaction data</li>
              <li><strong>Analytics providers:</strong> Google Analytics, Mixpanel, or similar</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">2. How We Use Your Information</h2>
            <p className="text-primaryDark leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark">
              <li><strong>Provide the Service:</strong> Process subscriptions, deliver content, manage your account</li>
              <li><strong>Communicate:</strong> Send course updates, support responses, newsletters</li>
              <li><strong>Process payments:</strong> Charge subscription fees, handle refunds (via Stripe)</li>
              <li><strong>Improve the Service:</strong> Analyze usage, optimize content, fix bugs</li>
              <li><strong>Marketing:</strong> Send promotional emails (you can opt out anytime)</li>
              <li><strong>Legal compliance:</strong> Comply with laws, enforce our Terms, prevent fraud</li>
            </ul>
          </section>

          {/* 3. Legal Basis for Processing (GDPR) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">
              3. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              If you are in the European Economic Area (EEA), UK, or Switzerland, we process
              your data under the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark">
              <li>
                <strong>Contract performance:</strong> To provide the Service you subscribed to
              </li>
              <li>
                <strong>Legitimate interests:</strong> To improve the Service, analyze usage,
                and communicate with you
              </li>
              <li>
                <strong>Consent:</strong> For marketing emails (you can withdraw consent anytime)
              </li>
              <li>
                <strong>Legal obligation:</strong> To comply with laws and regulations
              </li>
            </ul>
          </section>

          {/* 4. How We Share Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">4. How We Share Your Information</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              We do <strong>not sell</strong> your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark">
              <li>
                <strong>Service Providers:</strong> Stripe (payments), email providers (e.g., SendGrid),
                analytics tools (e.g., Google Analytics), hosting services
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law, court order, or to protect
                our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                of assets
              </li>
            </ul>
          </section>

          {/* 5. Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">5. Data Retention</h2>
            <p className="text-primaryDark leading-relaxed">
              We retain your personal information for as long as necessary to provide the Service
              and comply with legal obligations. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mt-4">
              <li>
                <strong>Active accounts:</strong> Data retained while your subscription is active
              </li>
              <li>
                <strong>Canceled accounts:</strong> Data retained for up to 12 months after
                cancellation (for support, legal, or tax purposes)
              </li>
              <li>
                <strong>Transaction records:</strong> Retained for 7 years (tax and accounting compliance)
              </li>
            </ul>
          </section>

          {/* 6. Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">6. Your Rights</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a machine-readable format
              </li>
              <li>
                <strong>Objection:</strong> Object to processing based on legitimate interests
              </li>
              <li>
                <strong>Restrict processing:</strong> Request limitation of data processing
              </li>
              <li>
                <strong>Withdraw consent:</strong> Withdraw consent for marketing emails
              </li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4">
              <p className="text-primaryDark font-semibold">To exercise your rights:</p>
              <p className="text-primaryDark mt-2">
                Email:{" "}
                <a href="mailto:alt@altcutman.com" className="text-accent hover:underline">
                  alt@altcutman.com
                </a>
              </p>
              <p className="text-primaryDark">
                WhatsApp:{" "}
                <a href="https://wa.me/6421255493" className="text-accent hover:underline">
                  +64 21 255 0493
                </a>
              </p>
            </div>
          </section>

          {/* 7. Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">7. Security</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              We implement reasonable technical and organizational measures to protect your data,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li>Encryption (SSL/TLS) for data in transit</li>
              <li>Secure hosting infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security audits</li>
            </ul>
            <div className="bg-secondary/10 border border-secondary/30 p-4">
              <p className="text-primaryDark leading-relaxed">
                However, no method of transmission over the Internet is 100% secure. We cannot
                guarantee absolute security.
              </p>
            </div>
          </section>

          {/* 8. Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li>Remember your login and preferences</li>
              <li>Analyze site traffic and usage</li>
              <li>Personalize content</li>
              <li>Improve performance</li>
            </ul>

            <h3 className="text-xl font-semibold text-primaryDark mb-3">Types of Cookies</h3>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li>
                <strong>Essential cookies:</strong> Required for the Service to function
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how you use the Service
                (e.g., Google Analytics)
              </li>
              <li>
                <strong>Marketing cookies:</strong> Used for targeted advertising (if applicable)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-primaryDark mb-3">Managing Cookies</h3>
            <p className="text-primaryDark leading-relaxed">
              You can control cookies through your browser settings. Note that disabling cookies
              may affect functionality.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">9. Third-Party Links</h2>
            <p className="text-primaryDark leading-relaxed">
              The Service may contain links to third-party websites (e.g., YouTube, Stripe).
              We are not responsible for their privacy practices. Please review their privacy
              policies.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">10. Children's Privacy</h2>
            <p className="text-primaryDark leading-relaxed">
              The Service is not intended for children under 18. We do not knowingly collect
              data from minors. If you believe we have collected such data, please contact us
              immediately.
            </p>
          </section>

          {/* 11. International Data Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">11. International Data Transfers</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              Your data may be transferred to and processed in countries other than your own,
              including New Zealand and the United States (where our service providers are located).
            </p>
            <p className="text-primaryDark leading-relaxed">
              We ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses
              for GDPR compliance).
            </p>
          </section>

          {/* 12. Changes to This Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-primaryDark leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material
              changes via email or through the Service. Continued use after changes constitutes
              acceptance.
            </p>
          </section>

          {/* 13. Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">13. Contact Us</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or your
              personal data, please contact:
            </p>
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
              <p className="text-primaryDark font-semibold mb-2">Altcutm LLC</p>
              <p className="text-primaryDark mb-1">
                <strong>Data Protection Officer:</strong> Patrick Altcutman Musson
              </p>
              <p className="text-primaryDark mb-1">
                Email:{" "}
                <a href="mailto:alt@altcutman.com" className="text-accent hover:underline">
                  alt@altcutman.com
                </a>
              </p>
              <p className="text-primaryDark mb-1">
                WhatsApp:{" "}
                <a href="https://wa.me/6421255493" className="text-accent hover:underline">
                  +64 21 255 0493
                </a>
              </p>
              <p className="text-primaryDark">
                Address: Mount Maunganui, Tauranga, New Zealand
              </p>
            </div>
          </section>

          {/* Footer note */}
          <section className="border-t border-primary/20 pt-8 mt-12">
            <p className="text-secondary text-sm italic">
              By using AI Agency School, you acknowledge that you have read and understood
              this Privacy Policy.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2025 Altcutm LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
