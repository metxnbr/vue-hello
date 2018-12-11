<template>
  <div class="dog">
    <h1>This is an dog page</h1>
    <p v-if="isFetching===true">loading...</p>
    <img v-else :src="data.message"/>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click="toggleLoginType">Toggle login type</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "dog",
  data: function() {
    return {
      loginType: 'username',
    }
  },
  methods: {
    toggleLoginType: function() {
      if(this.loginType === 'username') {
        this.loginType = 'address'
      } else {
        this.loginType = 'username'
      }
    }    
  },
  computed: mapState('dog', {
    data: state => state.data,
    isFetching: state => state.isFetching,
  }),

  created: function() {
    this.$store.dispatch('dog/requestDog');
  },
  
};
</script>

