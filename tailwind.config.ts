import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          blue: '#1E4D78',
          sky: '#2C5F8A',
          orange: '#F58220',
          amber: '#FFC72C',
          green: '#1FA84A',
          bg: '#F8FAFC',
          text: '#1E293B',
          gray: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(11, 31, 58, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
