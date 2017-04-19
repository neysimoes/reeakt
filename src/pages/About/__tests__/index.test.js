import React from 'react';
import { shallow } from 'enzyme';

import About from '~pages/About';

describe('<About />', () => {
  it('should render an <About> tag', () => {
    const renderedComponent = shallow(<About />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
