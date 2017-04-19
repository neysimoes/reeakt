import React from 'react';
import { shallow } from 'enzyme';
import { Wrapper, Content, AboutTitle, Techs, Tech, CLI, CLILabel, CLICommand } from '~pages/About/UI';

describe('<About /> UI', () => {
  it('should render an <Wrapper> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render an <Content> tag', () => {
    const renderedComponent = shallow(<Content />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render an <AboutTitle> tag', () => {
    const renderedComponent = shallow(<AboutTitle />);
    expect(renderedComponent.type()).toEqual('h2');
  });

  it('should render an <Techs> tag', () => {
    const renderedComponent = shallow(<Techs />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should render an <Tech> tag', () => {
    const renderedComponent = shallow(<Tech />);
    expect(renderedComponent.type()).toEqual('li');
  });

  it('should render an <CLI> tag', () => {
    const renderedComponent = shallow(<CLI />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render an <CLILabel> tag', () => {
    const renderedComponent = shallow(<CLILabel />);
    expect(renderedComponent.type()).toEqual('h4');
  });

  it('should render an <CLICommand> tag', () => {
    const renderedComponent = shallow(<CLICommand />);
    expect(renderedComponent.type()).toEqual('pre');
  });
});
