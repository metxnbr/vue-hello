import axios from 'axios';

const timeout = 1000 * 30;

const getData = response => response.data;

export default (url, options = {}) => {
  const baseOptions = {
    timeout,
    ...options,
  };
  return axios(url, baseOptions)
    .then(getData)
    .catch((e) => {
      throw e;
    });
};
