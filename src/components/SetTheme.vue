<template>
  <div class="set-theme">
    <div class="wrap">
      <span
        ref="open"
        @click="toggleBox"
        style="color: #fff; font-weight: bold; cursor: pointer; user-select: none">
        Choose Theme
      </span>
      <div
        :class="[
          'box',
        ]"
        ref="box"
        :style="[
          styleMode({property: 'background-color', value:'#fff'}),
          styleMode({property: 'color', value:'#333'}),
        ]"
        @click.stop>
        <div class="list">
          <div v-for="(val, key, index) in theme" :key="index">
            <div
              @click="handClickBtn(key)"
              :style="{backgroundColor: val}"
              class="item"
            />
            <div
              class="lable"
            >{{key}}</div>
          </div>
        </div>
        <div
          class="mode-labe"
        >Dark mode:</div>
        <div class="swtch-mode-wrap">
          <div
            :style="[
              styleMode({property: 'background-color',value: '#ddd'}),
            ]"
            class="swtch-mode" @click="handClickBar"
          >
            <div
              :style="[
                mode === 'dark' ?
                style({property: 'background-color'}) :
                styleMode({property: 'background-color',value: '#999'}),
              ]"
              :class="[
             'bar',
             {open: mode==='dark'},
            ]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'SetTheme',
  computed: {
    ...mapState({
      currentTheme: state => state.currentTheme,
      mode: state => state.mode,
      theme: state => state.theme,
    }),
    ...mapGetters([
      'style',
      'styleMode',
    ]),
  },
  methods: {
    ...mapActions([
      'setCurrentTheme',
      'setMode',
    ]),
    closeAll(e) {
      if (e.target === this.$refs.open) return;
      const currentClass = this.$refs.box.className.split(' ');
      const cl = currentClass.filter(item => item !== 'open');
      this.$refs.box.className = cl.join(' ');
    },
    toggleBox() {
      const currentClass = this.$refs.box.className.split(' ');
      const toggle = currentClass.indexOf('open');
      const cl = toggle === -1 ? [...currentClass, 'open'] : currentClass.filter(item => item !== 'open');
      this.$refs.box.className = cl.join(' ');
    },
    handClickBtn(key) {
      this.setCurrentTheme(key);
      this.toggleBox();
    },
    handClickBar() {
      this.setMode();
      this.toggleBox();
    },
  },

  mounted() {
    document.addEventListener('click', this.closeAll, false);
  },

  destroyed() {
    document.removeEventListener('click', this.closeAll, false);
  },
};
</script>

<style scoped>
  .set-theme {
    display: flex;
    align-items: center;
  }

  .wrap {
    position: relative;
  }

  .box {
    position: absolute;
    top: 100%;
    right: 100%;
    width: 100px;
    padding: 5px;
    border-radius: 5px;
    transform: scale(0);
    visibility: hidden;
    opacity: 0;
    z-index: -10;
    transition: 0.3s;
    transform-origin: top right;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .box.open {
    transform: scale(1);
    visibility: visible;
    opacity: 1;
    z-index: 999;
  }

  .list {
 display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item{
    width:30px;
    height: 30px;
    border-radius: 50%;
    margin: 5px;
    border: 2px solid #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  .lable {
    text-align: center;
    font-size: 12px;
  }

  .mode-labe {
    margin-top: 2em;
    font-size: 12px;
    font-weight: bold;
  }

  .swtch-mode-wrap {
    display: flex;
  }

  .swtch-mode {
    position: relative;
    width:36px;
    height: 14px;
    border-radius: 14px;
    margin: 10px auto 16px;
    cursor: pointer;
  }

  .bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    margin-left: -6px;
    margin-top: -3px;
    border-radius: 50%;
    transition: 0.5s;
  }
  .bar.open {
    margin-left: 0;
    transform: translateX(100%)
  }
</style>
