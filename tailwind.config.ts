import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07111F',
          900: '#0B1726',
          800: '#12243A',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        charcoal: {
          950: '#09090B',
          900: '#111113',
          800: '#1A1A1D',
        },
      },
      boxShadow: {
        soft: '0 24px 80px -48px rgba(15, 23, 42, 0.45)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
