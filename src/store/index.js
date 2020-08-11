import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_token: "",
    user_id: "",
    loggedIn: false,
    alertObj: {
      alert: false,
      alertSuccess: false,
      alertTitle: "",
      alertMessage: "",
    },
  },
  mutations: {
    CHANGE_LOGGED_IN(state, status) {
      state.loggedIn = status;
    },

    CHANGE_ALERT_OBJ(state, data) {
      state.alertObj = data;
    },

    SET_API_TOKEN(state, token) {
      state.api_token = token;
    },

    SET_USER_ID(state, id) {
      state.user_id = id;
    },
  },
  actions: {
    updateLoggedInStatus({ commit }, status) {
      commit("CHANGE_LOGGED_IN", status);
    },

    updateAlert({ commit }, data) {
      commit("CHANGE_ALERT_OBJ", data);
    },

    setToken({ commit }, token) {
      commit("SET_API_TOKEN", token);
    },

    setUserId({ commit }, id) {
      commit("SET_USER_ID", id);
    },
  },
  modules: {},
});
