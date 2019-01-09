<template>
  <div class="dynamic-store">
    <h1>This is an DynamicStore page</h1>
    <p>{{ message }}</p>
    <button @click="reverseMessage">
      reverse
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dynamicStore from '@/store/modules/dynamicStore';

const STORE_KEY = 'dynamicStore';
export default {
  name: 'DynamicStore',
  created() {
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, dynamicStore);
    }
  },
  methods: mapActions('dynamicStore', [
    'reverseMessage',
  ]),
  computed: mapState('dynamicStore', {
    message: state => state.message,
  }),
};
</script>
