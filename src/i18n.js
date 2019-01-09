import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/lang/en';
import ja from '@/lang/ja';

Vue.use(VueI18n);

const locale = 'ja'; // default locale

const messages = {
  en,
  ja,
};


export default new VueI18n({
  locale,
  messages,
});
