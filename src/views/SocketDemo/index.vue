<template>
  <div class="socket-demo container">
    <h1>This is an socketDemo page</h1>
    <div class="container">
      <div v-if="chatsIsFetching">
        loading...
      </div>
      <div
        class="chat-failure"
        v-if="failureChats"
      >
        loading chats list with failure
      </div>
      <ul v-if="chats.length">
        <li
          class="chat"
          v-for="(chat, index) in chats"
          :key="index"
        >
          <div class="chat-id">
            {{ chat.chat_user }}
          </div>
          <div class="chat-message">
            {{ chat.chat_message }}
          </div>
          <div class="chat-timemap">
            {{ chat.created_at }}
          </div>
        </li>
      </ul>
      <div v-if="chatsIsFetching === false">
        <textarea
          :value="message"
          @input="updateMessage"
          :disabled="sending"
          class="message"
          placeholder="typing message"
        />
        <br>
        <input
          :disabled="sending"
          value="send"
          type="button"
          @click="send"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.message {
  width: 500px;
  height: 100px;
}

.chat {
  padding: 15px;
  margin: 15px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.chat-failure {
  color: red;
}

.chat-id {
  color: #333;
  font-weight: bold;
}

.chat-timemap {
  text-align: right;
  color: #999;
  font-size: 0.8em;
}

.chat-message {
  padding: 10px 0;
}

</style>


<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import socketDemo from '@/store/modules/socketDemo';


const STORE_KEY = 'socketDemo';
export default {
  name: 'SocketDemo',
  created() {
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, socketDemo);
    }
  },

  methods: mapActions(STORE_KEY, [
    'init',
    'updateMessage',
    'send',
  ]),

  computed: {
    ...mapState(STORE_KEY, {
      chatsIsFetching: state => state.chatsIsFetching,
      sending: state => state.sending,
      message: state => state.message,
      failureChats: state => state.failureChats,
    }),
    ...mapGetters(STORE_KEY, {
      chats: 'chatsFormatTime',
    }),
  },

  mounted() {
    this.init();
  },
};
</script>
