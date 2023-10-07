import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'principal': ['"M PLUS 2"',"sans-serif"]
      },
      colors: {
        'principal-blue':'#47576E',
        'active-principal-blue':'#50617A',
        'hover-principal-blue':'#7994BA',
        'button-green': '#5E8268',
        'hover-button-green': '#95CFA5',
        'active-button-green': '#678F72',
        'button-red': '#AF4545',
        'hover-button-red': '#95CFA5',
        'active-button-red': '#678F72',
      }
    }
  },
  plugins: [],
}
export default config;
