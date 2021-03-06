import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
      /* bold */
      @font-face {
        font-family: 'TT commons';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('../../public/fonts/ttcommons/TT-Commons-Bold.otf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* light */
      @font-face {
        font-family: 'TT commons';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('../../public/fonts/ttcommons/TT-Commons-Light.otf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* extralightitalic */
      @font-face {
        font-family: 'TT commons';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('../../public/fonts/ttcommons/TT-Commons-ExtraLight-Italic.otf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      `}
    />
)


export default Fonts;