import axios from 'axios';

const getTestsEndpoint = () => axios.get('https://count.donreach.com/?url=http://github.com');

export {
  getTestsEndpoint
};
