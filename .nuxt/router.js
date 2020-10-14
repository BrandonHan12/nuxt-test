import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c707afd4 = () => interopDefault(import('..\\pages\\customer.vue' /* webpackChunkName: "pages/customer" */))
const _2e475ed7 = () => interopDefault(import('..\\pages\\customer_list.vue' /* webpackChunkName: "pages/customer_list" */))
const _a55c005c = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _e6995c6c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/customer",
    component: _c707afd4,
    name: "customer"
  }, {
    path: "/customer_list",
    component: _2e475ed7,
    name: "customer_list"
  }, {
    path: "/inspire",
    component: _a55c005c,
    name: "inspire"
  }, {
    path: "/",
    component: _e6995c6c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
