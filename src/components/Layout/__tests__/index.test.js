import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { routes } from '../../../routes';

import Layout from '~components/Layout';

describe('<Layout />', () => {
  it('should render an <Layout> tag', () => {
    const renderedComponent = shallow(<Layout route={{routes}} />);
    expect(typeof renderedComponent.type()).toEqual(typeof styled.div``);
  });
});
