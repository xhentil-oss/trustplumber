/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#0F2744',
          50: '#F1F5F9',
          100: '#E2E8F0',
          200: '#CBD5E1',
          500: '#334155',
          700: '#1E293B',
          900: '#0F2744',
        },
        accent: {
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          teal: '#0F766E',
          'teal-hover': '#0D5F5A',
        },
        text: {
          primary: '#0F2744',
          secondary: '#334155',
          muted: '#64748B',
          inverse: '#FFFFFF',
        },
        emergency: {
          DEFAULT: '#DC2626',
          hover: '#B91C1C',
        },
        success: '#16A34A',
        warning: '#D97706',
        border: {
          DEFAULT: '#E2E8F0',
          strong: '#CBD5E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['clamp(1.875rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.8125rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'section': '5rem',
        'section-lg': '7rem',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(15,39,68,0.04), 0 1px 3px rgba(15,39,68,0.06)',
        'card-hover': '0 4px 6px rgba(15,39,68,0.05), 0 10px 20px rgba(15,39,68,0.08)',
        'elevated': '0 10px 30px rgba(15,39,68,0.08)',
        'sticky-cta': '0 -2px 12px rgba(15,39,68,0.10)',
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
      maxWidth: {
        'prose-wide': '72ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
