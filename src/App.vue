<template>
  <v-app>
    <Header />
    <v-content>
      <SignedHeader v-if="this.$store.state.signed"/>
      <Header v-else/>
    </v-content>
    <HelloWorld />
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
