"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preset = {
    content: [],
    theme: {
        fontFamily: {
            sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        },
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#fff",
            success: {
                light: '#a7f3d0',
                DEFAULT: '#34d399',
                dark: '#059669',
            },
            primary: {
                light: '#93c5fd',
                DEFAULT: '#3b82f6',
                dark: '#1d4ed8',
            },
            secondary: {
                light: '#fbcfe8',
                DEFAULT: '#ec4899',
                dark: '#be185d',
            },
            tertiary: {
                light: '#e9d5ff',
                DEFAULT: '#8b5cf6',
                dark: '#5b21b6',
            },
            danger: {
                light: '#fecaca',
                DEFAULT: '#f87171',
                dark: '#b91c1c',
            },
            warning: {
                light: '#fef3c7',
                DEFAULT: '#facc15',
                dark: '#ca8a04',
            },
            info: {
                light: '#bae6fd',
                DEFAULT: '#0ea5e9',
                dark: '#0369a1',
            },
            gray: {
                darkest: '#1f2937',
                dark: '#4b5563',
                DEFAULT: '#9ca3af',
                light: '#d1d5db',
                lightest: '#f3f4f6',
            },
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px"
        },
        extend: {
            flexGrow: {
                2: '2',
                3: '3',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
                rotate: {
                    "0%, 100%": {
                        transform: "rotate(0deg) scale(1.2)",
                    },
                    "50%": {
                        transform: "scale(0.9) rotate(180deg)",
                    }
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
                slideIn: 'slideIn 0.5s ease-out',
                bounce: 'bounce 1s infinite',
                spin: 'spin 1s linear infinite',
                'waving-hand': 'wave 2s linear infinite',
                rotate: "rotate 4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite",
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
};
exports.default = preset;
