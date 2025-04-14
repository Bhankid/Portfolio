/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0F',
          800: '#13131A',
          700: '#1C1C26',
        },
        primary: {
          400: '#6366F1',
          500: '#4F46E5',
          600: '#4338CA',
        },
        accent: {
          400: '#8B5CF6',
          500: '#7C3AED',
          600: '#6D28D9',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'progress': 'progress 2s ease-in-out',
        'slide-up': 'slide-up 1s ease-out',
        'spin': 'spin 8s linear infinite',
        'pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};