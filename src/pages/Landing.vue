<template>
  <div class="container">
    <Headerlanding></Headerlanding>
    <div class="container__landing">
      <div class="heading">
        <h1>PEKKER</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          nostrum quisquam inventore eveniet. Repellendus exercitationem fugit
          pariatur obcaecati.
        </p>
        <div class="my-2">
          <v-btn
            class="btn__start"
            color="purple"
            dark
            large
            elevation="10"
            :to="'/login'"
          >
            Start now
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headerlanding from "../components/HeaderLanding.vue";
export default {
  components: {
    Headerlanding,
  },
};
</script>

<style scoped>
.container {
  max-width: 100%;
  height: 100%;
  background-image: url(../assets/images/thumb-1920-991761.jpg);
}
.container__landing {
  max-width: 100%;
  max-height: 100%;
}
.img__background {
  max-width: 100%;
  max-height: 100%;
}
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
}
.heading p {
  width: 900px;
  text-align: center;
  color: white;
  font-family: "Dosis", sans-serif;
  font-size: 20px;
}
.heading h1 {
  margin-bottom: 30px;
  color: white;
  font-family: "Dosis", sans-serif;
  letter-spacing: 5px;
}
.btn__start {
  font-family: "Dosis", sans-serif;
  margin-top: 50px;
}
</style>
