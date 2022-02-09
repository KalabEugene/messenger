<template>
  <div class="container__my__post">
    <Header />
    <div v-if="!loading" class="box__my__post">
      <div class="post__box" v-for="post in POSTS" :key="post._id">
        <v-card class="mx-auto mb-4" color="#6e3cbc" dark max-width="900">
          <v-card-title class="d-flex justify-space-between">
            <div class="d-flex">
              <v-img
                max-height="30"
                max-width="30"
                src="../assets/logo.png"
              ></v-img>
              <span class="ml-2 text-h6 font-weight-light">Pekker</span>
            </div>
            <v-btn
              class="btn_close"
              elevation="2"
              icon
              outlined
              small
              @click="getPostWithId({ postId: post._id, fileId: post.fileId })"
              >X</v-btn
            >
          </v-card-title>
          <v-card-text class="text-h5 font-weight-bold">
            {{ post.text }}
          </v-card-text>
          <div class="img-box ml-4 mr-4">
            <LazyImg :fileId="post.fileId"></LazyImg>
          </div>
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  :src="post.author.picture"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{
                  post.author.nickname
                }}</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-btn icon color="pink" @click="like(post._id, post.likes)">
                  <v-icon class="mr-1"> mdi-heart </v-icon>
                </v-btn>
                <span class="subheading mr-2">{{ post.likes }}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div v-else>
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
    <Pagination
      v-if="this.COUNT_POSTS >= 5"
      :allFiles="this.COUNT_POSTS"
      :item="item"
      @page-chenged="getMyPosts"
    />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import LazyImg from "../components/LazyImg.vue";
import { mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination.vue";

export default {
  data() {
    return {
      page: 1,
      allFiles: 0,
      item: 5,
    };
  },
  components: {
    Header,
    LazyImg,
    Pagination,
  },
  computed: {
    ...mapGetters(["POSTS", "GET_LOADING", "COUNT_POSTS"]),
    loading() {
      return this.GET_LOADING;
    },
  },
  methods: {
    ...mapActions(["DELETE_POST", "GET_MY_POSTS"]),
    getPostWithId(data) {
      this.DELETE_POST(data);
      return this.GET_MY_POSTS();
    },
    getMyPosts(page) {
      return this.GET_MY_POSTS(page);
    },
  },
  created() {
    this.$store.dispatch("GET_MY_POSTS");
  },
};
</script>

<style scoped>
.container__my__post {
  height: 100%;
  background-color: rgb(202, 246, 255);
}
.box__my__post {
  max-width: 100%;
  padding: 20px 20px;
  color: #6e3cbc;
  font-family: "Dosis", sans-serif;
}
.btn_close {
  color: black;
  font-size: 18px;
}
</style>
