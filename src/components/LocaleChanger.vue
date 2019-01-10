<template>
  <div class="locale-changer">
    <div class="wrap">
      <div class="current-wrap">
        <div class="current">
          {{ langs[$i18n.locale] }}
          <div class="arrow" />
        </div>
      </div>
      <div class="select">
        <div
          class="option"
          v-for="(showName, lang, index) in langs"
          :key="`Lang${index}`"
          :value="lang"
          @click="handleLang(lang)"
        >
          {{ showName }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  position: relative;
  display: flex;
  align-items: stretch;
  height: 100%;
  cursor: pointer;
}

.wrap:hover .select {
  visibility: visible;
  opacity: 1;
  transform: scaleY(1);
}

.current-wrap {
  display: flex;
  align-items: center;
}

.current {
  display: flex;
  align-items: center;
  color: #fff;
}

.arrow {
  width: 0;
  height: 0;
  margin-left: 5px;
  border-color: #ddd transparent transparent ;
  border-style: solid;
  border-width: 5px 5px 0;
}

.select {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #fff;
  transform-origin: left top;
  transition: 0.3s;
  visibility: hidden;
  opacity: 0;
  transform: scaleY(0);
}

.option {
  padding: 0 16px;
  white-space:nowrap;
  line-height: 2.5;
}

</style>


<script>
import { setLang } from '@/utils/storageLang';

export default {
  name: 'LocaleChanger',
  data() {
    return {
      langs: {
        en: 'English',
        'zh-Hans': '中文简体',
        'zh-Hant': '中文繁體',
        ja: '日本語',
      },
    };
  },
  methods: {
    handleLang(lang) {
      setLang(lang);
      window.location.href = this.$route.fullPath;
    },
  },
};
</script>
