import { auth } from '../../api';

const initialState = {
  isPending: false,
  token: null,
  error: null,
};

const getters = {
  isAuthenticated: state => !!state.token,
  token: state => state.token,
  error: state => state.error,
};

const actions = {
  authenticate({ commit }, { key, secret }) {
    commit('beginAuth');
    auth(key, secret).then(
      (response) => {
        response.json().then((resJson) => {
          commit('authSuccess', resJson.access_token);
        });
      },
      (error) => { console.log(error); commit('authError'); });
  },
};

const mutations = {
  beginAuth(state) {
    state.isPending = true;
  },
  authSuccess(state, token) {
    state.token = token;
    state.isPending = false;
  },
  authError(state, error) {
    state.error = error;
    state.isPending = false;
  },
};

const authentication = {
  state: initialState,
  actions,
  mutations,
  getters,
};

export default authentication;
