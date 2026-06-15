/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // === Sistema "Operational Navy — Dark Trust" (marca kantech SOLUTIONS) ===
        // Superficies derivadas del navy de marca #263D66
        surface: {
          0: '#0E1A33', // canvas
          1: '#152441', // secciones elevadas / inputs
          2: '#1C3052', // cards
          3: '#274270', // raised / tier recomendado / formulario
        },
        border:  '#33507D',
        text:    '#EEF3FA',
        muted:   '#A4B6D4', // texto secundario, WCAG AA sobre cards
        primary: {
          DEFAULT:   '#6AC3C6', // teal de marca = ÚNICO color de acción (CTAs)
          hover:     '#86D6D9',
          container: '#6AC3C61A', // teal/10
        },
        accent:  '#6AC3C6', // mismo teal (acción/realce)
        success: '#2FD79F', // verde esmeralda, RESERVADO a métricas/ROI/prueba (distinto del teal)
        violet:  '#2E7E9E', // navy-acero: parada media del gradiente de marca (ya no morado)

        // === Tokens k- (compatibilidad con Layout JS + componentes legacy) ===
        k: {
          bg:       '#0E1A33',
          surface:  '#152441',
          card:     '#1C3052',
          border:   '#33507D',
          blue:     '#6AC3C6', // era el primary → ahora el teal de acción
          'blue-h': '#86D6D9',
          cyan:     '#6AC3C6',
          purple:   '#2E7E9E',
          green:    '#2FD79F',
          text:     '#EEF3FA',
          muted:    '#A4B6D4',
        },
      },
      fontFamily: {
        sans:     ['Inter', 'system-ui', 'sans-serif'],
        body:     ['Inter', 'system-ui', 'sans-serif'],
        // Source Code Pro (mono oficial de marca) para display/titulares/cifras/labels
        display:  ['"Source Code Pro"', 'ui-monospace', 'monospace'],
        headline: ['"Source Code Pro"', 'ui-monospace', 'monospace'],
        mono:     ['"Source Code Pro"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm:  '0.5rem',  // 8px
        md:  '0.75rem', // 12px
        lg:  '1rem',    // 16px
        xl:  '1.5rem',  // 24px
        '2xl': '2rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(110deg, #263D66 0%, #2E7E9E 55%, #6AC3C6 100%)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(47,215,159,0.45)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(47,215,159,0)' },
        },
      },
    },
  },
  plugins: [],
};
