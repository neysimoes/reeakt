import styled, { injectGlobal } from 'styled-components';
import { NavLink } from 'react-router-dom';
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

  *,:after,:before{box-sizing:inherit}html{box-sizing:border-box}
  *{user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}
  [contenteditable],input[type]{user-select:text}body,h1,h2,h3,h4,h5,h6,p{margin:0;font-size:1rem;font-weight:400}
  a{text-decoration:none;color:inherit}b{font-weight:400}em,i{font-style:normal}a:focus,input:focus{outline:0}
  fieldset,input{appearance:none;border:0;padding:0;margin:0;min-width:0;font-size:1rem;font-family:inherit}
  input::-ms-clear{display:none}input[type=number]{-moz-appearance:textfield}
  input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{appearance:none}
  svg{display:inline-flex}img{display:block}
  body{-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: Montserrat-Regular;}
`;

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const Nav = styled.ul`
  padding: 0;
  margin: 0 0 40px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  display: block;
  flex: 1;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid transparent;
  font-size: 18px;
  &.active {
    border-bottom: 1px solid #000;
  }
`;

export const Logo = styled.img`
  margin-bottom: 40px;
  width: 100%;
`;
