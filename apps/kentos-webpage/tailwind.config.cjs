/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      color: {
        'website-background': {
          default: '#F6F6F6',
        },
      },
      fill: (theme) => ({
        custom: '#ffff',
      }),
      zIndex: {
        60: '60',
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
