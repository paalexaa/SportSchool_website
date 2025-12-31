/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        
        colors: {
            'white': '#FFFFFF',
            'black': '#242424',
            'grey': '#E9EFF1',
            'dark-grey': '#6B6B6B',
            'transparent': 'transparent',
            'teal': '#005960',
            'teal-light': '#00969b'
        },

        fontSize: {
            'sm': '12px',
            'base': '14px',
            'xl': '16px',
            '2xl': '20px',
            '3xl': '28px',
            '4xl': '38px',
            '5xl': '50px',
        },

        extend: {
            fontFamily: {
              montserrat: ["'Montserrat'", "sans-serif"]
            },
        },

    },
    plugins: [],
};