import Vue from 'vue';
import Vuex from 'vuex';

import dog from './modules/dog';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: state => (state.count += 1),
    decrement: state => (state.count -= 1),
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
  },
  modules: {
    dog,
  },
  strict: process.env.NODE_ENV !== 'production',
});
