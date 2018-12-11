import request from '@/utils/request'

const api = 'https://dog.ceo/api/breeds/image/random'

export default {
  namespaced: true,
  state: {
    isFetching: false,
    data: false,
  },
  mutations: {
    request: state => state.isFetching = true,
    receive: (state, data) => {
      state.isFetching = false;
      state.data = data;
    }
  },
  actions: {
     requestDog({dispatch,commit}) {
      commit('request');
      dispatch('fetchdog')
     },
    async fetchdog({ commit }) {
      const getDog =  () => request(api);
      commit('receive', await getDog());
    }
  },
}