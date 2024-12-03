import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'lg':'1080px',
        'xl':'1280px',
        '2xl':'1560px',
        '3xl': '1920px',
        '4xl': '2800px',
        '5xl':'3200px',
      },
       fontFamily: {
        'agrandir': ['Agrandir', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

export default config;