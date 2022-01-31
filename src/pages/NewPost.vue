<template>
  <div class="container__post">
    <Header />
    <v-snackbar :timeout="3000" :value="this.snackbar.value" left color="green" shaped>
      New post created
    </v-snackbar>
    <div class="new__post__box">
      <div class="list">
        <v-container justify="center" fluid>
          <v-form
            ><v-textarea
              color="purple"
              counter
              maxlength="250"
              label="Text"
              value=""
              v-model="post.text"
            ></v-textarea>
            <v-btn
                color="orange"
                class="ma-2 white--text"
                @click="loader"
              >
                Upload
                <v-icon
                  right
                  dark
                >
                  mdi-cloud-upload
                </v-icon>
              </v-btn>
              <input type="file" style="display: none" ref="file" @change="handleFileUpload()" />
            <v-btn :loading ="loading()" :disabled="post.text.length === 0" color="success" type="submit" @click.prevent="addPost()"
              >Publish</v-btn
            ></v-form
          >
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      post: {
        text: "",
        file: "",
      },
      snackbar: {
        value: false
      }
    };
  },
  components: {
    Header,
  },
  methods: {
    ...mapActions(["SAVE_POST"]),
    addPost() {
      let formData = new FormData();
      formData.append("text", this.post.text);
      formData.append("file", this.post.file);
      this.$store.dispatch("SAVE_POST", formData);
      this.snackbar.value = true;
      this.post.text = "";
    },
    handleFileUpload() {
      this.post.file = this.$refs.file.files[0];
    },
    loader(){
      this.$refs.file.click()
    },
    loading() {
      return this.GET_LOADING;
    },
  },
  computed: {
    ...mapGetters(["GET_LOADING"]),
  },
  
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
  padding: 16px;
}
.list {
  width: 900px;
  max-height: 100%;
}
</style>
