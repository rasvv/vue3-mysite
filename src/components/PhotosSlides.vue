<template>
  <div>
    <div class="buttons">
      <v-btn @click="onSetView('grid')" class="primary">Назад</v-btn>
    </div>
    <v-carousel height="78vh" width="90vw">
      <v-carousel-item v-for = "n in photosCount" :key="n" :src="require(`../assets/img/${path}/${n < 1 ? 1 : n}.${extension}`)"         reverse-transition="fade-transition"
        transition="fade-transition"
        width="95vw"
        max-height="72vh"
        contain>
        <!-- <v-img :src="require(`../assets/img/${path}/${n}.${extension}`)" position="center center" height="350px">
        </v-img> -->
        <!-- {{ `../assets/img/${path}/${n}.${extension}` }} -->
        {{ n }}
      </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    photosCount: 0,
    cols: 'auto',
    path: '',
    extension: 'jpg',
  }),
  computed: {
    ...mapGetters([
      // 'getView'
      'getPhotoCurrentPage'
    ])
  },
  methods: {
    ...mapActions([
      'updateView'
    ]),
    onSetView(view) {
      this.updateView(view)
    },
    onGetPhotoCurrentPage() {
      console.log(this.getPhotoCurrentPage.count);
      this.photosCount = this.getPhotoCurrentPage.count
      this.path = this.getPhotoCurrentPage.link
      console.log(this.getPhotoCurrentPage.link);
      // this.extension = this.getPhotoCurrentPage.extension
    }
  },
  mounted() {
    this.onGetPhotoCurrentPage()
  }
}
</script>

<style lang='sass'>
  // .v-main__wrap
  //   max-width: 90vw

</style>