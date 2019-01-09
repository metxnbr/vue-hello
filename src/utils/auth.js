import {
  AUTH_TOKEN,
} from '@/constants/localStorageKey';

import {
  getStorage,
  setStorage,
} from '@/utils/localStorage';

export const getToken = () => getStorage(AUTH_TOKEN);

export const setToken = (token) => {
  setStorage(AUTH_TOKEN, token);
};


export const logOut = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
