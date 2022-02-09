import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/routes";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./config/firebase";

Vue.use(VueRouter);

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  render: (h) => h(App),
  router,
  vuetify,
  store,
  created() {
    const token = localStorage.getItem("Token");
    if (token) {
      this.$store.dispatch("SET_TOKEN", token);
      this.$store.dispatch("GET_USER_DB");
    } 
  },
}).$mount("#app");
