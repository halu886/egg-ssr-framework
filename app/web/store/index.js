'use strict';

import Vuex from "vuex"

const vuex = Vuex.Store({
    state:{
        recommend:[],
        main:null,
        top:[],
        bottom:null,
    },
    mutations:{
        updateRecommend(state,recommend){
            state.recommend = recommend;
        },
        updateMain(state,main){
            state.main = main;
        },
        udpateTop(state,top){
            state.top = top;
        },
        updateBottom(state,bottom){
            state.bottom = bottom;
        }
    },
    actions:{
        async updateTop({commit},{name}){
            // return commit("udpateTop",top);
            const top = 'top' + (await api.getTop());
            return top;
        }
    }
})