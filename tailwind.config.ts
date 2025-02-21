import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-bg': '#d1d5db',
      },
      screens: {
        'xs': '580px',
        'md-large': '880',
      },
      animation: {
        'shake-spin-back': 'shakeSpinBack 2s ease-in-out',
        'shake-spin-forward': 'shakeSpinForward 2s ease-in-out',
        'scale-me': 'scaleMe 1s ease-in-out',
        'slide-left': 'slideLeft 9s ease-in-out 4s infinite',
        'slide-right': 'slideRight 9.2s ease-in-out 4s infinite',
        'tilt-inf': 'tiltInf 5s ease 2.5s infinite'
      },
      keyframes: {
        shakeSpinBack: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(-10deg)', // shake back
          },
          '20%': {
            transform: 'rotate(10deg)', // shake forward
          },
          '30%': {
            transform: 'rotate(-10deg)',
          },
          '40%': {
            transform: 'rotate(10deg)',
          },
          '50%': {
            transform: 'rotate(360deg)',
          },
          '60%': {
            transform: 'rotate(720deg)',
          },
          '70%': {
            transform: 'rotate(1080deg)',
          },
          '80%': {
            transform: 'rotate(-10deg)',
          },
          '90%': {
            transform: 'rotate(10deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        shakeSpinForward: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(10deg)', // shake back
          },
          '20%': {
            transform: 'rotate(-10deg)', // shake forward
          },
          '30%': {
            transform: 'rotate(10deg)',
          },
          '40%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(-360deg)',
          },
          '60%': {
            transform: 'rotate(-720deg)',
          },
          '70%': {
            transform: 'rotate(-1080deg)',
          },
          '80%': {
            transform: 'rotate(10deg)',
          },
          '90%': {
            transform: 'rotate(-10deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        scaleMe: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '20%': {
            transform: 'rotate(-2deg) scale(1.01)',
          },
          '40%': {
            transform: 'rotate(2deg) scale(1)',
          },
          '60%': {
            transform: 'rotate(-2deg) scale(1.02)',
          }, 
          '80%': {
            transform: 'rotate(2deg) scale(1.01)',
          },
          '100%': {
            transform: 'rotate(0deg) scale(1)',
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(0)',   // Start at the center
            opacity: '1',
          },
          '20%': {
            transform: 'translateX(-50vw)',  // Slide to the left
            opacity: '0',
          },
          '40%': {
            transform: 'translateX(-50vw)',  // Short break while at the left
            opacity: '0',
          },
          '70%': {
            transform: 'translateX(0)',   // Slide back to the center
            opacity: '1',
          },
          '80%': {
            transform: 'translateX(0)',   // Longer pause at the center
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',   // Stay centered
            opacity: '1',
          },
        },
        slideRight: {
          '0%': {
            transform: 'translateX(0)',  // Start at the center
            opacity: '1',
          },
          '22%': {
            transform: 'translateX(50vw)',  // Slide to the right
            opacity: '0',
          },
          '42%': {
            transform: 'translateX(50vw)',  // Short break while at the right
            opacity: '0',
          },
          '70%': {
            transform: 'translateX(0)',   // Slide back to the center
            opacity: '1',
          },
          '80%': {
            transform: 'translateX(0)',   // Longer pause at the center
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',   // Stay centered
            opacity: '1',
          },
        },
        tiltInf: {
          '0%': {
            transform: 'rotate(0deg) ',
          },
          '20%': {
            transform: 'rotate(-2deg) ',
          },
          '40%': {
            transform: 'rotate(2deg) ',
          },
          '60%': {
            transform: 'rotate(-2deg) ',
          }, 
          '80%': {
            transform: 'rotate(2deg) ',
          },
          '100%': {
            transform: 'rotate(0deg) ',
          },
        },
      },
      
    },
  },
  plugins: [],
} satisfies Config;

