import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundTitle } from '~pages/NotFound/UI';

describe('<NotFound /> UI', () => {
  it('should render an <NotFoundTitle> tag', () => {
    const renderedComponent = shallow(<NotFoundTitle />);
    expect(renderedComponent.type()).toEqual('h1');
  });
});
