import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getTestsEndpoint } from '~services/Api';

describe('#getTestsEndpoint() using async/await', () => {
  it('Should return data from response', async () => {
    const mockAdapter = new MockAdapter(axios);

    mockAdapter.onGet('https://count.donreach.com/?url=http://github.com').reply(200, {
      tests: [{test: 1}]
    });

    const response = await getTestsEndpoint();
    expect(response.data.tests[0]).toEqual({test: 1});
  });
});
