import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: red;
  text-decoration: none;
  &.active {
    color: paleturquoise;
  }
`;

export const ImageList = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const ImageStyled = styled.img`
  width: 20%;
  display: block;
`;
