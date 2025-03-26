import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "var(--font-nunito), sans-serif",
        montserrat: "var(--font-montserrat), sans-serif",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "99rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-orange": "#FF5722",
        "custom-black": "#1A1A1A",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate, addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
