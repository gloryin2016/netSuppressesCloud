import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
// import Axios from 'axios'
import vueSeamlessScroll from 'vue-seamless-scroll'
import '@/styles/index.less' 

Vue.use(vueSeamlessScroll)
Vue.use(ElementUI);

// Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
