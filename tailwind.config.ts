import type { Config } from "tailwindcss";

import twForms from "@tailwindcss/forms";
import colors from "tailwindcss/colors";

import { dynamicTwClasses } from "./lib/twPlugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  plugins: [twForms],
  theme: {
    extend: {
      colors: {
        accent: dynamicTwClasses("accent", 40),
        danger: colors.red,

        secondary: dynamicTwClasses("secondary", 220),
        success: colors.green,
      },
    },
  },
};

export default config;
