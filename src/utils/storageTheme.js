import {
  THEME,
  MODE,
} from '@/constants/localStorageKey';

import {
  getStorage,
  setStorage,
} from '@/utils/localStorage';

export const getTheme = () => getStorage(THEME);

export const setTheme = (value) => {
  setStorage(THEME, value);
};


export const getMode = () => getStorage(MODE);

export const setMode = (value) => {
  setStorage(MODE, value);
};

export const initBodyBg = () => {
  const save = getMode();
  if (save === 'dark') {
    document.body.style.backgroundColor = '#333';
  } else {
    document.body.style.backgroundColor = '#f8f8f8';
  }
};
