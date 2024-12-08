import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  darkMode: ["class"],
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens: {
      ...screens,
      ultra: "160rem",
    }, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      colors: {
        background: "hsl(var(--background))",
        backgroundAlt: "hsl(var(--background-alt))",
        headingForeground: "hsl(var(--heading-foreground))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        quaternary: {
          DEFAULT: "hsl(var(--quaternary))",
          foreground: "hsl(var(--quaternary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        question: {
          DEFAULT: "hsl(var(--question))",
          heading: "hsl(var(--question-heading))",
          foreground: "hsl(var(--question-foreground))",
        },
        alt: {
          DEFAULT: "hsl(var(--alt))",
          foreground: "hsl(var(--alt-foreground))",
          border: "hsl(var(--alt-border))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        questionInput: {
          DEFAULT: "hsl(var(--question-input))",
          foreground: "hsl(var(--question-input-foreground))",
          border: "hsl(var(--question-input-border))",
          description: "hsl(var(--question-input-description))",
        },
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        serif: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [fluid],
} satisfies Config;
