/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '11px',
    },
    extend: {
      colors: {
        "primary": {
          "Strong-cyan": "hsl(172, 67%, 45%)",
        },
        "neutral": {
          "Very-dark-cyan": "hsl(183, 100%, 15%)",
          "Dark-grayish-cyan": "hsl(186, 14%, 43%)",
          "Grayish-cyan": "hsl(184, 14%, 56%)",
          "Light-grayish-cyan": "hsl(185, 41%, 84%)",
          "Very-light-grayish-cyan": "hsl(189, 41%, 97%)",
          "White": "hsl(0, 0%, 100%)",
        }
      }
    },
  },
  plugins: [],
}
