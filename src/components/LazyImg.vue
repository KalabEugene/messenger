<template>
  <v-img
    :src="downloadFile(fileId)"
    max-width="400"
    max-height="600"
    class="mx-auto"
  ></v-img>
</template>
<script>
export default {
  props: ["fileId"],
  methods: {
    downloadFile(fileId) {
      if (fileId !== undefined) {
        this.$store.dispatch("DOWNLOAD_FILE", fileId);
        let URL = "https://api.pekker.me/gridfs/download/" + fileId;
        return URL;
      }
    },
  },
};
</script>
<style scoped></style>
