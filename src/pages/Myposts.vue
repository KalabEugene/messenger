<template>
    <div class="container__my__post">
        <Header/>
        <div class="box__my__post"
        v-for="post in MY_POSTS" :key = post._id>
            <p class="text__post">{{ post.text }}</p>
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
      'DELETE_POST'
    ]),
    }, 
}
</script>

<style scoped>
    .container__my__post {
        height: 100%;
        background-color: rgb(202, 246, 255);
    }
    .box__my__post{
        width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>