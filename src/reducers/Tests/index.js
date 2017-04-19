import { FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS, FETCH_TESTS_FAILURE } from '~reducers/Tests/types';

export const initialState = {
  isLoading: false,
  error: null,
  tests: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TESTS_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_TESTS_SUCCESS:
      return { ...state, isLoading: false, tests: action.payload.tests };

    case FETCH_TESTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      return state;
  }
};
