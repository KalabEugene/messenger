<template>
  <header>
    <div class="header__container">
      <div class="heading__box">
        <img class="logo" src="../assets/Logo.png" alt="" /><router-link
          class="heading"
          to="/"
          >Pekker</router-link
        >
      </div>
      <div class="nav__bar">
        <ul class="nav__bar__list">
          <li>
            <div class="my-2">
              <v-btn
                color="warning"
                dark
                :to="'/newpost'"
                v-if="isUserLoggedIn"
              ><v-icon left>
                mdi-pencil
              </v-icon>
                NEW POST
              </v-btn>
            </div>
          </li>
          <router-link tag="li" class="nav__link" to="/" v-if="isUserLoggedIn"
            ><v-btn
              color="#b8e4f0"
              normal
            >
              <v-icon color="#6e3cbc">mdi-home</v-icon>
            </v-btn></router-link
          >
          <router-link
            tag="li"
            class="nav__link"
            to="/login"
            v-if="!isUserLoggedIn"
            ><a>Login</a></router-link
          >
          <!-- <router-link
            tag="li"
            class="nav__link"
            to="/profile"
            v-if="isUserLoggedIn"
            ><a>My Profile</a></router-link
          > -->
          <li v-if="isUserLoggedIn">
            <template>
              <div class="text-center">
                <v-menu offset-y mt-n10>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon
                      ><v-avatar
                        color="blue"
                        size="43"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <img :src="GET_USER.srcImg" alt="Photo" />
                      </v-avatar>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <v-btn :to="item.link" @click="item.action"><v-icon class="mr-2">{{item.icon}}</v-icon>{{
                        item.title
                      }}</v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          title: "My profile",
          link: "/profile",
          action: "null",
          icon: "mdi-account"
        },
        {
          title: "My posts",
          link: "/myposts",
          action: "null",
          icon: "mdi-message"
        },
        {
          title: "Logout",
          action: this.userIsLogOut,
          icon: "mdi-logout"
        },
      ],
    };
  },
  methods: {
    userIsLogOut() {
      this.$store.dispatch("LOGOUT_USER");
      this.$router.push("/landing");
    },
  },
  computed: {
    ...mapGetters(["IS_USER_LOGGED_IN", "GET_USER"]),
    isUserLoggedIn() {
      return this.IS_USER_LOGGED_IN;
    },
  },
};
</script>

<style scoped>
.header__container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6e3cbc;
  padding: 0 50px;
}
.heading {
  color: #b8e4f0;
  text-decoration: none;
  font-size: 24px;
  font-family: "Dosis", sans-serif;
  margin-left: 5px;
}
.heading__box {
  display: flex;
  align-items: center;
}
.logo {
  max-height: 30px;
  max-width: 30px;
}
.nav__bar__list {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  align-items: center;
}
.nav__link a {
  text-decoration: none;
  color: #b8e4f0;
  border: 1px solid #b8e4f0;
  padding: 10px 10px;
  font-family: "Dosis", sans-serif;
}
.nav__link:hover {
  color: white;
}
.nav__link a:active {
  color: #6e3cbc;
  background-color: #b8e4f0;
}
.nav__bar {
  width: 600px;
}
</style>
