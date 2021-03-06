import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createRouter from './config/router'
import createstore from './store/store'

import './assets/style/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

export default () => {
  const router = createRouter()
  const store = createstore()
  const app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })

  return {
    app,
    router,
    store
  }
}
