/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0f172a',
        muted: '#64748b',
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(37, 99, 235, 0.18)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.10)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.18), transparent 34%), radial-gradient(circle at 85% 10%, rgba(14, 165, 233, 0.14), transparent 30%), linear-gradient(135deg, #ffffff 0%, #f8fafc 45%, #eff6ff 100%)',
      },
    },
  },
  plugins: [],
}