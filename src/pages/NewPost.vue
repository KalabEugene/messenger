<template>
  <div class="container__post">
    <Header />
    <v-snackbar
      :timeout="3000"
      :value="this.snackbar.value"
      left
      color="green"
      shaped
    >
      New post created
      <a class="link__snackbar" href="/myposts">Click to see new post</a>
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
            <v-btn color="orange" class="ma-2 white--text" @click="loader">
              Upload
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
            <input
              type="file"
              style="display: none"
              ref="file"
              @change="handleFileUpload()"
            />
            <v-btn
              :loading="loading()"
              :disabled="post.text.length === 0"
              color="success"
              type="submit"
              @click.prevent="addPost()"
              >Publish</v-btn
            >
            <v-img :src="post.image" class="image__upload"></v-img>
          </v-form>
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
        image: "",
      },
      snackbar: {
        value: false,
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    ...mapActions(["SAVE_POST"]),
    async addPost() {
      let formData = new FormData();
      formData.append("text", this.post.text);
      formData.append("file", this.post.file);
      await this.$store.dispatch("SAVE_POST", formData);
      this.snackbar.value = true;
      this.post.text = "";
      this.post.image = "";
    },
    handleFileUpload() {
      this.post.file = this.$refs.file.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.post.image = reader.result;
      };
      reader.readAsDataURL(this.post.file);
    },
    loader() {
      this.$refs.file.click();
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
.link__snackbar {
  margin-left: 10px;
  color: aqua;
}
.image__upload {
  max-width: 400px;
  max-height: 500px;
}
@media screen and (max-width: 600px) {
  .image__upload {
    max-width: 300px;
    max-height: 400px;
  }
}
</style>
