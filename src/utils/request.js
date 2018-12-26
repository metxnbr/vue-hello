import axios from 'axios';
import { getToken } from '@/utils/auth';

const timeout = 1000 * 30;

const getData = response => response.data;

export const authRequest = (url, options = {}) => {
  // eslint-disable-next-line camelcase
  const { token_type, access_token } = getToken();
  const authOptions = {
    headers: {
      // eslint-disable-next-line camelcase
      Authorization: `${token_type} ${access_token}`,
    },
    timeout,
    ...options,
  };
  return axios(url, authOptions)
    .then(getData)
    .catch((e) => {
      throw e;
    });
};

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
