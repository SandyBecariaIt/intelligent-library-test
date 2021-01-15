import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from './pages/books/books'
import Profile from './pages/profile/profile'
import Home from './pages/home/home'
import Users from './pages/users/users'
import AddUser from './pages/users/components/pages/AddUser'
import AddBooks from './pages/books/pages/newBook'
import ActionsLoan from './pages/books/pages/ActionsLoan'
import ActionsReturn from './pages/books/pages/ActionsReturn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
},
  {
      path: '/profile',
      name: 'profile',
      component: Profile
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: AddUser
  },
  {
    path: '/add-books',
    name: 'add-books',
    component: AddBooks
  },
  {
    path: '/actions-loan',
    name: 'actions-loan',
    component: ActionsLoan
  },
  {
    path: '/actions-return',
    name: 'actions-return',
    component: ActionsReturn
  },
]
const router = new VueRouter({
    mode: "history",
    routes
});

export default router