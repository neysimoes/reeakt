import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { getTests, getTestsSuccess, getTestsFailure } from '~reducers/Tests/actions';
import { getTestsEndpoint } from '~services/Api';
import { fetchTests } from '~sagas/Tests';

/* eslint-disable redux-saga/no-unhandled-errors */
/* eslint-disable redux-saga/yield-effects */
describe('should Saga Tests works fine', () => {
  const it = sagaHelper(fetchTests(getTests()));

  it('after call the request action, should call the getTestsEndpoint and return some data', result => {
    expect(result).toEqual(call(getTestsEndpoint));
    return { data: [{ test: 1}] };
  });

  it('should call the success action with the data returned by the fetchTests request', result => {
    expect(result).toEqual(put(getTestsSuccess([{ test: 1}])));
  });
});

describe('should Sagas Tests return an error', () => {
  const it = sagaHelper(fetchTests(getTests()));

  it('after call the request action, should call the getTestsEndpoint and return an exception', result => {
    expect(result).toEqual(call(getTestsEndpoint));
    return new Error('Something went wrong');
  });

  it('should call the error action with the error message', result => {
    expect(result).toEqual(put(getTestsFailure(new Error('Something went wrong'))));
  });
});
