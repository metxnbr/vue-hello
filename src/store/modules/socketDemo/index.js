import request from '@/utils/request';

import io from 'socket.io-client';

import moment from 'moment';

import apis from './apis';

const socket = io(apis.chat);

export default {
  namespaced: true,
  state: {
    sending: false,
    message: '',
    chats: [],
    chatsIsFetching: false,
    failureChats: false,
  },

  getters: {
    chatsFormatTime: ({ chats }) => chats.map(item => ({
      ...item,
      created_at: moment(item.created_at).format('YYYY-MM-DD HH:mm'),
    })),
  },

  mutations: {
    REQUEST_CHATS: (state) => {
      state.failureChats = false;
      state.chatsIsFetching = true;
    },

    RECEIVE_CHATS: (state, value) => {
      state.chatsIsFetching = false;
      state.chats = value;
    },

    FAILURE_CHATS: (state, value) => {
      state.chatsIsFetching = false;
      state.failureChats = value || true;
    },

    ADD_MESSAGE: (state, value) => state.chats = [
      ...state.chats,
      ...value,
    ],

    UPDATE_MESSAGE: (state, value) => state.message = value,

    SEND: (state) => {
      socket.emit('chat message', { chat_message: state.message });
      state.message = '';
    },
  },
  actions: {
    init: ({ dispatch, commit }) => {
      dispatch('requestChats');

      socket.on('connect', () => {

      });

      socket.on('chat message', ({ status, results }) => {
        if (status === 'success') {
          commit('ADD_MESSAGE', results);
        }
      });

      socket.on('disconnect', () => {

      });

      socket.on('connect_error', () => {
        socket.close();
      });
    },

    updateMessage: ({ commit }, e) => {
      commit('UPDATE_MESSAGE', e.target.value.trim());
    },

    requestChats: async ({ commit }) => {
      commit('REQUEST_CHATS');

      try {
        const chats = await request(apis.chat);
        const { status, results, message } = chats;
        if (status !== 'success') throw message;
        commit('RECEIVE_CHATS', results);
      } catch (error) {
        commit('FAILURE_CHATS');
      }
    },

    send: ({ commit }) => {
      commit('SEND');
    },
  },
};
