import Vue from 'vue';
import App from './App.vue';
import theme from './lib/theme';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(theme);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
