/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // === Sistema "Quiet Premium / Operational Aurora" ===
        // Superficies (escala de elevación de 4 pasos)
        surface: {
          0: '#080B16', // canvas
          1: '#0F1525', // secciones elevadas / inputs
          2: '#161E33', // cards
          3: '#1E2942', // raised / tier recomendado
        },
        border:  '#243049',
        text:    '#F4F6FF',
        muted:   '#A9B6CC', // subido a WCAG AA
        primary: {
          DEFAULT:   '#1E3BFF',
          hover:     '#4D6BFF',
          container: '#1E3BFF1A', // primary/10
        },
        accent:  '#00D4FF',
        success: '#00E887', // RESERVADO para prueba/ROI/éxito
        violet:  '#6C2FD9', // solo dentro del gradiente de marca

        // === Tokens k- (compatibilidad con Layout JS + componentes legacy) ===
        k: {
          bg:       '#080B16',
          surface:  '#0F1525',
          card:     '#161E33',
          border:   '#243049',
          blue:     '#1E3BFF',
          'blue-h': '#4D6BFF',
          cyan:     '#00D4FF',
          purple:   '#6C2FD9',
          green:    '#00E887',
          text:     '#F4F6FF',
          muted:    '#A9B6CC',
        },
      },
      fontFamily: {
        sans:     ['Inter', 'system-ui', 'sans-serif'],
        body:     ['Inter', 'system-ui', 'sans-serif'],
        display:  ['Space Grotesk', 'Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        sm:  '0.5rem',  // 8px
        md:  '0.75rem', // 12px
        lg:  '1rem',    // 16px
        xl:  '1.5rem',  // 24px
        '2xl': '2rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(110deg, #1E3BFF, #00D4FF, #6C2FD9)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out both',
        'fade-in':    'fadeIn 0.5s ease-out both',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'breathe':    'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        breathe: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,232,135,0.45)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(0,232,135,0)' },
        },
      },
    },
  },
  plugins: [],
};
