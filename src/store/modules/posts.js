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
      state.posts.splice(post, 1);
    },
  },
  actions: {
    async GET_POSTS({ commit }) {
      try {
        const posts = await axios.get("http://localhost:3000/posts", {
          headers: { Authorization: localStorage.getItem("Token") },
        });
        commit("SET_POSTS", posts.data);
      } catch (error) {
        console.log(error);
      }
    },
    async SAVE_POST({ commit }, post) {
      commit("SET_LOADING", true)
      try {
        await axios.post("http://localhost:3000/posts", post, {
          headers: {
             "Content-Type": "multipart/form-data",
           },
        });
        commit("ADD_POST", post);  
        commit("SET_LOADING", false)
      } catch (error) {
        console.log(error);
      }
    },
    async UPDATE_POSTS({ dispatch }, payload) {
      try {
        await axios.put("http://localhost:3000/posts/info", payload);
        dispatch("GET_POSTS");
      } catch (error) {
        console.log(error);
      }
    },
    async UPDATE_POSTS_LIKES({ dispatch }, payload) {
      try {
        await axios.put("http://localhost:3000/posts/likes", payload);
        dispatch("GET_POSTS");
      } catch (error) {
        console.log(error);
      }
    },
    async DELETE_POST({ commit, dispatch }, id) {
      try {
        await axios.delete("http://localhost:3000/posts/" + id);
        commit("REMOVE_POST", id);
        dispatch("GET_POSTS");
      } catch (error) {
        console.log(error);
      }
    },
    async DOWNLOAD_FILE(_, fileName){
      try {
        await axios.get("http://localhost:3000/gridfs/download/" + fileName);
              } catch (error) {
        console.log(error);
    }}
  },
  getters: {
    POSTS(state) {
      return state.posts;
    },
    MY_POSTS(state, getters) {
      return state.posts.filter((post) => {
        return post.userId === getters.GET_USER.userId;
      });
    },
  },
};
