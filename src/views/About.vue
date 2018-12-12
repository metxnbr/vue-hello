<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Environment Variables and Modes</h2>
    <p>version: {{version}}</p>
    <p>node env: {{nodeEnv}}</p>
    <p>api host: {{host}}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: () => ({
    version: process.env.VUE_APP_VERSION,
    nodeEnv: process.env.NODE_ENV,
    host: process.env.VUE_APP_API_HOST,
  }),
};
</script>
