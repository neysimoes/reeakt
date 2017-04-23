import { fromJS } from 'immutable';
import { FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS, FETCH_TESTS_FAILURE } from '~reducers/Tests/types';

export const initialState = fromJS({
  isLoading: false,
  error: null,
  tests: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TESTS_REQUEST:
      return state.merge({ isLoading: true });

    case FETCH_TESTS_SUCCESS:
      return state.merge({ isLoading: false, tests: action.payload.tests });

    case FETCH_TESTS_FAILURE:
      return state.merge({ isLoading: false, error: action.payload.error });

    default:
      return state;
  }
};
