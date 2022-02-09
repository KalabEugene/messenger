<template>
  <header>
    <div class="header__container">
      <div class="heading__box">
        <img class="logo" src="../assets/logo.png" alt="" /><router-link
          class="heading"
          to="/"
          >Pekker</router-link
        >
      </div>
      <div class="nav__bar">
        <ul class="nav__bar__list">
          <v-btn dark color="#6e3cbc" class="home"
            ><router-link tag="li" class="nav__link" to="/login"
              ><v-icon left> mdi-pencil </v-icon>Home</router-link
            ></v-btn
          >
          <v-btn dark color="#6e3cbc">
            <router-link tag="li" class="nav__link" to="/login"
              ><v-icon left> mdi-login </v-icon>Login</router-link
            >
          </v-btn>
          <v-btn dark color="#6e3cbc" class="account">
            <router-link tag="li" class="nav__link" to="/profile"
              ><v-icon left> mdi-account </v-icon>My Profile</router-link
            >
          </v-btn>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
<style scoped>
.header__container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}
.heading__box {
  display: flex;
  align-items: center;
}
.heading {
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  font-family: "Dosis", sans-serif;
  margin-left: 4px;
}
.logo {
  max-height: 30px;
  max-width: 30px;
}
.nav__bar__list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
}
.nav__link a {
  text-decoration: none;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 10px 10px;
  font-family: "Dosis", sans-serif;
}
.nav__link:hover {
  color: ffffff;
}
.nav__link a:active {
  color: #6e3cbc;
  background-color: #ffffff;
}
.nav__bar {
  width: 400px;
}
@media screen and (max-width: 960px) {
  .home,
  .account {
    display: none;
  }
  .nav__bar__list {
    justify-content: right;
  }
}
</style>
