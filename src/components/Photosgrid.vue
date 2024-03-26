<template>
  <v-container class="ma-4" height="100vh">
    <v-row class="buttons">
      <v-btn @click="onSetView('links')" class="primary">Назад</v-btn>
      <v-btn @click="onSetView('slides')" class="primary">Слайды</v-btn>
    </v-row>
    <v-row>

    <v-img
      v-if="src !== ''"
      :src="src"
      :lazy-src="src"
      class="full-picture"
      max-height="80vh"
      contain
      @click="onClose"
    >
    </v-img>
    <!-- <v-row v-if="src === ''" justify="space-around" >
      <v-col
        v-for="n in photosCount"
        :key="n"
        class="d-flex align-content-center justify-space-around flex-wrap"
        cols="auto"
      >
        <v-img
          :src="require(`../assets/img/${path}/${n}.${extension}`)"
          :lazy-src="`${path}/${n}.${extension}`"
          height="371"
          width="371"
          cover
          @click="
            onClickPicture(require(`../assets/img/${path}/${n}.${extension}`))
          "
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row> -->
    <v-row   v-if="src === ''"  justify="space-around" >
      <v-card
        v-for="n in photosCount"
        :key="n"
        :width="400"
        class="ma-4"
      >
        <v-card class="pa-6">
          <v-card
            height="550px"
            class="ma-1 pa-3 d-flex flex-column"
          >
            <v-img
              :src="require(`../assets/img/${path}/${n}.${extension}`)"
              position="center center"
              height="350px"
              alt="logo"
              class="bg"
              cover
              @click="
            onClickPicture(require(`../assets/img/${path}/${n}.${extension}`))
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
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    photosCount: 0,
    cols: "auto",
    path: "",
    extension: "jpg",
    counterClick: 0,
    src: "",
  }),
  computed: {
    ...mapGetters(["getPhotoCurrentPage"]),
  },
  methods: {
    ...mapActions(["updateView"]),
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
      this.src = "";
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
