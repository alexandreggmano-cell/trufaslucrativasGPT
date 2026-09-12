/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFBF5',
          100: '#FBF3E8',
          200: '#F5E9D6',
          300: '#EDD9BE',
        },
        chocolate: {
          50: '#F7F0EB',
          100: '#E8D5C8',
          200: '#C9A88E',
          300: '#A8775A',
          400: '#7A4E33',
          500: '#5C3A23',
          600: '#4A2D1B',
          700: '#3A2415',
          800: '#2A1810',
          900: '#1C100A',
        },
        caramel: {
          50: '#FBF1E2',
          100: '#F5DFC0',
          200: '#EFC998',
          300: '#E8B370',
          400: '#E09A4E',
          500: '#D9862E',
          600: '#B86A20',
        },
        gold: {
          400: '#E6C786',
          500: '#D4AF6A',
          600: '#B8934E',
        },
        beige: {
          100: '#F0E6D6',
          200: '#E2D3BD',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(74, 45, 27, 0.18)',
        card: '0 8px 32px -12px rgba(74, 45, 27, 0.25)',
        glow: '0 0 0 4px rgba(217, 134, 46, 0.15)',
        premium: '0 20px 60px -20px rgba(58, 36, 21, 0.4)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(217, 134, 46, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(217, 134, 46, 0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        floatY: 'floatY 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
