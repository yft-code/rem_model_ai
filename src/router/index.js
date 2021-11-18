import Vue from 'vue'
import VueRouter from 'vue-router'
import { maps } from "./maps"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
		redirect: "/index",
    component: resolve => require(["@/views/main"],resolve),
		children: maps.paasMaps
  }
]

const router = new VueRouter({
  routes
})

export default router
