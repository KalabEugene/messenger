<template>
    <header>
        <div class="header__container">
            <div class="heading__box"><img class="logo" src="../assets/Logo.png" alt=""><router-link class="heading" to="/">Pekker</router-link></div>
            <div class="nav__bar">
                <ul class="nav__bar__list">
                    <li><div class="my-2">
                        <v-btn
                        color="warning"
                        dark
                        :to="'/newpost'"
                        v-if="isUserLoggedIn"
                        >
                        + NEW POST
                        </v-btn>
                    </div></li>
                    <router-link tag="li" class="nav__link" to="/" v-if="isUserLoggedIn"><a>Home</a></router-link>
                    <router-link tag="li" class="nav__link" to="/login" v-if="!isUserLoggedIn"><a>Login</a></router-link>
                    <router-link tag="li" class="nav__link" to="/profile" v-if="isUserLoggedIn"><a>My Profile</a></router-link>
                    <li v-if="isUserLoggedIn"><template>
                        <div class="text-center" >
                            <v-menu offset-y
                            mt-n10>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                            icon
                                            ><v-avatar 
                                            color="blue"
                                            size="43"
                                            v-bind="attrs"
                                            v-on="on">
                                                    <img
                                                        :src='GET_USER.photoURL'
                                                        alt="Photo">
                                                </v-avatar>
                                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                >
                                <v-btn 
                                :to="item.link" 
                                @click="item.action"
                                >{{ item.title }}</v-btn>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                        </div>
                        </template></li>
                </ul>
                
            </div>
        </div>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return{
      items: [{
        title: 'My posts',
        link: '/myposts',
        action: 'null'
      },
      {
        title: 'Logout',
        action: this.userIsLogOut,
      }
    ]
    }
},
    methods: {
        userIsLogOut(){
         this.$store.dispatch('LOGOUT_USER')
         this.$router.push('/landing')
        }
    },
    computed: {
        ...mapGetters([
        'IS_USER_LOGGED_IN',
        'GET_USER'
        ]),
        isUserLoggedIn () {
            return this.IS_USER_LOGGED_IN
        },
        
    }
}
</script>

<style scoped>
    .header__container{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #6E3CBC;
        padding: 0 50px;
    }
    .heading{
        color: #B8E4F0;
        text-decoration: none;
        font-size: 24px;
        font-family: 'Dosis', sans-serif;
    }
    .heading__box{
        display: flex;
        align-items: center;
    }
    .logo{
        max-height: 60px;
        max-width: 60px;
        
    }
    .nav__bar__list{
        display: flex;
        justify-content: space-around; 
        list-style-type: none;  
        align-items: center;
          
    }
    .nav__link a{
        text-decoration: none;
        color: #B8E4F0;
        border: 1px solid #B8E4F0 ;
        padding: 10px 10px;
        font-family: 'Dosis', sans-serif;
    }
    .nav__link:hover{
        color: white;
    }
    .nav__link a:active{
        color: #6E3CBC;
        background-color: #B8E4F0;
    }
    .nav__bar{
       width: 600px;
    }
</style>
