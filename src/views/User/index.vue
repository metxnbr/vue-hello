<template>
  <div class="about">
    <h1>This is an user page</h1>
    <p v-if="isFetching">loading...</p>
    <p v-if="isFetching===false">username: {{user.username}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import user from '@/store/modules/user';

const STORE_KEY = 'user';

export default {
  name: 'user',
  created() {
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, user);
    }
  },

  computed: mapState(STORE_KEY, {
    isFetching: state => state.isFetching,
    user: state => state.user,
  }),


  methods: mapActions(STORE_KEY, ['init']),

  mounted() {
    this.init();
  },
};
</script>
