/** @types {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { customColors } = require('./src/styles/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: '1300px',
    },
    extend: {
      colors: customColors,
      fontSize: {
        hero: [
          '2.6rem',
          {
            lineHeight: '3.9rem',
            latterSpacing: '0',
            fontWeight: '700',
          },
        ],
        heading1: [
          '2rem',
          {
            lineHeight: '3rem',
            latterSpacing: '-0.6px',
            fontWeight: '700',
          },
        ],
        heading2: [
          '1.8rem',
          {
            lineHeight: '2.7rem',
            latterSpacing: '-0.54px',
            fontWeight: '700',
          },
        ],
        heading3: [
          '1.6rem',
          {
            lineHeight: '2rem',
            fontWeight: '700',
          },
        ],
        subheading: [
          '1.4rem',
          {
            lineHeight: '2.1rem',
            fontWeight: '700',
          },
        ],
        body5: [
          '1.6rem',
          {
            lineHeight: '2.4rem',
            latterSpacing: '-0.48px',
            fontWeight: '500',
          },
        ],
        body4: [
          '1.4rem',
          {
            lineHeight: '2.1rem',
            latterSpacing: '-0.42px',
            fontWeight: '500',
          },
        ],
        body3: [
          '1.4rem',
          {
            lineHeight: '2.1rem',
            latterSpacing: '-0.42px',
            fontWeight: '400',
          },
        ],
        body2: [
          '1.2rem',
          {
            lineHeight: '1.8rem',
            latterSpacing: '-0.36px',
            fontWeight: '500',
          },
        ],
        body1: [
          '1.2rem',
          {
            lineHeight: '1.8rem',
            latterSpacing: '-0.36px',
            fontWeight: '400',
          },
        ],
        caption: [
          '1rem',
          {
            lineHeight: '1.5rem',
            latterSpacing: '-0.3px',
            fontWeight: '500',
          },
        ],
      },
      boxShadow: {
        feed: '0 8px 20px 0 rgba(34, 34, 34, 0.10)',
        header: '0 0.33000001311302185px 0 0 rgba(34, 34, 34, 0.30)',
        dropdown: '0 4px 16px 0 rgba(42, 45, 55, 0.12)',
      },
      backgroundImage: {
        'with-character': "url('src/images/background.png')",
        'without-character': "url('src/images/background_nocharVer.png')",
      },
      fontFamily: {
        pretendard: ['Pretendard', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
