/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sakura: {
          bg: '#fff0f4',
          panel: '#ffffff',
          ink: '#222222',
          muted: '#5a5a5a',
          brand: '#ff4d88',
          'brand-light': '#ffd6e7',
          border: '#f2e4ea',
          ok: '#11a97d',
          warn: '#ffb020',
          err: '#e5484d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        button: '12px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.04)',
        'card-hover': '0 16px 36px rgba(0,0,0,0.08)',
        brand: '0 12px 28px rgba(255, 77, 136, 0.24)',
        ring: '0 0 0 4px rgba(255, 77, 136, 0.24)',
      },
    },
  },
  plugins: [],
};
