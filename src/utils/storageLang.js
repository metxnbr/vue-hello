import {
  LANG,
} from '@/constants/localStorageKey';

import {
  getStorage,
  setStorage,
} from '@/utils/localStorage';

export const getLang = () => getStorage(LANG);

export const setLang = (value) => {
  setStorage(LANG, value);
};
