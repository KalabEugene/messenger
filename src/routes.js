import VueRouter from 'vue-router'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'


export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/profile',
            component: MyProfile,
        },
    ],
    mode: 'history'
})