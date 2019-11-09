<template>
  <v-app>
    <Header />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import Login from './views/Login.vue';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    // Login,
    Header
  },
  data: () => ({
    //
  }),
};
</script>
