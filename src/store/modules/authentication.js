import { auth } from '../../api';
import router from '../../router';

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
  authenticate({ commit }) {
    commit('beginAuth');
    auth().then(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem('token', response.data.access_token);
          commit('authSuccess', response.data.access_token);
          router.push('/livesearch');
        }
      },
      (error) => { commit('authError', error); });
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
