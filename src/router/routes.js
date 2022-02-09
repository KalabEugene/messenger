import VueRouter from "vue-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import Landing from "../pages/Landing";
import MyPosts from "../pages/Myposts";
import NewPost from "../pages/NewPost";

export default new VueRouter({
  routes: [
    {
      path: "/landing",
      component: Landing,
    },
    {
      path: "",
      component: Home,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("Token");
        if (!token) {
          next("/landing");
        }
        next();
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/profile",
      component: MyProfile,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("Token");
        if (!token) {
          next("/login");
        }
        next();
      },
    },
    {
      path: "/myposts",
      component: MyPosts,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("Token");
        if (!token) {
          next("/login");
        }
        next();
      },
    },
    {
      path: "/newpost",
      component: NewPost,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("Token");
        if (!token) {
          next("/login");
        }
        next();
      },
    },
  ],
  mode: "history",
});
