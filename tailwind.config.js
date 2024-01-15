import typography from "@tailwindcss/typography"
import forms from "@tailwindcss/forms"
import aspectRatio from "@tailwindcss/aspect-ratio"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.vue", "./src/components/Calculator.vue"],
  theme: {
    extend: {},
  },
  plugins: [typography, forms, aspectRatio],
}

