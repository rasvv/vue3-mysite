<template>
  <v-container class="d-flex justify-space-around align-center flex-wrap ma-4">
      <v-hover
        v-slot="{ hover }"
        open-delay="200"
        v-for="card in cards"
        :key="card.title"
      >		
        <v-card
          :elevation="hover ? 16 : 2"
          :href="card.link"
					height="50vh"
					max-width="15vw"					
          :class="{ 'on-hover': hover }"
					class="d-flex flex-column justify-end pa-2 ma-4" 
          target="blank"
        >
          <v-card-title v-text="card.title" class="text-h5"></v-card-title>	
          <v-img
            :src="require(`@/${card.src}`)"
            position="center center"
						height="20vh"
						width="15vw"
            alt="logo"
            class="bg"
            contain
          >
          </v-img>
          <v-card-text v-text="card.description"></v-card-text>
        </v-card>
      </v-hover>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		cols: 'auto',
		cards: []
	}),
	computed: {
		...mapGetters([
			'getSitesLinks'
		]),
	},
	methods: {
		onGetSitesLinks() {
			this.cards = this.getSitesLinks
		}
	},
	mounted() {
		this.onGetSitesLinks()
	}
}
</script>

<style lang='sass'>



</style>