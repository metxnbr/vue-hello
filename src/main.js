import Vue from 'vue';
import styled from '@/lib/styled';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(styled);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
