// Color palette
export const COLORS = {
  light: "#F9F9FB",
  primary: "#01355A",
  primaryDark: "#01303E",
  accent: "#01F1EB",
  secondary: "#267090",
} as const;

// Storage keys
export const STORAGE_KEYS = {
  countdownTarget: "countdown_target",
  exitPopupShown: "exitPopupShown",
  trustedUser: "trustedUser",
} as const;

// External URLs
export const URLS = {
  vsl: "https://www.youtube.com/watch?v=qVLv8agBFnA",
  vslId: "qVLv8agBFnA",
  portfolio: "https://portfolio-ice-spark.lovable.app/",
  testimonials: [
    "https://www.videoask.com/azub3jh0biwnrdl3c2lz3y4lfv5juew75tof7myo",
    "https://www.videoask.com/ajstn5bgdwbxvlw43in2pfz5lvgw7fsz2g20vll8",
    "https://www.videoask.com/aa1t2sveu7i3hkx7fernsb9j31yozqsnix941odq",
    "https://www.videoask.com/aj37agx815tf6gxbwt3xuyioa9p1h4honmvm0n0o",
    "https://www.videoask.com/avfkwepfamgfr0fyh1xcfwzur8fv2r93y7kzhkux",
    "https://www.videoask.com/aep9pe91cpbbrrhhj3c073wyuy2q4tq3mx61unnx",
  ],
  github: "https://github.com/AltusSnyman/mentorship-2.git",
} as const;

// Pricing
export const PRICING = {
  founders: {
    amount: 97,
    currency: "USD",
    display: "$97",
  },
  regular: {
    amount: 197,
    currency: "USD",
    display: "$197",
  },
  totalValue: "$16,424+",
} as const;

// Contact information
export const CONTACT = {
  email: "alt@altcutman.com",
  whatsapp: "+64 21 255 0493",
  company: "Altcutm LLC",
  siteName: "The Voice AI Agency",
} as const;

// SEO
export const SEO = {
  title: "AI Agency Training & Mentorship — Founders Rate $97",
  description:
    "Learn voice agents, no-code automations, and proven outreach with plug-and-play systems and weekly mentorship. Training only — results depend on your effort. Founders rate $97/month — price doubles soon.",
  domain: "https://thevoiceaiagency.com",
  twitterHandle: "@thevoiceaiagency",
} as const;

// Countdown configuration
export const COUNTDOWN_CONFIG = {
  durationHours: 24,
  updateIntervalDefault: 60000, // 1 minute
  updateIntervalFast: 1000, // 1 second
} as const;
