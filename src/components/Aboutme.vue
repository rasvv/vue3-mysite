<template>
  <v-container class="d-flex flex-column justify-space-around overflow-auto" min-height="100vh">
		<Handmade />
		<Photo />
		<Programming />
		<Hobby />
  </v-container>
</template>

<script>
import Programming from './сards/Programming.vue'
import Photo from './сards/Photo.vue'
import Handmade from './сards/Handmade.vue'
import Hobby from './сards/Hobby.vue'

export default {
	components: {
		Programming,
		Photo,
		Hobby,
		Handmade
	}
};
</script>

<style lang="sass" scoped>
.icon
  max-height: 20px
  max-width: 20px
  object-fit: contain
  text-align: center

.card:hover
  background-color: yellow  

v-card-text
  display: flex
  justify-content: center
  margin-top: 4px  
</style>
