module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Noto Sans JP', 'Noto Sans', 'Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};



