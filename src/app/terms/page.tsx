import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Agency Mentorship",
  description: "Terms of Service for AI Agency Mentorship by Altcutm LLC",
};

export default function TermsPage() {
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
          Terms of Service
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
              Welcome to <strong>AI Agency School</strong> (the "Service"), operated by{" "}
              <strong>Altcutm LLC</strong> ("we," "us," or "our"). By accessing or using our Service,
              you ("you," "your," or "Member") agree to be bound by these Terms of Service ("Terms").
              If you do not agree, do not use the Service.
            </p>
          </section>

          {/* 1. Who We Are */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">1. Who We Are</h2>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark">
              <li><strong>Business Name:</strong> Altcutm LLC</li>
              <li><strong>Owner:</strong> Patrick Altcutman Musson (a.k.a. Patrick Musson, a.k.a. Alt Cutman)</li>
              <li><strong>Contact Email:</strong> <a href="mailto:alt@altcutman.com" className="text-accent hover:underline">alt@altcutman.com</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/6421255493" className="text-accent hover:underline">+64 21 255 0493</a></li>
              <li><strong>Physical Address:</strong> Mount Maunganui, Tauranga, New Zealand</li>
            </ul>
          </section>

          {/* 2. No Guarantees */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">2. No Guarantees of Results or Income</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              AI Agency School provides educational content, training, templates, and tools.
              <strong> We make no guarantees</strong> that you will earn any specific income,
              close any deals, or achieve any particular result.
            </p>
            <p className="text-primaryDark leading-relaxed mb-4">
              Your success depends entirely on your effort, skills, market conditions, and factors
              beyond our control. Testimonials and case studies represent individual experiences
              and are not typical results.
            </p>
          </section>

          {/* 3. Month-2 Free Guarantee */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">3. Month-2 Free Guarantee ("Action Guarantee")</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              If you complete all required Month-1 action steps (as defined in the curriculum)
              and do not land your first client by the end of Month 1, we will provide{" "}
              <strong>Month 2 free</strong>.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-4 mb-4">
              <p className="text-primaryDark font-semibold mb-2">To qualify:</p>
              <ul className="list-disc pl-6 space-y-1 text-primaryDark">
                <li>Submit proof of completion (e.g., screenshots, outreach logs, call recordings)</li>
                <li>Request the waiver within 7 days of Month 1 ending</li>
                <li>Email <a href="mailto:alt@altcutman.com" className="text-accent hover:underline">alt@altcutman.com</a> or message on WhatsApp</li>
              </ul>
            </div>
            <p className="text-primaryDark leading-relaxed">
              This guarantee applies only to members who remain in good standing and follow
              the curriculum.
            </p>
          </section>

          {/* 4. Eligibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">4. Eligibility</h2>
            <p className="text-primaryDark leading-relaxed">
              You must be at least 18 years old (or the age of majority in your jurisdiction)
              to use this Service. By enrolling, you represent that you meet this requirement.
            </p>
          </section>

          {/* 5. Account and Payments */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">5. Account and Payments</h2>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark">
              <li>
                <strong>Subscription:</strong> Monthly membership billed at $97/month (Founders Rate)
                or $197/month (standard rate after launch window)
              </li>
              <li>
                <strong>Payment Processor:</strong> Stripe (secure, PCI-compliant)
              </li>
              <li>
                <strong>Auto-Renewal:</strong> Your subscription renews automatically each month
                unless you cancel
              </li>
              <li>
                <strong>Cancellation:</strong> Cancel anytime by emailing{" "}
                <a href="mailto:alt@altcutman.com" className="text-accent hover:underline">alt@altcutman.com</a>.
                Cancellation takes effect at the end of the current billing cycle
              </li>
              <li>
                <strong>No Refunds:</strong> Payments are non-refundable except as required by law
                or under the Month-2 Free Guarantee
              </li>
            </ul>
          </section>

          {/* 6. Use of the Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">6. Use of the Service</h2>
            <p className="text-primaryDark leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li>Use the Service for lawful purposes only</li>
              <li>Not share, resell, or redistribute our content, templates, or training materials</li>
              <li>Not reverse-engineer, copy, or create derivative works of our proprietary systems</li>
              <li>Respect intellectual property rights</li>
            </ul>
            <p className="text-primaryDark leading-relaxed">
              Violation of these terms may result in immediate termination of your account without refund.
            </p>
          </section>

          {/* 7. Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">7. Intellectual Property</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              All content, templates, training videos, automations, and materials provided
              through AI Agency School are the property of <strong>Altcutm LLC</strong> and
              are protected by copyright and other intellectual property laws.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark">
              <li>
                <strong>License:</strong> We grant you a non-exclusive, non-transferable license
                to use the materials for your own business purposes
              </li>
              <li>
                <strong>Restrictions:</strong> You may not sell, share, or publicly distribute
                our materials
              </li>
            </ul>
          </section>

          {/* 8. Privacy and Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">8. Privacy and Data</h2>
            <p className="text-primaryDark leading-relaxed">
              We collect and process personal data as described in our{" "}
              <Link href="/privacy" className="text-accent hover:underline font-semibold">
                Privacy Policy
              </Link>
              . By using the Service, you consent to such processing.
            </p>
          </section>

          {/* 9. Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">9. Disclaimers</h2>
            <div className="bg-secondary/10 border border-secondary/30 p-4 mb-4">
              <p className="text-primaryDark leading-relaxed mb-2">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-primaryDark leading-relaxed">
                We do not guarantee uninterrupted, error-free, or secure access to the Service.
              </p>
            </div>
          </section>

          {/* 10. Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">10. Limitation of Liability</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, ALTCUTM LLC, PATRICK MUSSON, AND AFFILIATES
              SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mb-4">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages arising from your use or inability to use the Service</li>
            </ul>
            <p className="text-primaryDark leading-relaxed">
              Our total liability shall not exceed the amount you paid in the 12 months
              preceding the claim.
            </p>
          </section>

          {/* 11. Indemnification */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">11. Indemnification</h2>
            <p className="text-primaryDark leading-relaxed">
              You agree to indemnify, defend, and hold harmless Altcutm LLC, Patrick Musson,
              and affiliates from any claims, damages, losses, or expenses (including legal fees)
              arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark mt-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          {/* 12. Dispute Resolution */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">12. Dispute Resolution and Governing Law</h2>
            <ul className="list-disc pl-6 space-y-2 text-primaryDark">
              <li>
                <strong>Governing Law:</strong> These Terms are governed by the laws of{" "}
                <strong>New Zealand</strong>, without regard to conflict of law principles
              </li>
              <li>
                <strong>Disputes:</strong> Any disputes shall be resolved through good-faith
                negotiation. If unresolved, disputes shall be submitted to binding arbitration
                in New Zealand or the jurisdiction of your residence, as applicable
              </li>
            </ul>
          </section>

          {/* 13. Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">13. Changes to These Terms</h2>
            <p className="text-primaryDark leading-relaxed">
              We may update these Terms from time to time. We will notify you of material changes
              via email or through the Service. Continued use of the Service after changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          {/* 14. Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primaryDark mb-4">14. Contact Us</h2>
            <p className="text-primaryDark leading-relaxed mb-4">
              If you have questions or concerns about these Terms, please contact:
            </p>
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
              <p className="text-primaryDark font-semibold mb-2">Altcutm LLC</p>
              <p className="text-primaryDark mb-1">
                Email: <a href="mailto:alt@altcutman.com" className="text-accent hover:underline">alt@altcutman.com</a>
              </p>
              <p className="text-primaryDark mb-1">
                WhatsApp: <a href="https://wa.me/6421255493" className="text-accent hover:underline">+64 21 255 0493</a>
              </p>
              <p className="text-primaryDark">
                Address: Mount Maunganui, Tauranga, New Zealand
              </p>
            </div>
          </section>

          {/* Footer note */}
          <section className="border-t border-primary/20 pt-8 mt-12">
            <p className="text-secondary text-sm italic">
              By using AI Agency School, you acknowledge that you have read, understood, and
              agree to be bound by these Terms of Service.
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
