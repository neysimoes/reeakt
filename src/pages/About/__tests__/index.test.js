import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';

import About from '~pages/About';

describe('<About />', () => {
  it('should render an <About> tag', () => {
    const renderedComponent = shallow(<About />);
    expect(typeof renderedComponent.type()).toEqual(typeof styled.div``);
  });
});
