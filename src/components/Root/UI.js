import { injectGlobal } from 'styled-components';
import testFontFaceWOFF2 from '~assets/fonts/Montserrat/Montserrat-Regular.woff2';
import testFontFaceWOFF from '~assets/fonts/Montserrat/Montserrat-Regular.woff';
import testFontFaceSVG from '~assets/fonts/Montserrat/Montserrat-Regular.svg';

injectGlobal`
  @font-face{
    font-family: "Montserrat-Regular";
    src: url(${testFontFaceWOFF2}) format("woff2"),
         url(${testFontFaceWOFF}) format("woff"),
         url(${testFontFaceSVG}#Montserrat-Regular) format("svg");

    font-style: 'normal';
    font-weight: 'normal';
  }

  body {
    font-family: Montserrat-Regular;
  }
`;
