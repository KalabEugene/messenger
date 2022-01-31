<template>
  <div>
    <v-toolbar color="#6e3cbc">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <img class="logo" src="../assets/Logo.png" alt="" />
      <v-toolbar-title class="ml-3"
        ><router-link class="heading" to="/"
          >Pekker</router-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn
        class="btn__new__post ml-6"
        color="warning"
        dark
        :to="'/newpost'"
        v-if="isUserLoggedIn"
        ><v-icon left> mdi-pencil </v-icon>
        NEW POST
      </v-btn>
      <router-link class="nav__link" to="/" v-if="isUserLoggedIn"
        ><v-btn class="btn__home ml-6" color="#b8e4f0" normal>
          <v-icon color="#6e3cbc">mdi-home</v-icon>
        </v-btn></router-link
      >
      <router-link class="nav__link" to="/login" v-if="!isUserLoggedIn"
        ><v-btn color="#b8e4f0" normal>
          <v-icon color="#6e3cbc">mdi-login</v-icon>
        </v-btn></router-link
      >
      <div class="text-center ml-6" v-if="isUserLoggedIn">
        <v-menu offset-y mt-n10>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon
              ><v-avatar color="blue" size="43" v-bind="attrs" v-on="on">
                <img :src="GET_USER.picture" alt="Photo" />
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-btn :to="item.link" @click="item.action"
                ><v-icon class="mr-2">{{ item.icon }}</v-icon
                >{{ item.title }}</v-btn
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="accent-4"
      color="#6e3cbc"
      dark
      temporary
    >
      <v-list>
        <div class="ml-3 mb-3 mt-1 d-flex align-center">
          <img class="logo" src="../assets/Logo.png" alt="" /><router-link
            class="heading ml-3"
            to="/"
            >Pekker</router-link
          >
        </div>
        <hr>
        <v-list-item
          v-for="item in itemsDrawer"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="userIsLogOut">
            <v-icon class="mr-2">mdi-logout</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
  <!-- <header>
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
              <v-btn color="warning" dark :to="'/newpost'" v-if="isUserLoggedIn"
                ><v-icon left> mdi-pencil </v-icon>
                NEW POST
              </v-btn>
            </div>
          </li>
          <router-link tag="li" class="nav__link" to="/" v-if="isUserLoggedIn"
            ><v-btn color="#b8e4f0" normal>
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
                        <img :src="GET_USER.picture" alt="Photo" />
                      </v-avatar>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <v-btn :to="item.link" @click="item.action"
                        ><v-icon class="mr-2">{{ item.icon }}</v-icon
                        >{{ item.title }}</v-btn
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </header> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "My profile",
          link: "/profile",
          action: "null",
          icon: "mdi-account",
        },
        {
          title: "My posts",
          link: "/myposts",
          action: "null",
          icon: "mdi-message",
        },
        {
          title: "Logout",
          action: this.userIsLogOut,
          icon: "mdi-logout",
        },
      ],
      itemsDrawer: [
        {
          title: "Home",
          link: "/",
          icon: "mdi-home",
        },
        {
          title: "New post",
          link: "/newpost",
          icon: "mdi-pencil",
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
.heading {
  color: #b8e4f0;
  text-decoration: none;
  font-size: 24px;
  font-family: "Dosis", sans-serif;
}
.heading__box {
  display: flex;
  align-items: center;
}
.logo {
  max-height: 30px;
  max-width: 30px;
}
@media screen and (max-width: 960px) {
  .btn__new__post {
    display: none;
  }
  .btn__home {
    display: none;
  }
}
</style>
