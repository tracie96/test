import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);
const base_url = "http://abf44a84.ngrok.io";
const namespaced = true;
export default new Vuex.Store({
  state: {
    token: localStorage.getItem("auth_token") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status = "success";
      state.token = payload.auth;
      state.user = payload;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({ url: `${base_url}/api/auth/login`, data: user, method: "POST" })
          .then(resp => {
            const token = resp.data.data.auth;
            const user = resp.data.data;
            localStorage.setItem("auth_token", token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("auth_token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: `${base_url}/api/auth/create`,
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.data.auth;
            const user = resp.data.data;
            if (token != undefined || token != "") {
              localStorage.setItem("auth_token", token);
              // Add the following line:
              axios.defaults.headers.common["Authorization"] = token;
              commit("auth_success", user);
              resolve(resp);
            }
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("auth_token");
            reject(err);
          });
      });
    },
    confirmPin({ commit }, code) {
      const email = this.state.user.email;
      axios({
        url: `${base_url}/api/auth/verify/${email}/${code}`,
        data: code,
        email,
        method: "PATCH"
      }).then(resp => {
        //console.log(resp)
        const token = resp.data.data.auth;
        const user = resp.data.data;
        //localStorage.setItem('auth_token', token)
        //commit('auth_success', user)
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("auth_token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    currentUser: state => state.user,
    user_token: state => state.token,
    emailStatus: state => state.user.email_verified
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});
