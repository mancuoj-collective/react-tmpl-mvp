import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans Variable', 'sans-serif'],
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['lucide']),
      scale: 1.15,
    }),
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements',
    }),
    require('tailwindcss-motion'),
    require('tailwindcss-animate'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['emerald', 'black'],
    darkTheme: 'black',
  },
}
