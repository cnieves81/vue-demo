
import { search } from '../../api';

const initialState = {
  isPending: false,
  token: null,
  error: null,
};

const getters = {
  tweets: state => state.tweets,
};

const actions = {
  search({ commit }, term) {
    commit('beginSearch');
    search(term).then(
      (response) => {
        if (response.status === 200) {
          commit('searchSuccess', response.body);
        } else {
          commit('searchError', 'expired token');
        }
      },
      () => { commit('searchError'); });
  },
};

const mutations = {
  beginSearch(state) {
    state.tweets = [];
    state.isPending = true;
  },
  searchSuccess(state, results) {
    state.tweets = results;
    state.isPending = false;
  },
  searchError(state) {
    state.tweets = [];
    state.isPending = false;
  },
};

const tweets = {
  state: initialState,
  actions,
  mutations,
  getters,
};

export default tweets;
