import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

let firebaseConfig = {
    apiKey: "AIzaSyDRgYDofdrqDKVROMW1cXsEht41TCfdQjQ",
    authDomain: "fireworks-b4b26.firebaseapp.com",
    databaseURL: "https://fireworks-b4b26.firebaseio.com",
    projectId: "fireworks-b4b26",
    storageBucket: "fireworks-b4b26.appspot.com",
    messagingSenderId: "858666908632",
    appId: "1:858666908632:web:7297a3dc681a59e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
