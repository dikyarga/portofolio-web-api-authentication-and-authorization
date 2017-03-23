import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import User from './components/user/User.vue'



export const routes = [
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path : '', component: Home},
  { path : '/users', component: User}
]
