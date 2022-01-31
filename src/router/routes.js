import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MyProfile from '../pages/MyProfile'
import Landing from '../pages/Landing'
import MyPosts from '../pages/Myposts'
import NewPost from '../pages/NewPost'

export default new VueRouter({
    routes: [
        {
            path: '/landing',
            component: Landing,
        },
        {
            path: '',
            component: Home,
       },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/profile',
            component: MyProfile,
        },
        {
            path: '/myposts',
            component: MyPosts,
        },
        {
            path: '/newpost',
            component: NewPost,
        },
        
    ],
    mode: 'history'
})
