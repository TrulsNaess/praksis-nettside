/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "thon-red": "#c8102e",
                "thon-dark": "#8b0e23",
                "thon-light": "#f5e6e8",
            },
        },
    },
    plugins: [],
};
