import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { vueBaberrage } from 'vue-baberrage'
import axios from 'axios'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.use(vueBaberrage)
Vue.prototype.$video = Videojs
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
