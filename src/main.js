import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import store from './store'
import utils from '@/main/utils.js'
import BootstrapVue from 'bootstrap-vue'
import VueKatex from 'vue-katex'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/BosketTreeView.css'
import 'katex/dist/katex.min.css'

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueKatex)

utils.loadJSON('contents.json', function (res) {
  let message = JSON.parse(res)
  store.state.contents = message
})

const router = createRouter(store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
