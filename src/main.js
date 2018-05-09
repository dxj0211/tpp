// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Axios from "axios"
import Mint from 'mint-ui'
import "../node_modules/mint-ui/lib/style.css"
import "../src/js/rem"
import "../src/css/common.css"
import Swiper from "../node_modules/swiper"
import "../node_modules/swiper/dist/css/swiper.min.css"
import "../node_modules/swiper/dist/js/swiper.min.js"
Vue.use(Mint,Swiper);
Vue.prototype.Axios=Axios;

new Vue({
  el: '#app',
  router,
})
