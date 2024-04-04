<template>
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
        вдохновляли мои дочери. Их фотографии и еще кое-что вы также найдете на
        этом сайте .
      </v-card-text>
    </v-card-item>
  </v-card>
</template>

<script src="./script.js"></script>
