import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F9F9FB",
        primary: "#01355A",
        primaryDark: "#01303E",
        accent: "#01F1EB",
        secondary: "#267090",
      },
    },
  },
  plugins: [],
};

export default config;
