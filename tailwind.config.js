module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-out': 'fade-out 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-in 5s forwards'
      },
      fontFamily: {
        'title': ['"Bungee", "cursive"'],
      },
      keyframes: {
        'fade-out': {
          '100%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          },
        },
        'fade-in': {
          '100%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), '@tailwindcss/aspect-ratio'],
  daisyui: {
    styled: true,
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
