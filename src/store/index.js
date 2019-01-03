import Vue from 'vue';
import Vuex from 'vuex';

import dog from './modules/dog';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    theme: 'pink',
    themeData: [
      {
        type: 'pink',
        bg: '#ff9090',
      },
      {
        type: 'blue',
        bg: '#4076e0',
      },
    ],
  },
  mutations: {
    increment: state => (state.count += 1),
    decrement: state => (state.count -= 1),
    setTheme: (state, value) => state.theme = value,
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    setTheme: ({ commit }, value) => commit('setTheme', value),
  },
  modules: {
    dog,
  },
  strict: process.env.NODE_ENV !== 'production',
});
