
import { search } from '../../api';

const initialState = {
  isPending: false,
  error: null,
  statuses: [],
};

const getters = {
  tweets: state => state.tweets,
  latestTweetId: state =>
    (state.tweets.length > 0 ? state.tweets[state.tweets.length - 1] : ''),
};

const actions = {
  search({ commit }, { term, sinceId }) {
    commit('beginSearch');
    search(term, sinceId).then(
      (response) => {
        if (response.status === 200) {
          commit('searchSuccess', response.data.statuses);
        } else {
          commit('searchError', 'expired token');
        }
      },
      () => { commit('searchError'); });
  },
};

const mutations = {
  beginSearch(state) {
    state.statuses = [];
    state.isPending = true;
  },
  searchSuccess(state, results) {
    state.statuses = results;
    state.isPending = false;
  },
  searchError(state) {
    state.statuses = [];
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
