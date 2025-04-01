/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Define specific model colors using hex codes
        chatgpt: '#10A37F', // Formerly emerald
        claude: '#FF6F61',  // Formerly orange
        gemini: '#4285F4',  // Formerly blue
        perplexity: '#1EB8CD', // Formerly purple
      },
    },
  },
  plugins: [],
};
