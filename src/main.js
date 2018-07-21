import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueResource from 'vue-resource';
// import "./util/mock.js"
// import "./util/mock.js" // mock 方式，正式发布时，注释掉该处即可

import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueResource);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
