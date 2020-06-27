import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  actions: {
    updateLoggedInStatus({ commit }, status) {
      commit("CHANGE_LOGGED_IN", status);
    },

    updateAlert({ commit }, data) {
      commit("CHANGE_ALERT_OBJ", data);
    },
  },
  modules: {},
});
