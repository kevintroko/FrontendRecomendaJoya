import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLogger from 'vuejs-logger'

import App from './App.vue'
import Home from './components/Home'


import Login from './components/Login'
import BootstrapVue from 'bootstrap-vue'

const options = {
  isEnabled: true,
  logLevel : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
    },
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
