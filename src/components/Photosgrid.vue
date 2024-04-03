<template>
  <v-container class="ma-4" height="95vh">
    <v-row class="buttons">
      <v-btn @click="onSetView('links')" class="primary">Назад</v-btn>
      <v-btn @click="onSetView('slides')" class="primary">Слайды</v-btn>
    </v-row>
    <v-row class="osnova">
      <v-img
        v-if="src !== ''"
        :src="src"
        :lazy-src="src"
        class="full-picture"
        contain
        @click="onClose"
      >
      </v-img>

      <v-row v-if="src === ''" justify="space-around">
        <v-card v-for="n in photosCount" :key="n" :width="400" class="ma-4">
          <v-card class="pa-6">
            <v-card height="550px" class="ma-1 pa-3 d-flex flex-column">
              <v-img
                :src="require(`../assets/img/${path}/${n}.${extension}`)"
                position="center center"
                height="55vh"
                width="25vw"
                alt="logo"
                class="bg"
                cover
                @click="
                  onClickPicture(
                    require(`../assets/img/${path}/${n}.${extension}`)
                  )
                "
              >
              </v-img>
            </v-card>
          </v-card>
        </v-card>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    photosCount: 0,
    cols: 'auto',
    path: '',
    extension: 'jpg',
    counterClick: 0,
    src: '',
  }),
  computed: {
    ...mapGetters(['getPhotoCurrentPage']),
  },
  methods: {
    ...mapActions(['updateView']),
    onSetView(view) {
      this.updateView(view);
      console.log(view);
      // if (this.path === 'Hockey') {
      //   this.$router.push('/vue-mysite')
      // }
    },
    onGetPhotoCurrentPage() {
      console.log(this.getPhotoCurrentPage);
      this.photosCount = this.getPhotoCurrentPage.count;
      this.path = this.getPhotoCurrentPage.link;
      console.log(this.path);
    },
    onClickPicture(src) {
      this.src = src;
    },
    onClose() {
      this.src = '';
    },
  },
  mounted() {
    this.onGetPhotoCurrentPage();
  },
};
</script>

<style lang="sass">
// .buttons
//   display: flex
//   justify-content: space-between
//   margin-bottom: 10px

// .slides
//   //  position: absolute

// .full-picture
//    position: fixed
//    width: 100vw
//    height: 100vh
//    left: 0
//    top: 0
//    z-index: 999
//    background-color: #fff
</style>
