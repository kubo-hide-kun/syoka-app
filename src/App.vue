<template>
  <v-app>
    <Header />
    <v-content>
      <SignedHeader/>
      <!-- <Header /> -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from './components/Header'
import SignedHeader from './components/signedHeader'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    SignedHeader
  },
  data: () => ({
    //
  }),
};
</script>
