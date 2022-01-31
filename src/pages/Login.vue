<template>
  <div class="login__container">
    <Header></Header>
    <div class="main__container">
    <div class="login__box">
      <h1 class="heading">Log in to your account</h1>
      <v-btn class="login__google" block large color="#6E3CBC"
      @click='signIn()'
      :loading="loading">
        <v-icon aria-hidden="false" class="mr-4"> mdi-google </v-icon>
        Log in with Google
      </v-btn>
    </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  methods: {
    signIn(){
      this.$store.dispatch('SIGN_IN_USER')
      .then(() => {
        this.$router.push('/')
      })
      .catch(error => console.log(error));
    }
  },
  computed: {
    loading(){
      return this.$store.getters.GET_LOADING
    }
  }
};
</script>

<style scoped>
.login__container {
  max-width: 100%;
  height: 100%;
  background: url("../assets/images/1579682557_22.jpg") no-repeat center center fixed;
  background-size: cover;
}
.main__container{
  margin: 16px;
}
.login__box {
  max-width: 500px;
  height: 300px;
  background-color: rgba(182, 216, 223);
  margin: 20% auto;
  border-radius: 5%;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 5px #b6d8df;
}
.heading {
  color: #6e3cbc;
  text-align: center;
  font-family: "Dosis", sans-serif;
  
}
.login__google {
  color: #b6d8df;
}
</style>
