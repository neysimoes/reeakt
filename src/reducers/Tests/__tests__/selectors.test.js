import { fromJS } from 'immutable';
import { selectTests } from '~reducers/Tests/selectors';

describe('selectTests', () => {
  it('should select the global state', () => {
    const fixture = fromJS({ test: 1});
    const mockedState = fromJS({
      tests: fixture
    });
    expect(selectTests(mockedState)).toEqual(fixture);
  });
});
