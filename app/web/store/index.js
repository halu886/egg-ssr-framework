"use strict";

import Vuex from "vuex";
import Vue from "vue";
import api from "../api";

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    state: {
      recommend: [],
      main: null,
      top: [],
      bottom: null
    },
    mutations: {
      updateRecommend(state, recommend) {
        state.recommend = recommend;
      },
      updateMain(state, main) {
        state.main = main;
      },
      udpateTop(state, top) {
        state.top = top;
      },
      updateBottom(state, bottom) {
        state.bottom = bottom;
      }
    },
    actions: {
      async updateTop({ commit }, context) {
        let tops = await api.fetchTop(context);
        tops = tops.map(r => "top" + r);
        commit("updateTop", tops);
      },
      async updateRecommend({ commit }, context) {
        let recommends = await api.context(context);
        recommends = recommends.map(r => "recommend" + r);
        commit("updateRecommend", recommends);
      }
    }
  });
};
