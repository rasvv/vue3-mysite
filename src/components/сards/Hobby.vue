<template>
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
        Еще я увлекаюсь хоккеем - игрой, которая, по моему мнению является самой
        командной. "В хоккей играют настоящие мужчины - трус не играет в
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
</template>

<script src="./script.js"></script>
