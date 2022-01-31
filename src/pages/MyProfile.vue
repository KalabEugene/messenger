<template>
  <div class="container__my__profile">
    <Header />
    <div v-if="!loading" class="box__my__profile">
      <v-card class="mx-auto" width="900" tile>
        <v-img
          max-width="100%"
          max-height="300px"
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="200" tile>
                <v-img :src="GET_USER.picture"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    {{ GET_USER.nickname }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-3">Network Engineer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      <v-card class="mx-auto pa-4" width="900" tile>
        <h3>About myself</h3>
        <p v-if="!GET_USER.about">Tell about yourself...</p>
        <p>{{ GET_USER.about }}</p>
        <v-textarea
          class="mt-12"
          background-color="grey lighten-2"
          color="cyan"
          label="Text"
          v-model="userInfo.about"
        ></v-textarea>
        <v-btn
          color="success"
          :loading="loading"
          @click.prevent="addInfo(userInfo)"
          >Add info</v-btn
        >
      </v-card>
      <v-card class="mx-auto pa-4" width="900" tile>
        <h3>Here you can change your nickname</h3>
        <v-text-field
          label="Enter a new nickname..."
          v-model="userInfo.nickname"
          hide-details="auto"
        ></v-text-field>
        <v-btn
          class="mt-6"
          color="success"
          :loading="loading"
          @click.prevent="addInfo(userInfo)"
          >Add nickname</v-btn
        >
      </v-card>
    </div>
    <div v-else class="mx-auto">
      <v-container
        ><v-layout class="d-flex justify-center"
          ><v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
          ></v-progress-circular></v-layout
      ></v-container>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      userInfo: {
        about: "",
        nickname: "",
      },
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["GET_USER", "GET_LOADING"]),
    loading() {
      return this.GET_LOADING;
    },
  },
  methods: {
    ...mapActions(["ADD_INFO", "GET_USER_DB"]),
    addInfo(info) {
      this.ADD_INFO(info);
    },
  },
};
</script>

<style scoped>
.container__my__profile {
  height: 100%;
  max-width: 100%;
  background-color: rgb(202, 246, 255);
}
.box__my__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}
</style>
