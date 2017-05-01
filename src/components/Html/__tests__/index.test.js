import React from 'react';
import Helmet from 'react-helmet';
import { shallow } from 'enzyme';

import Html from '~components/Html';

describe('<Html />', () => {
  it('should render an <Html> tag', () => {
    Helmet.canUseDOM = false;
    const renderedComponent = shallow(<Html component={<div />} assets={{ javascript: {main: '', vendor: '' }, styles: { main: '' }}} store={{ getState: () => true }} />);
    expect(renderedComponent.type()).toEqual('html');
  });
});

describe('<Html />', () => {
  it('should render an <Html> tag', () => {
    Helmet.canUseDOM = false;
    const renderedComponent = shallow(<Html assets={{ javascript: {main: '', vendor: '' }, styles: { main: '' }}} store={{ getState: () => true }} />);
    expect(renderedComponent.type()).toEqual('html');
  });
});
