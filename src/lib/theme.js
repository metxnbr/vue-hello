import color from 'color';
import { StyleSheet, css } from 'aphrodite';

export default {
  install: (Vue) => {
    Vue.prototype.$theme = (styled, key) => css(
      StyleSheet.create(
        styled(color),
      )[key],
    );
  },
};
