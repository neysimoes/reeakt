import { selectTests } from '~reducers/Tests/selectors';

describe('selectTests', () => {
  it('should select the global state', () => {
    const fixture = { test: 1};
    const mockedState = {
      tests: fixture
    };
    expect(selectTests(mockedState)).toEqual(fixture);
  });
});
