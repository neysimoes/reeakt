import createHistory from 'history/createBrowserHistory';
import configureStore from '../store';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, createHistory());
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function');
    });
  });

  describe('close', () => {
    it('should fire the hook `store.dispatch(END)`', () => {
      expect(store.close()).toEqual({'type': '@@redux-saga/CHANNEL_END'});
    });
  });
});
