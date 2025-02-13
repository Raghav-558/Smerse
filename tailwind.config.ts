import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "770px",
      },
      colors: {
        "custom-black": "#0A0A2B80",
        "light-purple": "#952FFE",
        "light-pink": "#C641C6",
        "light-orange": "#FF676B",
        "dark-blue": "#0A0A2B",
        "light-gray": "#222240",
      },
    },
  },
  plugins: [],
} satisfies Config;
