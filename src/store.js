import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import Reducers from '~reducers';
import Sagas from '~sagas';

export default function configureStore(initialState, history) {
  const ReduxSagaMiddleware = createSagaMiddleware();
  const store = createStore(Reducers, fromJS(initialState), compose(
    applyMiddleware(
      ReduxSagaMiddleware,
      routerMiddleware(history)
    ),
    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  ));

  store.runSaga = ReduxSagaMiddleware.run;
  store.runSaga(Sagas);
  store.close = () => store.dispatch(END);

  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers').default;
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
}
