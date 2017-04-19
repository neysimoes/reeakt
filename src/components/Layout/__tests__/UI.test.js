import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import { Wrapper, Nav, NavItem, NavLinkStyled, Logo, Content } from '~components/Layout/UI';

describe('<Layout /> UI', () => {
  it('should render an <Wrapper> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render an <Nav> tag', () => {
    const renderedComponent = shallow(<Nav />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should render an <NavItem> tag', () => {
    const renderedComponent = shallow(<NavItem />);
    expect(renderedComponent.type()).toEqual('li');
  });

  it('should render an <NavLinkStyled> tag', () => {
    const renderedComponent = shallow(<NavLinkStyled to="/" />);
    expect(renderedComponent.type()).toEqual(NavLink);
  });

  it('should render an <Logo> tag', () => {
    const renderedComponent = shallow(<Logo />);
    expect(renderedComponent.type()).toEqual('img');
  });

  it('should render an <Content> tag', () => {
    const renderedComponent = shallow(<Content />);
    expect(renderedComponent.type()).toEqual('section');
  });
});
