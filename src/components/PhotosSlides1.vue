<template>
  <div>
    <div class="buttons">
      <v-btn @click="onSetView('grid')" class="primary">Назад</v-btn>
    </div>
    <v-carousel height="78vh">
      <v-carousel-item
        v-for="n in photoArr"
        :key="n"
        reverse-transition="fade-transition"
        transition="fade-transition"
        :src="require(n)"
        width="95vw"
        max-height="72vh"
        contain
      >
        {{ path }}
        <v-img :src="path" contain></v-img>
      </v-carousel-item>
    </v-carousel>
    {{ photoArr }}
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
    photoArr: [],
    pA: [
      {
        src: '../assets/img/Photo/Tory/Studio/1.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/2.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/3.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/4.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/5.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/6.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/7.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/8.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/9.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/10.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/11.jpg',
      },
      {
        src: 'd:/MyProg/Web/Projects/Vue/vue3-mysite/src/assets/img/Photo/Tory/Studio/12.jpg',
      },
    ],
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
    onSetPhotoArr() {
      let photosCount = this.getPhotoCurrentPage.count;
      console.log(photosCount);
      let path = this.getPhotoCurrentPage.link;
      console.log(path);
      for (let i = 1; i <= photosCount; i++) {
        this.photoArr.push(`@/assets/img/${path}/${i}.${this.extension}`);
      }
      console.log(this.photoArr);
    },
  },
  mounted() {
    this.onSetPhotoArr();
  },
};
</script>

<style lang="sass">
// .v-main__wrap
//   max-width: 90vw
</style>
