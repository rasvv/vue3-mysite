<template>
  <v-container class="over">
    <AboutMeCard
      title="Программирование"
      path="Other"
      n="Progs"
      extension="jpg"
      @click="clickCard('progs')"
      description='Программированием увлекаюсь со школы, знаю несколько языков.
					Приходилось писать на Delphi, Basic, Pascal, C#, Python и даже на
					AutoLisp. Много работал с базами данных. В арсенале опыт работы с MS
					Access, Firebird, Oracle, MSSQL, MySQL, Postgree. Дополнительно
					закончил обучение на факультете "Frontend-разработки" в
					образовательном центре GeekBrains. Изучил язык разметки HTML и язык
					таблиц стилей CSS. Интенсивно изучаю JavaScript. Освоил фреймворки:
					VueJS и ReactJS. Осуществлял верстку интерфейса, разрабатываемого на
					Angular. С моими проектами можно ознакомиться на этом сайте.'
    />

    <AboutMeCard
      title="Поделки"
      path="Handmade/Mangal"
      n="17"
      extension="jpg"
      @click="clickCard('handmade')"
      description="В свободное время люблю мастерить что-либо из металла или дерева.
					Сварил несколько печей для бань или гаражей. Также делаю монгалы. На
					фотографиях этапы изготовления."
    />

    <AboutMeCard
      title="Фотография"
      path="Photo/Other"
      n="6"
      extension="jpg"
      @click="clickCard('photo')"
      description="Я очень люблю фотографировать. На творческие успехи меня всегда
					вдохновляли мои дочери. Их фотографии и еще кое-что вы также найдете
					на этом сайте ."
    />

    <AboutMeCard
      title="Хоккей"
      path="Hobby/Hockey"
      n="1"
      extension="jpg"
      @click="clickCard('hobby')"
      description='Еще я увлекаюсь хоккеем - игрой, которая, по моему мнению является
					самой командной. "В хоккей играют настоящие мужчины - трус не играет в
					хоккей!" В этих строках звучит главный посыл к игрокам и эта песня не
					зря стала гимном замечательной игры.'
    />
    <AboutMeCard
      title="Дайвинг"
      path="Hobby/Diving"
      n="6"
      extension="jpg"
      @click="clickCard('hobby')"
      description="В 2021 году я впервые понырял с аквалангом - это были незабываемые
					впечатления"
    />
    <AboutMeCard
      title="Диснай"
      path="Hobby/Dysnai"
      n="31"
      extension="jpg"
      @click="clickCard('disnay')"
      description="Я пять раз был на фестивалях молодых атомщиков, как в России, так и в
					Литве. О моих впечатлениях о поездке на Диснай-2005 можно прочитать здесь"
    />
    <!-- <Hobby /> -->
    <!-- <v-card class="card pa-10">
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
		</v-card> -->
  </v-container>
</template>

<script>
import Programming from './сards/Programming.vue';
import Photo from './сards/Photo.vue';
import Handmade from './сards/Handmade.vue';
import Hobby from './сards/Hobby.vue';
import AboutMeCard from './сards/AboutMeCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Programming,
    Photo,
    Hobby,
    Handmade,
    AboutMeCard,
  },
  methods: {
    clickCard(value) {
      console.log('clickCardValue = ' + value);
      if (value === 'handmade') {
        this.setAlbum(this.getHandmadeLinks, '/handmade');
      }
      if (value === 'photo') {
        this.setAlbum(this.getPhotosLinks, '/photos');
      }
      if (value === 'hobby') {
        this.setAlbum(this.getHobbyLinks, '/hobby');
      }
      if (value === 'progs') {
        this.$router.push('/mysites');
      }
      if (value === 'dysnai') {
        this.$router.push('/dysnai');
      }
    },
    ...mapActions(['updateAlbum', 'updateView']),
    setAlbum(album, page) {
      console.log('album = ' + album);
      console.log('page = ' + page);
      this.updateAlbum(album);
      this.updateView('links');
      this.$router.push(page);
    },
  },
  computed: {
    ...mapGetters(['getHobbyLinks', 'getHandmadeLinks', 'getPhotosLinks']),
  },
};
</script>

<style lang="sass" scoped>
.icon
	max-height: 20px
	max-width: 20px
	object-fit: contain
	text-align: center

.over
	height: 100%
	overflow-y: auto

.card:hover
	background-color: yellow

v-card-text
	display: flex
	justify-content: center
	margin-top: 4px
</style>

//TODO Сделать декомпозицию плашек
