import axios from "axios";
import { registerUser, loginUser, verifyUser } from "@/api";

const base_url = "http://32e4ec42.ngrok.io";

const state = {
  token: localStorage.getItem("auth_token") || "",
  user: {}
};

const mutations = {
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
};

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      // axios({ url: `${base_url}/api/auth/login`, data: user, method: 'POST' })
      loginUser(user)
        .then(resp => {
          const token = resp.data.data.auth;
          const user = resp.data.data;
          localStorage.setItem("auth_token", token);
          // Add the following line:
          // axios.defaults.headers.common['Authorization'] = token
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
    console.log("this is to register");
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({ url: `${base_url}/api/auth/create`, data: user, method: "POST" });
      registerUser(user)
        .then(resp => {
          const token = resp.data.data.auth;
          const user = resp.data.data;
          if (token != undefined || token != "") {
            localStorage.setItem("auth_token", token);
            console.log(resp.data.data);
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
  confirmPin({ commit }, data) {
    const email = this.state.user.email;
    //   axios({ url: `${base_url}/api/auth/verify/${email}/${code}`, data:code,email, method: 'PATCH' })
    verifyUser(data).then(resp => {
      console.log(resp.data.data);
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
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  currentUser: state => state.user,
  user_token: state => state.token,
  emailStatus: state => state.user.email_verified
};

const namespaced = true;
export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
