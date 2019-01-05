import color from 'color';

export default {
  style: state => ({
    property,
  }) => ({
    [property]: state.theme[state.currentTheme],
  }),

  styleLighten: state => ({
    property,
    light = 0,
  }) => ({
    [property]: color(state.theme[state.currentTheme]).lighten(light),
  }),

  styleDarken: state => ({
    property,
    dark = 0,
  }) => ({
    [property]: color(state.theme[state.currentTheme]).darken(dark),
  }),

  styleMode: state => ({
    property,
    value,
  }) => ({
    [property]: state.mode === 'light' ? value : color(value).negate(),
  }),

  theme: state => state.theme[state.currentTheme],

  mode: state => value => (state.mode === 'light' ? value : `${color(value).negate()}`),
};
