/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        // Warm & earthy TransMau palette (green-led, honey sparingly)
        forest: {
          DEFAULT: "#256D3A", // primary green (slightly warmer than logo green)
          dark: "#1C542D", // hover
          deep: "#123C20", // deepest
          soft: "#EAF1EA", // tint bg
        },
        leaf: "#5B8A4E", // muted secondary green
        honey: {
          DEFAULT: "#E0A213", // warm gold (used sparingly)
          soft: "#F6E6C2", // pale honey tint
        },
        clay: "#B4654A", // warm earthy accent (terracotta)
        // Warm neutrals
        sand: "#FBF8F2", // page background (warm off-white)
        linen: "#F4EEE3", // warm card/alt background
        stone: "#E7DFD1", // warm border/line
        bark: "#3A342B", // primary warm text (dark brown-charcoal)
        taupe: "#7A7264", // muted warm text
        // shadcn semantic tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        heading: ["Fraunces", "Georgia", "serif"], // warm editorial serif for headings
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      // Standard, readable type scale (average website sizing)
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.35rem" }], // 14px body-small
        base: ["1rem", { lineHeight: "1.65rem" }], // 16px body
        lg: ["1.125rem", { lineHeight: "1.8rem" }], // 18px lead
        xl: ["1.375rem", { lineHeight: "1.8rem" }], // 22px
        "2xl": ["1.75rem", { lineHeight: "2.1rem" }], // 28px
        "3xl": ["2.125rem", { lineHeight: "2.45rem" }], // 34px section heading
        "4xl": ["2.75rem", { lineHeight: "3rem" }], // 44px
        "5xl": ["3.25rem", { lineHeight: "3.4rem" }], // 52px hero
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      spacing: {
        4.5: "1.125rem", // 18px — icon sizing
        13: "3.25rem",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 6px 24px -12px rgba(58, 52, 43, 0.18)",
        card: "0 10px 30px -16px rgba(58, 52, 43, 0.22)",
        glow: "0 18px 44px -22px rgba(37, 109, 58, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
