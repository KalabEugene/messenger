<template>
    <header>
        <div class="header__container">
            <div class="heading__box"><router-link class="heading" to="/">Messenger</router-link></div>
            <div class="nav__bar">
                <ul class="nav__bar__list">
                    <router-link tag="li" class="nav__link" to="/"><a>Home</a></router-link>
                    <router-link tag="li" class="nav__link" to="/register"><a>Register</a></router-link>
                    <router-link tag="li" class="nav__link" to="/login"><a>Login</a></router-link>
                    <router-link tag="li" class="nav__link" to="/profile"><a>My Profile</a></router-link>
                    <li><div class="my-2">
            <v-btn
              color="primary"
              small
              dark
            >
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </div></li>
                </ul>
                
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
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
    .nav__bar__list{
        display: flex;
        justify-content: space-between; 
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
       width: 400px;
    }
</style>
