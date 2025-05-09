// tailwind.config.js
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          "navy-800": "#1C2526", // HEX color to replace oklch
          "pink-500": "#EC4899", // HEX color to replace oklch
        },
      },
    },
  };