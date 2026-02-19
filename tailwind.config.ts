import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                cyber: {
                    blue: "#0ea5e9", // Electric Blue
                    dark: "#0a0a0a", // Deep Background
                    purple: "#8b5cf6", // Neon Purple
                    green: "#10b981", // Electric Green
                    orange: "#f97316", // Alert Orange
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "cyber-grid": "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "from": { boxShadow: "0 0 10px #0ea5e9, 0 0 20px #0ea5e9" },
                    "to": { boxShadow: "0 0 20px #10b981, 0 0 30px #10b981" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
