const state = {
    menu: {}
};
const getters = {
    menu: state => state.menu
};
const mutations = {
    setMenu: (state, pizza) => state.menu = pizza
};
const actions = {
    setMenuAsync: ({ commit }, pizza) => commit("setMenu", pizza)
};

export default {
    state, getters, mutations, actions
}