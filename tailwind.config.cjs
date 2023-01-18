/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [require('@tailwindcss/typography')]
}
