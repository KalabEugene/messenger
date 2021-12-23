import axios from "axios";

export default {
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    ADD_POST: (state, post) => {
      state.posts.push(post);
    },
    REMOVE_POST: (state, post) => {
      state.posts.slice(post, 1);
    },
  },
  actions: {
    async GET_POSTS({ commit }) {
      try {
        const posts = await axios.get("http://localhost:3000/posts");
        commit("SET_POSTS", posts.data);
      } catch (error) {
        console.log(error);
      }
    },
    async SAVE_POST({ commit }, post) {
      try {
        await axios.post("http://localhost:3000/posts", post);
        commit("ADD_POST", post);
      } catch (error) {
        console.log(error);
      }
    },
    async DELETE_POST({ commit }, id) {
      try {
        await axios.delete("http://localhost:3000/posts/" + id);
        commit("REMOVE_POST", id);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    POSTS(state) {
      return state.posts;
    },
    MY_POSTS(state, getters) { 
      return state.posts.filter(post => {
        return post.userId === getters.GET_USER.uid})
    },
  },
};
