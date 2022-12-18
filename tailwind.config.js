/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        screens: {
            xs: "200px",
            sm: "640px",
            md: "800px",
            lg: "1024px",
        },
    },
    daisyui: {
        themes: ["emerald"],
    },
    plugins: [require("daisyui")],
};