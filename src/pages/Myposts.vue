<template>
    <div class="container__my__post">
        <Header/>
        <div class="box__my__post"
        v-for="post in MY_POSTS" :key = post._id>
            <div class="block__user">
              <div class="name_user d-flex justify-space-between">
                <h3>{{ post.userName }}</h3>
                <v-btn
                class="btn_close"
                elevation="2"
                icon
                outlined
                small
                @click="getPostWithId(post._id), updatePosts()"
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
                <p>{{ post.likes }}</p>
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
        </div>
    </div>

        
</template> 
<script>
import Header from "../components/Header.vue";
import {mapGetters, mapActions} from 'vuex'
export default {
    components:{
        Header
    },
    computed:{
        ...mapGetters([
            "MY_POSTS"
        ])
    },
    methods: {
    ...mapActions([
      'GET_POSTS',
      'DELETE_POST',
      'GET_USER_DB'
    ]),
    getPostWithId(id){
      return this.DELETE_POST(id)
    },
    updatePosts(){
      return this.GET_POSTS()
    },
    },
    mounted(){
        this.$store.dispatch('GET_USER_DB'),
        this.$store.dispatch('GET_POSTS')
    }
}
</script>

<style scoped>
    .container__my__post {
        height: 100%;
        background-color: rgb(202, 246, 255);
    }
    .box__my__post{
        margin: 0 auto;
        max-width: 900px;
        padding: 20px 20px;
        color: #6e3cbc;
        font-family: "Dosis", sans-serif;
    }
    .post {
        padding: 10px;
        margin-bottom: 20px;
    }
    .block__user {
        display: flex;
        align-items: center;
    }
    .panel_post {
        display: flex;
        justify-content: space-around;
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