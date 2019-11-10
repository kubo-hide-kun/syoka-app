<template>
  <v-app>
    <SignedHeader v-if="this.$store.state.signed" />
    <Header v-else />
    <v-content>
      <transition name="page">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import SignedHeader from "./components/signedHeader";

export default {
  name: "App",
  components: {
    Header,
    SignedHeader
  },
  data: () => ({
    //
  })
};
</script>
