import Vue from 'vue'
import HomePage from './components/HomePage'
import Menu from './components/Menu'
import Admin from './components/Admin'
import PersonName from './components/PersonName'
import Login from './components/Login'
import Register from './components/Register'


export default [
  { path: '/', component: HomePage },
  { path: '/menu', component: Menu },
  { path: '/admin', component: Admin },
  { path: '/personname', component: PersonName },
  { path: '/login', component: Login },
  { path: '/register', component: Register },

]
