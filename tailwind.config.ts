import type { Config } from "tailwindcss";

export default {
darkMode: "class", // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'scaleUp': "scaleUp 0.5s ease-in-out",
        'slideInLeft': "slideInLeft 3s ease-in-out",
        'trans-right': "trans-right 1s ease-in-out",
        'slideInRight': "slideInRight 0.5s ease-out",
        'bounceIn': "bounceIn 0.6s ease-in-out",
        'spinSlow': "spinSlow 3s linear infinite",
        'wiggle': "wiggle 0.5s ease-in-out infinite",
        'fadeIn': "fadeIn 1s ease-in-out",
        'fadeOut': "fadeOut 1s ease-in-out",
        'zoomIn': "zoomIn 0.5s ease-in-out",
        'zoomOut': "zoomOut 0.5s ease-in-out",
        'slideUp': "slideUp 0.5s ease-out",
        'slideDown': "slideDown 0.5s ease-out",
        'heartbeat': "heartbeat 1.5s ease-in-out infinite",
        'shake': "shake 0.5s ease-in-out infinite",
        'flip': "flip 1s ease-in-out",
        'rotateY': "rotateY 1s ease-in-out",
        'swing': "swing 1s ease-in-out infinite",
        'blink': "blink 1s step-start infinite",
        'rollIn': "rollIn 0.8s ease-in-out",
        'rollOut': "rollOut 0.8s ease-in-out",
        'rubberBand': "rubberBand 0.6s ease-in-out",
        'jello': "jello 1s ease-in-out",
        'flash': "flash 1.5s ease-in-out infinite",
        'slideExpand': "slideExpand 0.8s ease-in-out",
      },
      keyframes: {
        'trans-right': {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        'slideInLeft': {
              "100%": { transform: "translateX(100%)", opacity: "1" },
              // "0%": { transform: "translateX(-100%)", opacity: "1" },
        },
        'scaleUp': {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        'slideInRight': {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        'bounceIn': {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        'spinSlow': {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        'wiggle': {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        'fadeIn': {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        'fadeOut': {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        'zoomIn': {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        'zoomOut': {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.5)", opacity: "0" },
        },
        'slideUp': {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        'slideDown': {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        'heartbeat': {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        'shake': {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        'flip': {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        'rotateY': {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        'swing': {
          "20%": { transform: "rotate(15deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "60%": { transform: "rotate(5deg)" },
          "80%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        'blink': {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        'rollIn': {
          "0%": { transform: "translateX(-100%) rotate(-120deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
        },
        'rollOut': {
          "0%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateX(100%) rotate(120deg)", opacity: "0" },
        },
        'rubberBand': {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scaleX(1.25) scaleY(0.75)" },
          "40%": { transform: "scaleX(0.75) scaleY(1.25)" },
          "50%": { transform: "scaleX(1.15) scaleY(0.85)" },
          "65%": { transform: "scaleX(0.95) scaleY(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        'jello': {
          "0%, 100%": { transform: "scale(1)" },
          "30%": { transform: "skewX(-15deg) skewY(-15deg)" },
          "40%": { transform: "skewX(15deg) skewY(15deg)" },
          "50%": { transform: "skewX(-10deg) skewY(-10deg)" },
          "60%": { transform: "skewX(5deg) skewY(5deg)" },
        },
        'flash': {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        'slideExpand': {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },

      },

            

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
