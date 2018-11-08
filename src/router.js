import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export function createRouter (store) {
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/discret',
        name: 'discret',
        component: () => import('./views/Discret.vue')
      },
      {
        path: '/english',
        name: 'english',
        component: () => import('./views/English.vue')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    ]
  })

  router.afterEach((to, from) => {
    store.state.theContents = store.state.contents[to.name]
  })

  return router
}
