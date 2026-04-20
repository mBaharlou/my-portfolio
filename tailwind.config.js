/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#06080d',
        navy: '#10233f',
        'navy-soft': '#17325c',
        silver: '#cfd6e4',
        mist: '#eef3fb',
        slateglass: 'rgba(207, 214, 228, 0.08)',
      },
      fontFamily: {
        sans: ['"Rubik"', 'system-ui', 'sans-serif'],
        display: ['"Rubik"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(8, 15, 30, 0.35)',
        card: '0 18px 60px rgba(5, 12, 24, 0.22)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at top right, rgba(16,35,63,0.55), transparent 35%), linear-gradient(135deg, rgba(255,255,255,0.05), rgba(16,35,63,0.14))',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
