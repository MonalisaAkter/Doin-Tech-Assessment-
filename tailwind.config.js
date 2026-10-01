/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { blue: { 800: '#173A8F', 900: '#102D70' }, lime: { 400: '#B9F227', 500: '#A7DD16' }, snow: '#F8FAFC', black: { 700: '#4B5563' } },
    fontFamily: { poppins: ['Poppins', 'sans-serif'], satoshi: ['DM Sans', 'sans-serif'] },
    fontSize: { 'heading-xs': ['20px', { lineHeight: '1.3' }], 'heading-s': ['36px', { lineHeight: '1.2' }], 'heading-m': ['48px', { lineHeight: '1.2' }], 'body-xs': ['12px', { lineHeight: '1.4' }], 'body-s': ['14px', { lineHeight: '1.5' }], 'body-m': ['16px', { lineHeight: '1.6' }], 'body-l': ['18px', { lineHeight: '1.6' }], 'label-s': ['13px', { lineHeight: '1.4' }], 'label-m': ['14px', { lineHeight: '1.4' }], 'label-l': ['16px', { lineHeight: '1.4' }], 'display-xs': ['36px', { lineHeight: '1.2' }] },
    boxShadow: { 'card-a': '0 16px 40px rgba(15, 23, 42, 0.14)' },
    backgroundImage: { grid: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)' },
    backgroundSize: { grid: '32px 32px' },
  } },
  plugins: [],
};
