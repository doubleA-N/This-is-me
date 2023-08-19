/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'bottom-to-top': {
          '0%': { transform: 'translateY(600px)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'bottom-to-top': 'bottom-to-top 1.5s ease-in-out'
      }
    },
  },
  plugins: [],
}
