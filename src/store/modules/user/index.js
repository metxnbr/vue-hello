import { authRequest } from '@/utils/request';
import apis from './apis';


export default {
  namespaced: true,
  state: {},

  mutations: {},
  actions: {
    init: ({ dispatch }) => {
      dispatch('requestChats');
    },

    requestChats: async () => {
      try {
        await authRequest(apis.secret);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
