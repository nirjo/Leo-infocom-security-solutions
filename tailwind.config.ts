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
                amazon: {
                    blue: "#232F3E", // Header/Footer background
                    light: "#37475A", // Lighter blue for sub-header
                    orange: "#FF9900", // Buttons/Accents
                    yellow: "#FFD814", // Secondary buttons
                },
                page: {
                    bg: "#EAEDED", // Common Amazon light gray bg
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
            },
            boxShadow: {
                'amazon': '0 0 10px rgba(0,0,0,0.1)',
            }
        },
    },
    plugins: [],
};
export default config;
