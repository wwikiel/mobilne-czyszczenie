/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'bg-home': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/lib/assets/bg-home.jpg')",
        'bg-header': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/lib/assets/header.jpg')",
      }),
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}

