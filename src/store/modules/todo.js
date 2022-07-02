// initial state
const state = () => ({
    all: []
})

// getters
const getters = {
    getById(state){
        return function(id){
            return state.all.find(e=>e.id===id)
        }
    }
}

// actions
const actions = {
    // 加载数据
    async loadData ({ commit }) {
        commit('setTodoLists', [])
    },
    // 更具ID删除数据
    async deleteById({commit},id){
        commit('delTodoById',id)
    },
    async updateById({commit},obj){
        commit('updateTodoById',obj)
    }
}
// mutations
const mutations = {
    setTodoLists(state,arr){
        state.all=arr
    },
    delTodoById(state,id){
        state.all.splice(state.findIndex((element)=>element.id==id),1,"")
    },
    updateTodoById(state,obj){
        state.all.splice(state.findIndex((element)=>element.id==obj.id),1,obj)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}