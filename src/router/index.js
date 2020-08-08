import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import regionali from '../views/regionali.vue'
import storico from '../views/storico.vue'
import grafici from '../views/grafici.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/regionali',
    name: 'regionali',
    component: regionali
  },
  {
    path: '/storico',
    name: 'storico',
    component: storico
  },
  {
    path: '/grafici',
    name: 'grafici',
    component: grafici
  }
]

const router = new VueRouter({
  routes
})

export default router
