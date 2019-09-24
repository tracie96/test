import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import general from "./modules/general";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    general
  },
  plugins: [createPersistedState()],
  strict: debug
});
