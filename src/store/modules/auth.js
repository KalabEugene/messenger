import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axios from "axios";

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
        const idToken = await auth.currentUser.getIdToken(true)
        const res = await axios.post(
          "http://localhost:3000/users",
          {token: idToken}
        );
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
      axios.defaults.headers.common["Authorization"] = token;
    },
    DELETE_TOKEN() {
        localStorage.removeItem("Token");
     },
    async GET_USER_DB({ commit }, user) {
      commit("SET_LOADING", true);
      const userSearch = await axios.get(
        "http://localhost:3000/users/me",
        { headers: { Authorization: localStorage.getItem("Token") } },
        user
      );
      commit("SET_USER", userSearch.data);
      commit("SET_LOADING", false);
    },
    async LOGOUT_USER({ commit, dispatch}) {
      try {
        await firebase.auth().signOut();
        commit("SET_USER", null);
        dispatch('DELETE_TOKEN');
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.message);
      }
    },
    async ADD_INFO({ commit, dispatch}, info) {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      await axios.put(
        "http://localhost:3000/users/",
        info
      );
      dispatch("UPDATE_POSTS", {nickName: info.nickName})
      commit("SET_LOADING", false);
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
