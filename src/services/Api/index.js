import axios from 'axios';

const getTestsEndpoint = () => axios.get('https://api.minasdev.org/events');

export {
  getTestsEndpoint
};
