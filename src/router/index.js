import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('Home'),
  },
  {
    path: '/regionali',
    name: 'regionali',
    component: lazyLoad('regionali'),
  },
  {
    path: '/storico',
    name: 'storico',
    component: lazyLoad('storico'),
  },
  {
    path: '/grafici',
    name: 'grafici',
    component: lazyLoad('grafici'),
  }
]

const router = new VueRouter({
  saveScrollPosition: false,
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})

export default router
