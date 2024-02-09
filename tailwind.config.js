/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#292E97",
        "blue": "#2BA6DF",
        "crl-white-1": "#F8FAFC",
        "clr-grey-1": "#30D8FB",
        "text-blue": "#253FA4",
        "text-blue-2": "#0055A7",
        "crl-green": "#7ad03a",
        "clr-red": "#a00",
        "crl-orange": "#ffba00",
        "crl-blue-1": "#2ea2cc",
        "crl-primary": "#a46497",
        "crl-primary-text": "white",
        "crl-secondary": "#ebe9eb",
        "crl-secondary-text": "#515151",
        "crl-highlight": "#77a464",
        "crl-subtext": "#767676",
      },
      spacing: {
        "8xl": "96rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        sm: { max: "639px" },
        md: { max: "767px" },
        lg: { max: "1023px" },
        xl: { max: "1279px" },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
