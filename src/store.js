import Vue from 'vue'
import Vuex from 'vuex'
import { booksStore } from './pages/books/store'
import { userStore } from './pages/users/store'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        book: booksStore,
        user: userStore
    }
})