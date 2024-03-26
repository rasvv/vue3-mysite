<template>
  <v-card class="ma-0 d-flex justify-center" color="deep-purple-darken-4">
    <v-tabs
      bg-color="deep-purple-darken-4"
      align-tabs="center"
      
    >
      <v-tab color="primary" depressed :ripple="false" to="/vue-mysite">Обо мне</v-tab>
      <v-tab color="primary" depressed @click="onSetAlbum('mySitesLinks')" :ripple="false" to="/mysites">проекты</v-tab>
      <v-tab color="primary" depressed @click="onSetAlbum(getPhotosLinks)" :ripple="false" to="/photos">Фотографии</v-tab>
      <v-tab color="primary" depressed @click="onSetAlbum(getHobbyLinks)" :ripple="false" to="/hobby">Увлечения</v-tab>
      <v-tab color="primary" depressed @click="onSetAlbum(getHandmadeLinks)" :ripple="false" to="/handmade">Поделки</v-tab>
      <v-tab color="primary" depressed :ripple="false" to="/dysnai">Диснай</v-tab>
      <!-- <v-btn color="primary" depressed :ripple="false" to="/contacts">Контакты</v-btn> -->
    </v-tabs>
  </v-card>	
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getHobbyLinks',
      'getHandmadeLinks',
      'getPhotosLinks'
    ]),
  },
  methods: {
    ...mapActions([
      'updateAlbum',
      'updateView'
    ]),
    onSetAlbum(album) {
      this.updateAlbum(album)
      this.updateView('links')
    }
  },
}
</script>

<style lang="sass">
  .tabs
    height: 200px
    width: 100vw
    display: flex
    justify-content: center !important

  


</style>