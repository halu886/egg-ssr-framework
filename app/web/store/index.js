import Vuex from "vuex";
import api from "@api";

const store = new Vuex.store({
  state: {
    renders: []
  },
  mutations: {
    setRenders(state, renders) {
      state.renders = renders;
    }
  },
  actions: {
    async setRenders({ commit }, renders) {
      commit("setRenders", renders);
    }
    // async getRenders({state}) {
    //     if(state.renders){

    //     }
    // }
  }
});

export default store;
