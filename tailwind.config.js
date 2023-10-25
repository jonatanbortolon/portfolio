/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe WPC"', '"Segoe UI"', 'sans-serif'],
        'jet-brains-mono': ['JetBrainsMonoNerdFontMono'],
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 700ms steps(2) infinite',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
