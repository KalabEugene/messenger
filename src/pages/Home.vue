<template>
  <div class="container__main">
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
          <h3 class="mb-4">Popular posts</h3>
          <div v-if="!loading" class="container__box">
            <div
              class="post__box"
              v-for="posts in POPULAR_POSTS"
              :key="posts._id"
            >
              <v-card
                class="mx-auto mb-4 d-flex pa-2"
                color="blue darken-2"
                dark
                max-width="100%"
              >
                <v-avatar class="my-auto" color="grey darken-3" size="40">
                  <v-img
                    class="elevation-6"
                    alt="C:\Users\krome\Documents\Web\first-app\src\assets\images\default-person.png"
                    :src="posts.author.picture"
                  ></v-img>
                </v-avatar>
                <div class="text font-weight-bold my-auto ml-3">"{{ posts.text }}"</div>
              </v-card>
            </div>
          </div>
          <div v-else>
            <v-container
              ><v-layout class="d-flex justify-center"
                ><v-progress-circular
                  :size="50"
                  :width="5"
                  color="purple"
                  indeterminate
                ></v-progress-circular></v-layout
            ></v-container>
          </div>
        </div>
        <div class="main__tape">
          <div v-if="!loading" class="container__box">
            <v-card
              class="mx-auto mb-4"
              v-for="post in POSTS"
              :key="post._id"
              color="#6e3cbc"
              dark
              max-width="900"
              max-height="100%"
            >
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
                  v-if="GET_USER._id === post.author._id"
                  @click="
                    getPostWithId({ postId: post._id, fileId: post.fileId })
                  "
                  >X</v-btn
                >
              </v-card-title>
              <v-card-text class="text-h5 font-weight-bold text-wrap">
                "{{ post.text }} "
              </v-card-text>
              <div class="picture__box ml-4 mr-4">
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
                    <v-list-item-title>{{ post.author.nickname }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-btn
                      icon
                      color="pink"
                      @click="like(post)"
                    >
                      <v-icon class="mr-1"> mdi-heart </v-icon>
                    </v-btn>
                    <span class="subheading mr-2">{{ post.likes }}</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
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
          <Pagination :allFiles="this.COUNT_POSTS" :item="item" @page-chenged="getPosts"/>
        </div>
        <div class="box__friends">
          <h3>Friends</h3>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import { mapActions, mapGetters } from "vuex";
import LazyImg from "../components/LazyImg.vue";
import Pagination from "../components/Pagination.vue"
export default {
  data() {
    return {
      counter: null,
      page: 1,
      allFiles: 0,
      item: 5
    };
  },
  components: {
    Header,
    LazyImg,
    Pagination,
  },
  computed: {
    ...mapGetters(["POSTS", "GET_USER", "GET_LOADING", "POPULAR_POSTS", "COUNT_POSTS"]),
    loading() {
      return this.GET_LOADING;
    },
  },
  methods: {
    ...mapActions([
      "GET_POSTS",
      "DELETE_POST",
      "UPDATE_POST_LIKES",
      "DOWNLOAD_FILE",
      "GET_POPULAR_POSTS",
    ]),
    getPostWithId(data) {
      this.DELETE_POST(data);
      return this.GET_POSTS();
    },
    like(post) {
      if (post.isLiked === true) {
        this.counter = post.likes - 1;
        post.likes = this.counter
        this.UPDATE_POST_LIKES({post: post, likes: this.counter})
        return post.isLiked = false
      }
      this.counter = post.likes + 1;
      post.likes = this.counter
      this.UPDATE_POST_LIKES({post: post, likes: this.counter });
      return post.isLiked = true
    },
    getPosts(page){
      return this.GET_POSTS(page);
    },
  },
  created() {
    this.GET_POSTS();
    this.GET_POPULAR_POSTS();
  },

};
</script>

<style scoped>
.picture__box{
  max-width: 90%;
}
.text{
  max-width: 100%;
  font-size: 18px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
}
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
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #d5f2f8;
  padding-top: 20px;
}
main {
  max-height: 100%;
}
.container__box {
  width: 100%;
}
.post__box {
  max-width: 100%;
}
.popular__posts {
  width: 300px;
  height: 800px;
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
  height: 800px;
  background-color: #ecf3f5;
  box-shadow: 0 0 10px 5px #b6d8df;
  margin: 0 10px;
  padding: 20px 20px;
  color: #6e3cbc;
  font-family: "Dosis", sans-serif;
}
.main__tape {
  width: 900px;
  min-height: 600px;
  transform: translateY(-100px);
  background-color: #ecf3f5;
  box-shadow: 0 0 5px 5px #b6d8df;
  margin: 0 10px;
  padding: 20px 20px;
  color: #6e3cbc;
  font-family: "Dosis", sans-serif;
}
.btn_close {
  color: black;
  font-size: 18px;
}
@media screen and ( max-width: 960px) {
.popular__posts {
  display: none;
}
.box__friends{
  display: none;
}
}
@media screen and ( max-width: 600px) {
.v-image{
  width: 300px;
}
}
@media screen and ( max-width: 350px) {
.v-image{
  width: 250px;
}
.v-card{
  width: 300px
}
}
</style>
