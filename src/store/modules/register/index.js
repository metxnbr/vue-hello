import qs from 'qs'; // eslint-disable-line
import router from '@/router';
import request from '@/utils/request';
import { setToken } from '@/utils/auth';
import apis from './apis';

export default {
  namespaced: true,
  state: {
    isFetching: false,
    username: '',
    password: '',
    confirmPassword: '',
  },
  mutations: {
    UPDATE_USERNAME: (state, value) => state.username = value,
    UPDATE_PASSWORD: (state, value) => state.password = value,
    UPDATE_CONFIRM_PASSWORD: (state, value) => state.confirmPassword = value,
  },

  actions: {
    updateUsername: ({ commit }, e) => {
      commit('UPDATE_USERNAME', e.target.value.trim());
    },

    updatePassword: ({ commit }, e) => {
      commit('UPDATE_PASSWORD', e.target.value.trim());
    },

    updateConfirmPassword: ({ commit }, e) => {
      commit('UPDATE_CONFIRM_PASSWORD', e.target.value.trim());
    },

    onSubmit: async ({ state }) => {
      const { username, password, confirmPassword } = state;
      try {
        const usernameLess = '用户名不少于3位';
        if (username.length < 3) throw usernameLess;

        const passwordLess = '密码不少于6位';
        if (password.length < 6) throw passwordLess;

        const confirmError = '密码不一致';
        if (password !== confirmPassword) throw confirmError;

        /* eslint-disable camelcase */
        const grant_type = 'password';
        const client_id = 1;
        const client_secret = 'kbeQYO9LdVSSzydUqH87xCF6MtgrqoS5IjrEFm6i';
        /* eslint-enable camelcase */

        const data = {
          grant_type,
          client_id,
          client_secret,
          username,
          password,
        };

        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(data),
        };

        const json = await request(apis.register, options);
        setToken(json);
        router.push('/');
      } catch (error) {
        alert(error); // eslint-disable-line
      }
    },
  },
};
