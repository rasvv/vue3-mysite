<template>
  <div >
    <v-img
      v-if="src !== ''"
      :src="src"
      :lazy-src="src"
      class="full-picture"
      max-height="74vh"
      contain
      @click="onClose"
    ></v-img>
    <v-row
      v-if="src === ''"
    >
      <v-col
        v-for="n in photos"
        :key="n"
        class="d-flex child-flex"
        cols="auto"
      >
        <v-img
          :src="require(`../assets/img/Hobby/Dysnai/${n}.jpg`)"
          :lazy-src="`../assets/img/Hobby/Dysnai/${n}.jpg`"
          class="lighten-2"
          height="371"
          width="371"
          contain
          @click="onClickPicture(require(`../assets/img/Hobby/Dysnai/${n}.jpg`))"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
</v-img>
</v-col>
</v-row>

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
	props: {
		// photos: {
		//   type: Array
		// },
		photos: [],
	},
	data: () => ({
		photosCount: 0,
		cols: 'auto',
		path: '',
		extension: 'jpg',
		counterClick: 0,
		src: ''
	}),
	computed: {
		...mapGetters([
			'getPhotoCurrentPage'
		])
	},
	methods: {
		...mapActions([
			'updateView'
		]),
		onSetView(view) {
			this.updateView(view)
			console.log(view);
			// if (this.path === 'Hockey') {
			//   this.$router.push('/vue-mysite')
			// } 
		},
		onGetPhotoCurrentPage() {
			// console.log(this.getPhotoCurrentPage);
			this.photosCount = this.getPhotoCurrentPage.count
			this.path = this.getPhotoCurrentPage.link
			// console.log(this.path);
		},
		onClickPicture(src) {
			this.src = src
		},
		onClose() {
			this.src = ''
		}
	},
	mounted() {
		this.onGetPhotoCurrentPage()
	}
}
</script>

<style lang='sass'>
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