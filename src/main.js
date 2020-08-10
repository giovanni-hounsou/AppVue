// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from "firebase";

Vue.config.productionTip = false

const  firebaseConfig = {
  apiKey: "AIzaSyDVg-j3AUw54UbADCwdNlgK3n6coQfbOqI",
  authDomain: "app-img.firebaseapp.com",
  databaseURL: "https://app-img.firebaseio.com",
  projectId: "app-img",
  storageBucket: "app-img.appspot.com",
  messagingSenderId: "4536407402",
  appId: "1:4536407402:web:20c2b4a4864611c441c113",
  measurementId: "G-4CNGKWBP6P"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
