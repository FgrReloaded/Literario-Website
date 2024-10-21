const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee var(--marquee-duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--marquee-duration) linear infinite',
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(-50%)' }
        },
        "marquee-vertical": {
          '100%': { transform: 'translateY(-50%)' }
        }
      }
    }
  }
}