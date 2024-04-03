<template>
  <v-container fluid class="d-flex justify-center">
    <PhotosLinks v-if="view === 'links'" />
    <Photosgrid v-if="view === 'grid'" />
    <PhotosSlides v-if="view === 'slides'" />
    <!-- <v-btn @click="onSetView('links')">Refresh</v-btn> -->
  </v-container>
</template>

<script>
import PhotosLinks from '../components/PhotosLinks.vue';
import Photosgrid from '../components/Photosgrid.vue';
import PhotosSlides from '../components/PhotosSlides.vue';
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  components: {
    PhotosLinks,
    Photosgrid,
    PhotosSlides,
  },
  data: () => ({
    cols: 'auto',
  }),
  computed: {
    ...mapGetters([
      'getView',
      'getAlbum',
      // 'getPhotoCurrentPage'
    ]),
    ...mapState(['view']),
  },
  methods: {
    ...mapActions([
      // 'updatePhotoCurrentPage',
      'updateView',
    ]),
    onSetView(view) {
      this.view = view;
      this.updateView(view);
    },
    // onGetView () {
    // 	this.view = this.getView
    // 	// console.log('onGetView: '+this.view);
    // },
    onGetAlbum() {
      this.album = this.getAlbum;
      console.log('Photos.vue - onGetView: ' + this.album);
    },
  },
  // mounted() {
  // 	this.onGetView()
  // },
  // beforeUpdate() {
  // 	this.onGetAlbum()
  // }
};
</script>

<style lang="sass"></style>
