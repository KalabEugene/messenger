<template>
  <v-img
    :src="downloadFile(fileName)"
    max-height="450"
    max-width="500"
    class="mx-auto"
  ></v-img>
</template>
<script>
export default {
  props: ["fileName"],
  methods: {
    downloadFile(fileName) {
      if (fileName !== undefined) {
        this.$store.dispatch("DOWNLOAD_FILE", fileName);
        let URL = "http://localhost:3000/gridfs/download/" + fileName;
        return URL;
      }
    },
  },
};
</script>
<style scoped></style>
