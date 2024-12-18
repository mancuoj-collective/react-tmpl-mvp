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
    themes: ['corporate', 'black'],
    darkTheme: 'black',
  },
  darkMode: ['selector', '[data-theme="black"]'],
}
