import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'rgb(var(--color-navy-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-navy-light-rgb) / <alpha-value>)',
        },
        turquoise: {
          DEFAULT: 'rgb(var(--color-turquoise-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-turquoise-light-rgb) / <alpha-value>)',
        },
        purple: {
          DEFAULT: 'rgb(var(--color-purple-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-purple-light-rgb) / <alpha-value>)',
        },
        amber: {
          DEFAULT: 'rgb(var(--color-amber-rgb) / <alpha-value>)',
        },
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        ink: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
        muted: 'rgb(var(--color-muted-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Cairo', 'system-ui', 'sans-serif'],
        body: ['Tajawal', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        block: '1.25rem',
      },
      boxShadow: {
        card: '0 8px 24px -8px rgba(15, 27, 61, 0.14)',
        'card-hover': '0 16px 36px -12px rgba(15, 27, 61, 0.22)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config
