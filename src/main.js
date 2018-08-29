// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'

Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // watch:{
  //   "$route" : 'checkLogin'
  // },
  // created() {
  //   this.checkLogin();
  // },
  // methods:{
  //   checkLogin(){
  //
  //     //检查是否存在session
  //     // if(!this.getCookie('session')){
  //     //   this.$router.push('/login');
  //     // }
  //     // else{
  //     //   this.$router.push('/home');
  //     // }
  //   }
  // }
})
