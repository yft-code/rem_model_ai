import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@assets/css/reset.css' // 样式重置
import '@assets/css/style.css' //公用样式
import "amfe-flexible";

// 引入axios
import axios from "./utils/axios";
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
// 引入elementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// 引入mixin
import mixin from "./utils/mixin";
Vue.mixin(mixin);
// 使用swiper
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

// 全局注册
import "./components";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
