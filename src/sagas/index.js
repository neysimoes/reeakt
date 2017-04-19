import { takeEvery } from 'redux-saga/effects';
import { FETCH_TESTS_REQUEST } from '~reducers/Tests/types';
import { fetchTests } from '~sagas/Tests';

/* eslint-disable redux-saga/no-unhandled-errors */
export default function* rootSaga() {
  yield [
    takeEvery(FETCH_TESTS_REQUEST, fetchTests)
  ];
}
