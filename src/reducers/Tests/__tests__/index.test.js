import testsReducer from '~reducers/Tests';
import { getTests, getTestsSuccess, getTestsFailure } from '~reducers/Tests/actions';


describe('testsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isLoading: false,
      error: null,
      tests: []
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(testsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getTests action correctly', () => {
    const expectedResult = {
      isLoading: true,
      error: null,
      tests: []
    };

    expect(testsReducer(state, getTests())).toEqual(expectedResult);
  });

  it('should handle the getTestsSuccess action correctly', () => {
    const fixture = [{ test: 1 }];
    const expectedResult = {
      isLoading: false,
      error: null,
      tests: fixture
    };

    expect(testsReducer(state, getTestsSuccess(fixture))).toEqual(expectedResult);
  });

  it('should handle the getTestsFailure action correctly', () => {
    const fixture = new Error('Something went wrong');
    const expectedResult = {
      isLoading: false,
      error: fixture,
      tests: []
    };

    expect(testsReducer(state, getTestsFailure(fixture))).toEqual(expectedResult);
  });
});
