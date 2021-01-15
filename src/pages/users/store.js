import * as api from './network'

export const userStore = {
    namespaced: true,

    state: () => ({
        items: [],
        profile: []
    }),

    mutations: {
        setItems(state, items) {
            state.items = items
        },
        setProfile(state, profile) {
            state.profile = profile
        }
    },

    actions: {
        loadItems({ commit }) {
            return new Promise((resolve, reject) => {
                try {
                    api.getUsers()
                    .then(item => {
                        commit('setItems', item)
                        resolve(item)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        },

        loadProfile({ commit }, { enrollment }) {
            return new Promise((resolve, reject) => {
                try {
                    api.userProfile(enrollment)
                    .then(item => {
                        commit('setProfile', item)
                        resolve(item)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}