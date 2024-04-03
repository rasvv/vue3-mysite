<template>
  <v-container class="d-flex align-center">
    <!-- <h3>{{ albumName }}</h3> -->
    <v-row width="100%">
      <v-col cols="12" class="d-flex justify-space-around flex-wrap ma-4">
        <v-hover v-for="card in album" :key="card.title" v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            @click="onSetView(card)"
            class="d-flex flex-column align-center pa-2 ma-4"
            height="44vh"
            width="15vw"
          >
            <v-card-title v-text="card.title" class="text-h5"></v-card-title>
            <v-img
              :src="require(`@/${card.src}`)"
              height="38vh"
              width="13vw"
              position="center center"
              alt="logo"
              :class="{ 'on-hover': hover }"
              class="mb-3"
              cover
            >
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
  // props: {
  // 	view: {ё
  // 		type: String,
  // 		default: ''
  // 	},

  // },
  data: () => ({
    view: '',
    cols: 'auto',
    cards: [],
    albumName: '',
  }),
  computed: {
    ...mapGetters([
      'getView',
      // 'getPhotoCurrentPage',
      'getAlbum',
      'getPhotosLinks',
      'getSitesLinks',
      'getAlbumName',
    ]),
    ...mapState(['album']),
  },
  methods: {
    ...mapActions(['updatePhotoCurrentPage', 'updateView']),
    onGetView() {
      this.view = this.getView;
    },
    onGetPhotosLinks() {
      // this.cards = this.getPhotosLinks
      // this.cards = this.getAlbum
      this.albumName = this.getAlbumName;
      // console.log(this.cards);
      // console.log(this.albumName);
    },
    onSetView(card) {
      this.updatePhotoCurrentPage(card);
      this.updateView('grid');
    },
  },
  // mounted () {
  //   this.onGetPhotosLinks()
  // },
  beforeUpdate() {
    // console.log('beforeUpdate');
    this.onGetPhotosLinks();
  },
};
</script>

<style lang="sass"></style>
