import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import tweets from './modules/tweets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
    tweets,
  },
});
