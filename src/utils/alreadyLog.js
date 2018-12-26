import { getToken } from '@/utils/auth';

export default (to, from, next) => {
  if (getToken()) {
    next('/logout');
  } else {
    next();
  }
};
