import React from 'react';
import { shallow } from 'enzyme';

import Home from '~pages/Home';

describe('<Home />', () => {
  it('should render an <Home> tag', () => {
    const renderedComponent = shallow(<Home />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
