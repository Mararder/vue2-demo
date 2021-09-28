import Vue from 'vue'
import Vuex from "vuex"
import Axios from "axios"
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from "./router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAxios, Axios)
Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
