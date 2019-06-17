// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue
import Vue from 'vue'
//引入App
import App from './App'
import router from './router'
//初始化css
import  './common/common.css'
//响应式
import  './common/rem.js'
//数据管理
import store from './store/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
