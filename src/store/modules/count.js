// initial state
import {commit} from "lodash/seq";

const state = () => ({
    count: 5
})

// getters
const getters = {}

// actions
const actions = {
    async increment({commit}){
        commit('increment')
    }
}

// mutations
const mutations = {
    increment(state){
        state.count++
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}