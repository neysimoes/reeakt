import React from 'react';
import { shallow } from 'enzyme';
import { Slogan, Demos, Demo, DemoLabel, DemoImage } from '~pages/Home/UI';

describe('<Home /> UI', () => {
  it('should render an <Slogan> tag', () => {
    const renderedComponent = shallow(<Slogan />);
    expect(renderedComponent.type()).toEqual('p');
  });

  it('should render an <Demos> tag', () => {
    const renderedComponent = shallow(<Demos />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render an <Demo> tag', () => {
    const renderedComponent = shallow(<Demo />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render an <DemoLabel> tag', () => {
    const renderedComponent = shallow(<DemoLabel />);
    expect(renderedComponent.type()).toEqual('span');
  });

  it('should render an <DemoImage> tag', () => {
    const renderedComponent = shallow(<DemoImage />);
    expect(renderedComponent.type()).toEqual('img');
  });
});
