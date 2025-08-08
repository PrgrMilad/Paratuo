/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Royal Blue Palette
        'royal': {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd8ff',
          300: '#98bff8',
          400: '#689ef2',
          500: '#3d75ec',
          600: '#2d5fd8',
          700: '#2648cf',
          800: '#1f3ba8',
          900: '#1a2451',
          950: '#0f1a2e',
        },
        
        // Glassmorphism Colors
        'glass': {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.08)',
          dark: 'rgba(0, 0, 0, 0.2)',
          primary: 'rgba(61, 117, 236, 0.15)',
          primaryHover: 'rgba(61, 117, 236, 0.25)',
        },
        
        // Text Colors
        'text': {
          light: '#1a2451',
          dark: '#ffffff',
          muted: 'rgba(255, 255, 255, 0.6)',
        },
      },
      fontFamily: {
        'iran': ['IRANSansX', 'Shabnam', 'Vazir', 'sans-serif'],
        'shabnam': ['Shabnam', 'sans-serif'],
        'vazir': ['Vazir', 'sans-serif'],
      },
      borderRadius: {
        'glass': '1.5rem',
        'btn': '1rem',
      },
      backdropBlur: {
        'glass': '20px',
        'btn': '12px',
        'input': '10px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'btn': '0 4px 20px rgba(61, 117, 236, 0.25)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(61, 117, 236, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(104, 158, 242, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}; 