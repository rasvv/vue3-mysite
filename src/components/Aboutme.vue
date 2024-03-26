<template>
  <v-container class="d-flex flex-column justify-space-around " min-height="100vh">
		<v-card class="overflow-auto">
        <v-card-item 
					color="#385F73" 
					class="card pa-10" 
					to="/mysites" 
					min-height="15vh">
          <v-card-title class="d-flex justify-center mb-3">
            Программирование
          </v-card-title>

          <v-card-text class="d-flex flex-column justify-center" >
              Программированием увлекаюсь со школы, знаю несколько языков.
              Приходилось писать на Delphi, Basic, Pascal, C#, Python и даже на
              AutoLisp. Много работал с базами данных. В арсенале опыт работы с
              MS Access, Firebird, Oracle, MSSQL, MySQL, Postgree. Дополнительно
              закончил обучение на факультете "Frontend-разработки" в
              образовательном центре GeekBrains. Изучил язык разметки HTML и
              язык таблиц стилей CSS. Интенсивно изучаю JavaScript. Освоил
              фреймворки: VueJS и ReactJS. Осуществлял верстку интерфейса,
              разрабатываемого на Angular. С моими проектами можно ознакомиться
              на этом сайте.
          </v-card-text>
        </v-card-item>

				<v-card-item
          color="#116062"
					class="d-flex flex-column justify-end pa-10 card" 
					min-height="15vh"
          dark
          @click="setAlbum(getPhotosLinks, '/photos')"
        >
          <v-card-title class="d-flex justify-center mb-3">
            Фотография
          </v-card-title>

          <v-card-text class="d-flex flex-column justify-center" >
            Я очень люблю фотографировать. На творческие успехи меня всегда
            вдохновляли мои дочери. Их фотографии и еще кое-что вы также найдете
            на этом сайте .
          </v-card-text>
        </v-card-item>

        <v-card-item
          color="#425169"
					class="d-flex flex-column justify-end pa-10 card" 
					min-height="15vh"
          dark
          @click ="setAlbum(getHandmadeLinks, '/handmade')"
        >
          <v-card-title class="d-flex justify-center mb-3">
            Поделки
          </v-card-title>

          <v-card-text class="d-flex flex-column justify-center" >
            В свободное время люблю мастерить что-либо из металла или дерева.
            Сварил несколько печей для бань или гаражей. Также делаю монгалы. На
            фотографиях этапы изготовления.
          </v-card-text>
        </v-card-item>

        <v-card-item color="#3b444b" dark class="card pa-10"  min-height="15vh" @click="setAlbum(getHobbyLinks, '/hobby')">
          <v-card-title class="d-flex justify-center mb-3">
            Увлечения
          </v-card-title>
            <v-card-text class="d-flex flex-column justify-center" >
              Еще я увлекаюсь хоккеем - игрой, которая, по моему мнению является
              самой командной. "В хоккей играют настоящие мужчины - трус не
              играет в хоккей!" В этих строках звучит главный посыл к игрокам и
              эта песня не зря стала гимном замечательной игры.
            </v-card-text>
            <v-card-text>
              В 2021 году я впервые понырял с аквалангом - это были незабываемые
              впечатления
            </v-card-text>
            <v-card-text to="/dysnai">
              Я пять раз был на фестивалях молодых атомщиков, как в России, так
              и в Литве. О моих впечатлениях о поездке на Диснай-2005 можно
              прочитать
              <a href="/dysnai">здесь</a>
            </v-card-text>
        </v-card-item>
			</v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	data: () => ({
		basic: require("@/assets/icon/Basic.jpg"),
		birthday: "26.07.1975",
	}),

	methods: {
		...mapActions(["updateAlbum", "updateView"]),
		setAlbum(album, page) {
			this.updateAlbum(album);
			this.updateView("links");
			this.$router.push(page);
		},
	},
	computed: {
		age() {
			let d = Date('1979', '07', '26')
			const now = new Date()
			const addOne = now.getMonth() - d.getMonth() >= 0 && now.getDate() - d.getDate() >= 0
			const diff = now.getFullYear() - d.getFullYear()
			return diff - 1 + (addOne ? 1 : 0)
		},
		...mapGetters(["getHobbyLinks", "getHandmadeLinks", "getPhotosLinks"]),
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
