import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import { NavLinkStyled, ImageList, ImageStyled } from '~components/Layout/UI';

describe('<Layout /> UI', () => {
  it('should render an <NavLinkStyled> tag', () => {
    const renderedComponent = shallow(<NavLinkStyled to="/" />);
    expect(renderedComponent.type()).toEqual(NavLink);
  });

  it('should render an <ImageList> tag', () => {
    const renderedComponent = shallow(<ImageList />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render an <ImageStyled> tag', () => {
    const renderedComponent = shallow(<ImageStyled />);
    expect(renderedComponent.type()).toEqual('img');
  });
});
