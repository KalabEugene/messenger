<template>
  <div class="container__post">
    <Header />
    <!-- <v-alert
      shaped
      type="success"
      v-if="loading"
      dismissible
    >New post created</v-alert> -->
    <v-snackbar
      :timeout="3000"
      :value="false"
      left
      color="green"
      shaped
    >
      New post created
    </v-snackbar>
    <div class="new__post__box">
      <div class="list">
        <v-container justify="center" fluid>
          <v-form
            ><v-textarea 
              color="purple"
              clearable
              clear-icon="mdi-close-circle"
              label="Text"
              value="Enter a description..."
              v-model="post.text"
            ></v-textarea>
            <v-btn color="success" type="submit" 
            @click.prevent="addPost()"
            >Publish</v-btn></v-form
          >
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
      return {
      post: {
        text: '',
        userName: this.getUser().displayName,
        uid: this.getUser().uid,
        img: this.getUser().photoURL
        }
      }
  },
  components: {
    Header,
  },
  methods: {
    ...mapActions([
      'SAVE_POST'
    ])
    ,
    addPost(){
      return this.$store.dispatch('SAVE_POST', this.post);
    },
    getUser(){
      return this.$store.getters.GET_USER
    }
  },
  computed: {
    ...mapGetters([
        'GET_USER'
        ]),
      }
};
</script>

<style scoped>
.container__post {
  height: 100%;
  background-color: rgb(202, 246, 255);
}
.new__post__box {
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin-top: 50px;
}
.list {
  width: 900px;
  max-height: 100%;
}
</style>
