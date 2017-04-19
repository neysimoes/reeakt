import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '~pages/NotFound';

describe('<NotFound />', () => {
  it('should render an <NotFound> tag', () => {
    const renderedComponent = shallow(<NotFound />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
