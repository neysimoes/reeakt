import { combineReducers } from 'redux';
import routerReducer from '~reducers/Router';
import testsReducer from '~reducers/Tests';

const rootReducer = combineReducers({
  routing: routerReducer,
  tests: testsReducer
});

export default rootReducer;
