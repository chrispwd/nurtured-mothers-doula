/** @type {import('tailwindcss').Config} */

// TODO :: Configure primary / secondary / tertiary colors
// TODO :: Choose a prose font
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./pages/**/*.{html,js}",
        './index.html'
    ],
    theme: {
        fontFamily: {
            'header': ["Fraunces", "serif"],
            'body': ["Fraunces", "serif"]
        },
        colors: {
            'foreground-default': '#3A3D40',
            'foreground-light': '#C9CDCF',
            'foreground-dark': '0a0a0b',
            'background-light': '#FCF4F1',
            'background-default': '#F8E9E2',
            'background-dark': '#ebc1ad',
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
