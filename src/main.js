// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './components/App';
import AuthForm from './components/AuthForm';
import store from './store';
import LiveSearch from './components/LiveSearch';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

/* eslint-disable no-new */
const routes = [
  {
    path: '/auth',
    component: AuthForm,
  },
  {
    path: '/livesearch',
    component: LiveSearch,
  },
  {
    path: '*',
    redirect: '/livesearch',
  },
];
const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.path === '/livesearch') {
    if (isAuthenticated) {
      next();
    } else {
      next('/auth');
    }
  } else if (to.path === '/auth') {
    if (!isAuthenticated) {
      next();
    } else {
      next('/livesearch');
    }
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  components: { App },
  store,
  router,
  render: h => h(App),
});
