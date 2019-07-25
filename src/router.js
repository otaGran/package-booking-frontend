import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Customer from "./views/Customer";
import Boss from "./views/Boss";
import addParcel from "./views/addParcel";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Customer',
      name: 'Custmoer',
      component: Customer
    },
    {
      path: '/Boss',
      name: 'Boss',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: Boss
    },
    {
      path: '/addParcel',
      name: 'addParcel',
      component: addParcel
    }
  ]
})
