import type { Metadata } from "next";
import Script from "next/script";
import ExitPopup from "@/components/shared/ExitPopup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thevoiceaiagency.com"),
  title: {
    default: "AI Agency Training & Mentorship — Founders Rate $97",
    template: "%s | The Voice AI Agency",
  },
  description:
    "Learn voice agents, no-code automations, and proven outreach with plug-and-play systems and weekly mentorship. Training only — results depend on your effort. Founders rate $97/month — price doubles soon.",
  keywords: [
    "AI agency training",
    "automation agency course",
    "voice agents training",
    "Make.com training",
    "no-code automation course",
    "agency mentorship",
    "Go HighLevel training",
    "n8n automation",
    "Vbcoding training",
    "AI chatbot development",
    "$50K agency blueprint",
  ],
  authors: [{ name: "Altcutm LLC" }],
  creator: "Altcutm LLC",
  publisher: "The Voice AI Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thevoiceaiagency.com",
    siteName: "The Voice AI Agency",
    title: "AI Agency Training & Mentorship — Founders Rate $97",
    description:
      "Learn voice agents, no-code automations, and proven outreach methods with plug-and-play systems. Training only — results depend on your effort.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Voice AI Agency - Build Your $50K/Month AI Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency Training & Mentorship — Founders Rate $97",
    description:
      "Learn voice agents, no-code automations, and proven outreach with plug-and-play systems. Founders rate $97/month.",
    images: ["/images/og-image.png"],
    creator: "@thevoiceaiagency",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://thevoiceaiagency.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}

        {/* Exit Intent Popup */}
        <ExitPopup />

        {/* LeadConnector Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6807407a30666b2d3727d268"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
