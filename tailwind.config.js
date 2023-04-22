// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './public/index.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height:{
                '1/10': '10%',
                '8/10': '80%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}