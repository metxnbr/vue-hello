<template>
  <div class="login container">
    <form class="form" v-on:submit.prevent="onSubmit">
      <div class="input-group">
        <label class="title">username</label>
        <input :value="username" @input="updateUsername" class="input" type="text">
      </div>

      <div class="input-group">
        <label class="title">password</label>
        <input :value="password" @input="updatePassword" class="input" type="password">
      </div>
      <input class="submit" type="submit" value="Login">
    </form>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  margin-top: 50px;
}

.form {
  padding: 30px 15px;
  border-radius: 3px;
  background-color: #fff;
}

.input-group {
  margin-bottom: 20px;
}

.title {
  display: block;
  line-height: 1.8;
  color: #666;
}

.input {
  width: 350px;
  height: 42px;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #fff;
  outline: none;
  box-shadow: inset 0 0 3px #ddd;
  transition: 0.2s;
  caret-color: #ff7474;
}

.input:focus {
  border-color: pink;
  box-shadow: inset 0 0 3px transparent;
}

.submit {
  display: block;
  width: 100%;
  border-radius: 3px;
  line-height: 60px;
  border: none;
  text-align: center;
  outline: none;
  color: #fff;
  cursor: pointer;
  background-color: #ff7474;
  transition: 0.3s;
}

.submit:hover {
  background-color: #c64242;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';

import login from '@/store/modules/login';

const STORE_KEY = 'login';
export default {
  name: 'Login',
  created() {
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, login);
    }
  },

  computed: mapState(STORE_KEY, {
    username: state => state.username,
    password: state => state.password,
  }),

  methods: mapActions(STORE_KEY, [
    'updateUsername',
    'updatePassword',
    'onSubmit',
  ]),

};
</script>
