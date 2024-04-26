/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        flowbite.content(),

    ],
    theme: {
        extend: {},
        fontFamily: {
            koulen: ['Koulen', 'sans-serif'],
        },
    },
    plugins: [
        flowbite.plugin(),
    ],
}