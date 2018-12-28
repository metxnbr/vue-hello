import { authRequest } from '@/utils/request';
import apis from './apis';


export default {
  namespaced: true,
  state: {
    isFetching: false,
    user: false,
  },

  mutations: {
    REQUEST_USER: (state) => {
      state.isFetching = true;
    },

    RECEIVE_USER: (state, value) => {
      state.isFetching = false;
      state.user = value;
    },
  },
  actions: {
    init: ({ dispatch }) => {
      dispatch('requestChats');
    },

    receiveUser: ({ commit }, value) => {
      commit('RECEIVE_USER', value);
    },

    requestChats: async ({ commit, dispatch }) => {
      try {
        commit('REQUEST_USER');
        const user = await authRequest(apis.user);
        dispatch('receiveUser', user);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
