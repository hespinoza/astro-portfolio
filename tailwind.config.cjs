module.exports = {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // azul oscuro
        accent: '#38bdf8', // celeste
        background: '#f8fafc', // gris muy claro
        muted: '#64748b', // gris azulado
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
  