import api from "@/api/index.js";

export default {
  state: {
    url: "",
  },
  mutations: {
    SET_URL: (state, payload) => {
      console.log(payload);

      state.url = payload;
    },
  },
  actions: {
    async GET_PREMIUM({ commit, state }, payload) {
      try {
        console.log(state.user);
        const info = await api.post("/wayforpay/buy", {
          params: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            price: 1,
          },
        });
        commit("SET_URL", info.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    GET_URL(state) {
      return state.url;
    },
  },
};
