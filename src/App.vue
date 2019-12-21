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
if(!localStorage.getItem('uid')){
    localStorage.setItem('uid',"1");
    localStorage.setItem('project',"1");
    window.location.href = '/';
};
export default {
  name: "App",
  components: {
    SignedHeader,
    Header
  },
  data: () => ({
    //
  })
};
</script>
