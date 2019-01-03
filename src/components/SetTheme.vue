<template>
  <div class="set-theme">
    <div
    @click="setTheme(item.type)"
    v-for="(item, index) in themeData"
    :key="index"
    :style="{backgroundColor: item.bg}"
    class="item">
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SetTheme',
  computed: mapState({
    theme: state => state.theme,
    themeData: state => state.themeData,
  }),
  methods: mapActions([
    'setTheme',
  ]),
};
</script>

<style scoped>
  .set-theme {
    display: flex;
    align-items: center;
  }

  .item{
    width:30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px;
    border: 2px solid #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
</style>
