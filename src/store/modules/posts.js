import api from "@/api/index.js";

export default {
  state: {
    posts: [],
    popularPosts: [],
    countPosts: null,
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    SET_COUNT_POSTS: (state, count) => {
      state.countPosts = count;
    },
    SET_POPULAR_POSTS: (state, posts) => {
      state.popularPosts = posts;
    },
    ADD_POST: (state, post) => {
      state.posts.push(post);
    },
    REMOVE_POST: (state, post) => {
      state.posts.splice(post, 1);
    },
  },
  actions: {
    async GET_POSTS({ commit }, payload) {
      commit("SET_LOADING", true);
      try {
        const info = await api.get("/posts", {
          params: {
            page: payload,
            limit: 5,
          },
        });
        commit("SET_POSTS", info.data.posts);
        commit("SET_COUNT_POSTS", info.data.count);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
      }
    },

    async GET_MY_POSTS({ commit }, payload) {
      commit("SET_LOADING", true);
      try {
        const info = await api.get("/posts/my", {
          params: {
            page: payload,
            limit: 5,
          },
        });
        commit("SET_POSTS", info.data.posts);
        commit("SET_COUNT_POSTS", info.data.count);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
      }
    },

    async SAVE_POST({ commit }, payload) {
      commit("SET_LOADING", true);
      try {
        const post = await api.post("/posts", payload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        commit("ADD_POST", post);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
      }
    },
    async UPDATE_POST_LIKES(_, payload) {
      try {
        await api.put(`/posts/${payload.post._id}/likes`, payload);
      } catch (error) {
        console.log(error);
      }
    },
    async DELETE_POST({ commit }, data) {
      try {
        await api.delete(`/posts/${data.postId}`);
        if (data.fileId !== undefined) {
          await api.delete(`/gridfs/delete/${data.fileId}`);
        }
        commit("REMOVE_POST", data.postId);
      } catch (error) {
        console.log(error);
      }
    },
    async DOWNLOAD_FILE(_, fileId) {
      try {
        await api.get(`/gridfs/download/${fileId}`);
      } catch (error) {
        console.log(error);
      }
    },
    async GET_POPULAR_POSTS({ commit }) {
      commit("SET_LOADING", true);
      try {
        let posts = await api.get("posts/popular");
        commit("SET_POPULAR_POSTS", posts.data);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    POSTS(state) {
      return state.posts;
    },
    POPULAR_POSTS(state) {
      return state.popularPosts;
    },
    COUNT_POSTS(state) {
      return state.countPosts;
    },
  },
};
