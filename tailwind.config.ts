import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kra8t: {
          blue: "#0E5CFF",
          teal: "#20E0B0",
          amber: "#F59E0B",
          ink: "#102033",
          night: "#0F172A",
          soft: "#EEF6FF",
          bg: "#F8FAFC",
        },
      },
      fontFamily: {
        heading: ["Manrope", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
