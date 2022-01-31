<template>
    <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="currentPage"
              class="my-4"
              :length="allPages"
              @input="onPageChange"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: [
    'allFiles', 'item'
  ],
    data () {
        return {
            currentPage: 1
        }
    },
    computed: {
        allPages(){
          return Math.ceil(this.allFiles / this.item)
        }
    },
    methods: {
        onPageChange(){
            let page = this.currentPage
            this.$emit('page-chenged', page)
        }
    },
}
</script>

<style scoped>
    
</style>