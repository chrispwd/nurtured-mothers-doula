/** @type {import('tailwindcss').Config} */

// TODO :: Configure primary / secondary / tertiary colors
// TODO :: Choose a prose font
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        './index.html'
    ],
    theme: {
        fontFamily: {
            'header': ["Fraunces", "serif"],
        },
        colors: {
            'foreground': {
                'light': '#C9CDCF',
                DEFAULT: '#1d1f21',
                'dark': '#0A0A0B',
            },
            'background': {
                'light': '#FAF6F0',
                DEFAULT: '#F8E9E2',
                'dark': '#e6d2b2',
            },
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
        },
        extend: {},
    },
    plugins: [],
}
