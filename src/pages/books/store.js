import * as api from './network'

export const booksStore = {
    namespaced: true,

    state: () => ({
        items: []
    }),

    mutations: {
        setItems(state, items) {
            state.items = items
        }
    },

    actions: {
        loadItems({ commit }) {
            return new Promise((resolve, reject) => {
                try {
                    api.getBooks()
                    .then(item => {
                        commit('setItems', item)
                        resolve(item)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}