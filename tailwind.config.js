const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['lucide']),
    }),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['emerald', 'black'],
    darkTheme: 'black',
  },
}
