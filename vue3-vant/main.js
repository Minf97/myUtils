import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { Button } from 'vant'
import 'vant/lib/index.css'

export function createApp() {
  const app = createSSRApp(App).use(Button)
  return {
    app
  }
}
// #endif