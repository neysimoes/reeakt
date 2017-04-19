import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../../../store';

import { Tests } from '~containers';

const history = createHistory();
const store = configureStore({}, history);

describe('<Tests />', () => {
  it('should render an <Tests> tag', () => {
    const mockedState = {
      isLoading: true,
      error: null,
      tests: {}
    };
    const wrapper = mount(
      <Provider store={store}>
        <Tests />
      </Provider>
    );

    expect(JSON.parse(wrapper.find('pre').text())).toEqual(mockedState);
  });
});
