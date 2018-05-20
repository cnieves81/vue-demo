
import VueRouter from 'vue-router';
import Vue from 'vue';
import store from '../store';
import AuthForm from '../components/AuthForm';
import LiveSearch from '../components/LiveSearch';

Vue.use(VueRouter);
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
export default router;
