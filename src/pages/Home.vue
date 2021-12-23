<template>
  <div>
    <Header/>
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
          <div class="post" v-for="post in POSTS" :key="post._id">
            <div class="block__user">
              <v-avatar>
                <img
                  :src= post.srcImg
                  alt="Photo"
                />
              </v-avatar>
              <div class="name_user d-flex justify-space-between">
                <h3>{{ post.userName }}</h3>
                <v-btn
                class="btn_close"
                elevation="2"
                icon
                outlined
                small
                @click="getPostWithId(post._id)"
                >X</v-btn>
              </div>
            </div>
            <div class="message_user">
              <p>{{ post.text }}</p>
            </div>
            <hr />
            <div class="panel_post">
              <v-btn icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon color="blue">
                <v-icon>mdi-message</v-icon>
              </v-btn>
              <v-btn icon color="yellow">
                <v-icon>mdi-star</v-icon>
              </v-btn>
              <v-btn icon color="green">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </div>
            <hr />
          </div>
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
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    Header,
  },
  computed: {
    ...mapGetters([
      'POSTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_POSTS',
      'DELETE_POST'
    ]),
    getPostWithId(id){
      return this.DELETE_POST(id)
      
    }
  },
  mounted() {
    this.GET_POSTS()
  },
  updated() {
    this.GET_POSTS()
  }
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #d5f2f8;
  padding-top: 20px;
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
.btn_close{
  color: black;
  font-size: 18px;
}
</style>
