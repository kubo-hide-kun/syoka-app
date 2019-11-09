<template>
  <v-app>
    <Header />
  <v-content>

  </v-content>
  
    <transition name="page">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
};
</script>
