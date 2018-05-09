import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Code from '../components/code'
import Details from "../components/details"
import Cinema from "../components/cinema"
import Mine from "../components/mine"
import Ticket from "../components/ticket"
import Loginsus from "../components/loginsus"
import Coupon from "../components/coupon"
import Talk from "../components/talk"
import Movie from "../components/movie"
Vue.use(Router)

export default new Router({
  mode:"history",        //hash    history(js中的goback(-1)返回上一页)
  linkActiveClass:"is-active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path:'/code',
      name:"code",
      component:Code
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/ticket',
      name:"ticket",
      component:Ticket
    },
    {
      path:'/loginsus',
      name:"loginsus",
      component:Loginsus
    },
    {
      path:'/coupon',
      name:"coupon",
      component:Coupon
    },
    {
      path:'/talk',
      name:'talk',
      component:Talk
    },
    {
      path: '/movie',
      name:"movie",
      component:Movie
    }
  ]
})
