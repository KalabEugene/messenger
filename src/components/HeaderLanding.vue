<template>
    <header>
        <div class="header__container">
            <div class="heading__box"><img class="logo" src="../assets/Logo.png" alt=""><router-link class="heading" to="/">Pekker</router-link></div>
            <div class="nav__bar">
                <ul class="nav__bar__list">
                    <router-link tag="li" class="nav__link" to="/"><a>Home</a></router-link>
                    <router-link tag="li" class="nav__link" to="/login"><a>Login</a></router-link>
                    <router-link tag="li" class="nav__link" to="/profile"><a>My Profile</a></router-link>
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
        padding: 0 50px;
    }
    .heading__box{
        display:flex;
        align-items: center;
    }
    .heading{
        color: #ffffff;
        text-decoration: none;
        font-size: 24px;
        font-family: 'Dosis', sans-serif;
    }
    .logo{
        max-height: 60px;
        max-width: 60px;
    }
    .nav__bar__list{
        display: flex;
        justify-content: space-between; 
        list-style-type: none;  
        align-items: center;
          
    }
    .nav__link a{
        text-decoration: none;
        color: #ffffff;
        border: 1px solid #ffffff ;
        padding: 10px 10px;
        font-family: 'Dosis', sans-serif;
    }
    .nav__link:hover{
        color: ffffff;
    }
    .nav__link a:active{
        color: #6E3CBC;
        background-color: #ffffff;
    }
    .nav__bar{
       width: 400px;
    }
</style>