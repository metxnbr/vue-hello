import Vue from 'vue';
import Vuex from 'vuex';

import theme from '@/constants/theme';

import {
  getTheme,
  setTheme,

  getMode,
  setMode,
} from '@/utils/storageTheme';

import dog from './modules/dog';
import user from './modules/user';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mode: getMode() || 'light', // another is dark
    currentTheme: getTheme() || 'pink',
    theme,
  },
  getters,
  mutations: {
    SET_CURRENT_THEME: (state, value) => state.currentTheme = value,
    SET_MODE: state => state.mode = state.mode === 'light' ? 'dark' : 'light',
  },
  actions: {
    setCurrentTheme: ({ commit }, value) => {
      commit('SET_CURRENT_THEME', value);
      setTheme(value);
    },
    setMode: ({ commit, state }) => {
      if (state.mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#333';
      } else {
        setMode('light');
        document.body.style.backgroundColor = '#f8f8f8';
      }
      commit('SET_MODE');
    },
  },
  modules: {
    dog,
    user,
  },
  strict: process.env.NODE_ENV !== 'production',
});
