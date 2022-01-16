<template>
  <div class="containerr">
    <Header />
    <div class="image__box">
      <img
        class="background__profile"
        src="@/assets/images/1579682557_22.jpg"
      />
    </div>
    <main>
      <div class="main__container">
        <div class="popular__posts">
          <h3>Popular posts</h3>
        </div>
        <div class="main__tape">
          <div class="post__box" v-for="post in POSTS" :key="post._id">
            <v-card class="mx-auto mb-4" color="#6e3cbc" dark max-width="900">
              <v-card-title class="d-flex justify-space-between">
                <div class="d-flex">
                  <v-img
                    max-height="30"
                    max-width="30"
                    src="../assets/Logo.png"
                  ></v-img>
                  <span class="ml-2 text-h6 font-weight-light">Pekker</span>
                </div>
                <v-btn
                  class="btn_close"
                  elevation="2"
                  icon
                  outlined
                  small
                  v-if="GET_USER.userId === post.userId"
                  @click="getPostWithId(post._id)"
                  >X</v-btn
                >
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                {{ post.text }}
              </v-card-text>
              <LazyImg :fileName="post.fileName"></LazyImg>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      :src="post.srcImg"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ post.userName }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-btn
                      icon
                      color="pink"
                      @click="like(post._id, post.likes)"
                    >
                      <v-icon class="mr-1"> mdi-heart </v-icon>
                    </v-btn>
                    <span class="subheading mr-2">{{ post.likes }}</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1"> mdi-share-variant </v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </div>
        </div>
        <div class="box__friends">
          <h3>Friends</h3>
        </div>
      </div>
    </main>
  </div>
</template>

/* */
<script>
import Header from "../components/Header.vue";
import { mapActions, mapGetters } from "vuex";
import LazyImg from "../components/LazyImg.vue";
export default {
  data() {
    return {
      counter: null,
    };
  },
  components: {
    Header,
    LazyImg,
  },
  computed: {
    ...mapGetters(["POSTS", "GET_USER"]),
  },
  methods: {
    ...mapActions([
      "GET_POSTS",
      "DELETE_POST",
      "UPDATE_POSTS_LIKES",
      "DOWNLOAD_FILE",
    ]),
    getPostWithId(id) {
      return this.DELETE_POST(id);
    },
    like(id, likes) {
      this.counter = likes + 1;
      return this.UPDATE_POSTS_LIKES({ id: id, likes: this.counter });
    },
  },
  created() {
    this.GET_POSTS();
  },
};
</script>

<style scoped>
.image__box {
  width: 100%;
  max-height: 350px;
}
.background__profile {
  width: 100%;
  max-height: 350px;
}
.main__container {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #d5f2f8;
  padding-top: 20px;
}
main {
  height: 100%;
}
.popular__posts {
  width: 300px;
  min-height: 450px;
  background-color: #ecf3f5;
  box-shadow: 0 0 10px 5px #b6d8df;
  margin: 0 10px;
  padding: 20px 20px;
  color: #6e3cbc;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
}
.box__friends {
  width: 300px;
  min-height: 450px;
  background-color: #ecf3f5;
  box-shadow: 0 0 10px 5px #b6d8df;
  margin: 0 10px;
  padding: 20px 20px;
  color: #6e3cbc;
  font-family: "Dosis", sans-serif;
}
.main__tape {
  width: 900px;
  min-height: 500px;
  transform: translateY(-100px);
  background-color: #ecf3f5;
  box-shadow: 0 0 5px 5px #b6d8df;
  margin: 0 10px;
  padding: 20px 20px;
  color: #6e3cbc;
  font-family: "Dosis", sans-serif;
}
.post {
  padding: 10px;
  margin-bottom: 20px;
}
.panel_post {
  display: flex;
  justify-content: space-around;
}
.block__user {
  display: flex;
  align-items: center;
}
.name_user {
  margin-left: 15px;
  width: 100%;
}
.message_user {
  font-size: 24px;
}
.btn_close {
  color: black;
  font-size: 18px;
}
</style>
