import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#01303E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#01F1EB] mb-4">
              AI Agency Mentorship
            </h4>
            <p className="text-sm sm:text-base text-white/70">Part of Altcutm LLC</p>
            <p className="text-sm sm:text-base text-white/70 mt-2">
              Training & mentorship to launch your AI & Automation agency.
            </p>
          </div>

          <div>
            <h5 className="text-base sm:text-lg font-semibold mb-4">Contact</h5>
            <div className="space-y-2 text-sm sm:text-base text-white/70">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:alt@altcutman.com"
                  className="hover:text-[#01F1EB] transition-colors break-all"
                >
                  alt@altcutman.com
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/6421255493"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#01F1EB] transition-colors"
                >
                  +64 21 255 0493
                </a>
              </p>
              <p>
                <strong>Skool:</strong> Message Altus directly in community
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-base sm:text-lg font-semibold mb-4">Legal</h5>
            <div className="space-y-2 text-sm sm:text-base">
              <Link
                href="/terms"
                className="block text-white/70 hover:text-[#01F1EB] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-white/70 hover:text-[#01F1EB] transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href="mailto:alt@altcutman.com"
                className="block text-white/70 hover:text-[#01F1EB] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p className="text-sm mb-4 max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> Results shown on this site are not typical and individual
            results will vary. Your success depends on your effort, dedication, skill level, and
            market conditions. We make no guarantees of income or results. All content is for
            educational and informational purposes only. See our{" "}
            <Link href="/terms" className="text-[#01F1EB] hover:underline">
              Terms of Service
            </Link>{" "}
            for full details.
          </p>
          <p>&copy; 2025 Altcutm LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
