<template>
  <v-app>
    <SignedHeader v-if="this.$store.state.signed" />
    <Header v-else />
    <v-content>
      <transition name="page">
        <router-view />
      </transition> 
      <tab /> 
    </v-content>
  </v-app>

</template>

<script>
//import Header from "./components/Header";
import SignedHeader from "./components/signedHeader";
import tab from "./components/Tab";
export default {
  name: "App",
  components: {
    SignedHeader,
    tab,

  },
  data: () => ({
    //
  })
};
</script>
