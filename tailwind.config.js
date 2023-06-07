/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", ...fontFamily.sans],
        inconsolata: ["'Inconsolata'", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
