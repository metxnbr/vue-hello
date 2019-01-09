<template>
  <div class="register container">
    <form
      class="form"
      :class="$styled('form')"
      @submit.prevent="onSubmit"
    >
      <div class="input-group">
        <label class="title">
          username
        </label>
        <input
          :value="username"
          @input="updateUsername"
          class="input"
          :class="$styled('input')"
          type="text"
        >
      </div>

      <div class="input-group">
        <label class="title">
          password
        </label>
        <input
          :value="password"
          @input="updatePassword"
          class="input"
          :class="$styled('input')"
          type="password"
        >
      </div>

      <div class="input-group">
        <label class="title">
          confirm password
        </label>
        <input
          :value="confirmPassword"
          @input="updateConfirmPassword"
          class="input"
          :class="$styled('input')"
          type="password"
        >
      </div>
      <input
        class="submit"
        :class="$styled('submit')"
        type="submit"
        value="Sign up for us"
      >
    </form>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  margin-top: 50px;
}

.form {
  padding: 30px 15px;
  border-radius: 3px;
}

.input-group {
  margin-bottom: 20px;
}

.title {
  display: block;
  line-height: 1.8;
  color: #666;
}

.input {
  width: 350px;
  height: 42px;
  padding-left: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  outline: none;
  background-color: transparent;
  box-shadow: inset 0 0 3px #ddd;
  transition: 0.2s;
}

.input:focus {
  box-shadow: inset 0 0 3px transparent;
}

.submit {
  display: block;
  width: 100%;
  border-radius: 3px;
  line-height: 60px;
  border: none;
  text-align: center;
  outline: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

</style>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import register from '@/store/modules/register';

const styled = ({
  theme,
  color,
  modeColor,
}) => ({
  form: {
    'background-color': modeColor('#fff'),
  },
  input: {
    color: modeColor('#333'),
    'border-color': modeColor('#ddd'),
    'caret-color': theme,
    ':focus': {
      'border-color': theme,
    },
  },
  submit: {
    'background-color': theme,
    ':hover': {
      'background-color': `${color(theme).darken(0.2)}`,
    },
  },
});

const STORE_KEY = 'register';
export default {
  name: 'Register',
  created() {
    // eslint-disable-next-line no-underscore-dangle
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, register);
    }
  },

  computed: {
    ...mapState(STORE_KEY, {
      username: state => state.username,
      password: state => state.password,
      confirmPassword: state => state.confirmPassword,
    }),
    ...mapState([
      'mode',
    ]),
    ...mapGetters([
      'theme',
    ]),
  },

  methods: {
    ...mapActions(STORE_KEY, [
      'updateUsername',
      'updatePassword',
      'updateConfirmPassword',
      'onSubmit',
    ]),
    styled,
  },
};

</script>
