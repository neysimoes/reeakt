import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';

import Docs from '~pages/Docs';

describe('<Docs />', () => {
  it('should render an <Docs> tag', () => {
    const renderedComponent = shallow(<Docs />);
    expect(typeof renderedComponent.type()).toEqual(typeof styled.div``);
  });
});
