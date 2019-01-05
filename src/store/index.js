import Vue from 'vue';
import Vuex from 'vuex';

import theme from '@/constants/theme';

import dog from './modules/dog';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    mode: 'light', // another is dark
    currentTheme: 'pink',
    theme,
  },
  getters,
  mutations: {
    increment: state => (state.count += 1),
    decrement: state => (state.count -= 1),
    setCurrentTheme: (state, value) => state.currentTheme = value,
    setMode: state => state.mode = state.mode === 'light' ? 'dark' : 'light',
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    setCurrentTheme: ({ commit }, value) => commit('setCurrentTheme', value),
    setMode: ({ commit, state }) => {
      if (state.mode === 'light') {
        document.body.style.backgroundColor = '#333';
      } else {
        document.body.style.backgroundColor = '#f8f8f8';
      }
      commit('setMode');
    },
  },
  modules: {
    dog,
  },
  strict: process.env.NODE_ENV !== 'production',
});
