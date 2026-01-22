import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: '#A8E6D9',
        'mint-dark': '#7DD4C1',
        'mint-light': '#D1F0EA',
        'light-gray': '#F5F5F5',
        'gray-border': '#E8E8E8',
        'gray-text': '#888888',
        'dark-text': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        container: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
