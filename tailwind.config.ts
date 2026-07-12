import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857'
        },
        slate: {
          950: '#020617'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 45px rgba(16,185,129,0.18)'
      }
    }
  },
  plugins: []
} satisfies Config;
