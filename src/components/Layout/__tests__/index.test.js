import React from 'react';
import { shallow } from 'enzyme';
import { routes } from '../../../routes';

import Layout from '~components/Layout';

describe('<Layout />', () => {
  it('should render an <Layout> tag', () => {
    const renderedComponent = shallow(<Layout route={{routes}} />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
