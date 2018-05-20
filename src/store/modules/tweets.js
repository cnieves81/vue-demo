
import { search } from '../../api';

const initialState = {
  isPending: false,
  token: null,
  error: null,
};

const getters = {
  tweets: state => state.tweets,
  error: state => state.error,
};

const actions = {
  search({ commit }, term) {
    commit('beginSearch');
    search(term).then(
      (response) => {
        console.log(response);
        if (response.ok) {
          response.json().then((resJson) => {
            commit('searchSuccess', resJson);
          });
        }
      },
      (error) => { commit('authError', error); });
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
  searchError(state, error) {
    state.tweets = [];
    state.error = error;
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
