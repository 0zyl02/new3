const state = {
    isLogin: false
};
const getters = {
    isLogin: state => state.isLogin
};
const mutations = {
    setIsLogin: (state, loginState) => state.isLogin = loginState
};
const actions = {
    setIsLoginAsync: ({ commit }, loginState) => commit("setIsLogin", loginState)
};

export default {
    state, getters, mutations, actions
}