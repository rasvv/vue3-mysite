<template>
  <div>
    <div class="buttons">
      <v-btn @click="onSetView('grid')" class="primary">Назад</v-btn>
    </div>
    <v-carousel width="95vw" height="100%">
      <v-carousel-item
        v-for="n in photosCount"
        :key="n"
        :src="require(`@/assets/img/${path}/${n}.${extension}`)"
        width="95vw"
        height="100%"
        contain
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
      'getPhotoCurrentPage',
    ]),
  },
  methods: {
    ...mapActions(['updateView']),
    onSetView(view) {
      this.updateView(view);
    },
    onGetPhotoCurrentPage() {
      console.log(this.getPhotoCurrentPage.count);
      this.photosCount = this.getPhotoCurrentPage.count;
      this.path = this.getPhotoCurrentPage.link;
      console.log(this.getPhotoCurrentPage.link);
      // this.extension = this.getPhotoCurrentPage.extension
    },
  },
  created() {
    this.onGetPhotoCurrentPage();
  },
};
</script>

<style lang="sass">
// .v-main__wrap
//   max-width: 90vw
</style>
