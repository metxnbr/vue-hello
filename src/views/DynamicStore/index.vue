<template>
  <div class="dynamic-store">
    <h1>This is an DynamicStore page</h1>
    <p>{{ message }}</p>
    <button @click="reverseMessage">reverse</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import dynamicStore from "@/store/modules/dynamicStore";

export default {
  name: "dynamicStore",
  created: function() {
    this.$store.registerModule('dynamicStore', dynamicStore)
  },
  methods: mapActions('dynamicStore',[
    'reverseMessage',
  ]),
  computed: mapState('dynamicStore', {
    message: state => state.message
  }),
};
</script>

