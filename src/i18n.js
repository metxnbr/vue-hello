import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n);

const locale = ''; // init
const messages = {}; // init
export const i18n = new VueI18n({
  locale,
  messages,
});

const loadedLanguages = [];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
}

export function loadLanguageAsync(lang, name) {
  if (i18n.locale !== lang) {
    setI18nLanguage(lang);
    return loadLanguageAsync(lang, 'app').then(() => loadLanguageAsync(lang, name));
  }

  if (!loadedLanguages.includes(name)) {
    return import(`@/lang/${name}/${lang}`).then((msgs) => {
      i18n.setLocaleMessage(lang, {
        ...i18n.messages[lang],
        [name]: msgs.default,
      });
      loadedLanguages.push(name);
      return Promise.resolve(lang);
    });
  }
  return Promise.resolve(lang);
}
