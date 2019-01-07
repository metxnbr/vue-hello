import color from 'color';
import { StyleSheet, css } from 'aphrodite';

export default {
  install: (Vue) => {
    // eslint-disable-next-line func-names
    Vue.prototype.$styled = function (...args) {
      try {
        // eslint-disable-next-line no-underscore-dangle
        const { theme, mode, styled } = this._self;
        const modeColor = value => (mode === 'light' ? value : `${color(value).negate()}`);
        const styles = StyleSheet.create(styled({ theme, modeColor, color }));
        const acceptsStyles = list => list.map(item => (typeof item === 'string'
          ? styles[item]
          : item && acceptsStyles(item)
        ));
        return css(acceptsStyles(args));
      } catch (error) {
        if (process.env.NODE_ENV === 'production') {
          return '';
        }
        throw error;
      }
    };
  },
};
