import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import api from "@/api/index.js"

export default {
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async SIGN_IN_USER({ commit, dispatch }) {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      try {
        const auth = getAuth();
        await signInWithPopup(auth, new GoogleAuthProvider());
        const idToken = await auth.currentUser.getIdToken(true);
        const res = await api.post("/auth", {
          token: idToken,
        });
        let token = res.data.token;
        dispatch("SET_TOKEN", token);
        commit("SET_USER", res.data._doc);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.message);
        console.log(error);
      }
    },
    SET_TOKEN(_, token) {
      localStorage.setItem("Token", token);
    },
    DELETE_TOKEN() {
      localStorage.removeItem("Token");
    },
    async GET_USER_DB({ commit }, user) {
      commit("SET_LOADING", true);
      try {
        const userSearch = await api.get(
          "/users/me", user
        );
        commit("SET_USER", userSearch.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.message);
      }
    },
    async LOGOUT_USER({ commit, dispatch }) {
      commit("SET_LOADING", true);
      try {
        await firebase.auth().signOut();
        commit("SET_USER", null);
        dispatch("DELETE_TOKEN");
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.message);
      }
    },
    async ADD_INFO({ commit }, info) {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      try {
        await api.put("/users", info);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.message);
      }
    },
  },
  getters: {
    GET_USER(state) {
      return state.user;
    },
    IS_USER_LOGGED_IN(state) {
      return state.user !== null;
    },
  },
};
