<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/count">Count</router-link>|
      <router-link to="/dog">Dog</router-link>|
      <router-link to="/dynamicStore">DynamicStore</router-link>|
      <router-link to="/socketDemo">SocketDemo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import '~sanitize.css';
@import './assets/global.css';
@import './assets/common.css';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
