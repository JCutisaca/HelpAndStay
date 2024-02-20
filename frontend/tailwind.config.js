/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'unbounded': ['Unbounded'],
      'monserrat': ['"Montserrat", sans-serif']
    },
    inset: {
      'fixed': '-0.4rem',
    },
    gridTemplateColumns: {
      '16': 'repeat(16, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
      '14': 'repeat(14, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
    },
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
    plugins: [],
  };
