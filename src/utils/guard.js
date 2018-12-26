import { getToken } from '@/utils/auth';

export default (to, from, next) => {
  if (getToken()) {
    next();
  } else {
    next('login');
  }
};
