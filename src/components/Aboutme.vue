<template>
  <v-container
    class="d-flex flex-column justify-space-around overflow-auto"
    min-height="100vh"
  >
    <!-- <Handmade /> -->
    <v-card class="card pa-10">
      <v-card-item
        color="#385F73"
        class="card pa-10"
        @click="setAlbum(getHandmadeLinks, '/handmade')"
        min-height="15vh"
      >
        <v-card-title class="d-flex justify-center mb-3">
          Поделки
        </v-card-title>

        <v-card-text class="d-flex flex-column justify-center">
          В свободное время люблю мастерить что-либо из металла или дерева.
          Сварил несколько печей для бань или гаражей. Также делаю мангалы. На
          фотографиях этапы изготовления.
        </v-card-text>
      </v-card-item>
    </v-card>
    <div></div>
    <!-- <Photo /> -->
    <v-card class="card pa-10">
      <v-card-item
        color="#385F73"
        class="card pa-10"
        min-height="15vh"
        @click="setAlbum(getPhotosLinks, '/photos')"
      >
        <v-card-title class="d-flex justify-center mb-3">
          Фотография
        </v-card-title>

        <v-card-text class="d-flex flex-column justify-center">
          Я очень люблю фотографировать. На творческие успехи меня всегда
          вдохновляли мои дочери. Их фотографии и еще кое-что вы также найдете
          на этом сайте .
        </v-card-text>
      </v-card-item>
    </v-card>
    <Programming />
    <!-- <Hobby /> -->
    <v-card class="card pa-10">
      <v-card-item
        color="#385F73"
        class="card pa-10"
        min-height="15vh"
        @click="setAlbum(getHobbyLinks, '/hobby')"
      >
        <v-card-title class="d-flex justify-center mb-3">
          Увлечения
        </v-card-title>

        <v-card-text class="d-flex flex-column justify-center">
          Еще я увлекаюсь хоккеем - игрой, которая, по моему мнению является
          самой командной. "В хоккей играют настоящие мужчины - трус не играет в
          хоккей!" В этих строках звучит главный посыл к игрокам и эта песня не
          зря стала гимном замечательной игры.
        </v-card-text>
        <v-card-text>
          В 2021 году я впервые понырял с аквалангом - это были незабываемые
          впечатления
        </v-card-text>
        <v-card-text to="/dysnai">
          Я пять раз был на фестивалях молодых атомщиков, как в России, так и в
          Литве. О моих впечатлениях о поездке на Диснай-2005 можно прочитать
          <a href="/dysnai">здесь</a>
        </v-card-text>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script>
import Programming from './сards/Programming.vue';
import Photo from './сards/Photo.vue';
import Handmade from './сards/Handmade.vue';
import Hobby from './сards/Hobby.vue';

export default {
  components: {
    Programming,
    Photo,
    Hobby,
    Handmade,
  },
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

//TODO Сделать декомпозицию плашек
