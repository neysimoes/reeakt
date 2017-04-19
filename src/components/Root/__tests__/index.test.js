import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../../../store';

import Root from '~components/Root';

const history = createHistory();
const store = configureStore({}, history);

describe('<Root />', () => {
  it('should render an <Root> tag', () => {
    const renderedComponent = shallow(<Root store={store} history={history} />);
    expect(renderedComponent.type()).toEqual(Provider);
  });
});
