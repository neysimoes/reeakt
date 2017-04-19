import { FETCH_TESTS_REQUEST, FETCH_TESTS_SUCCESS, FETCH_TESTS_FAILURE } from '~reducers/Tests/types';
import { getTests, getTestsSuccess, getTestsFailure } from '~reducers/Tests/actions';

describe('Tests Actions', () => {
  describe('getTests', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: FETCH_TESTS_REQUEST
      };

      expect(getTests()).toEqual(expectedResult);
    });
  });

  describe('getTestsSuccess', () => {
    it('should return the correct type and the passed tests', () => {
      const fixture = [{test: 1}];
      const expectedResult = {
        type: FETCH_TESTS_SUCCESS,
        payload: { tests: fixture }
      };

      expect(getTestsSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('getTestsFailure', () => {
    it('should return the correct type and the error', () => {
      const fixture = new Error('Something went wrong');
      const expectedResult = {
        type: FETCH_TESTS_FAILURE,
        payload: { error: fixture }
      };

      expect(getTestsFailure(fixture)).toEqual(expectedResult);
    });
  });
});
