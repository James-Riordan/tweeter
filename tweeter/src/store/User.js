export const UserModule = {
    namespaced: true,

    store: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
 
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user)
        }
    }
}
