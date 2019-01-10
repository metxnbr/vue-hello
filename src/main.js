import Vue from 'vue';
import styled from '@/lib/styled';
import { getLang } from '@/utils/storageLang';
import App from './App.vue';
import { loadLanguageAsync, i18n } from './i18n';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(styled);

const lang = getLang() || 'en';
router.beforeEach((to, from, next) => {
  const { name } = to;
  loadLanguageAsync(lang, name).then(() => next());
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
