export default {
  namespaced: true,
  state: {
    message: 'I am learning vue and vuex!'
  },
  mutations: {
    reverseMessage: state => {
      state.message = state.message.split('').reverse().join('')
    },
  },
  actions:{
    reverseMessage: ( { commit } ) => {
      commit('reverseMessage');
    }
  }
}