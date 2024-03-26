<template>
	<v-container fill-height class="d-flex flex-column justify-space-around">
		<v-card flat class="d-flex flex-column align-center ">
			<h2 class="my-4">Здравствуйте! Меня зовут <i><b>Валерий Рассолов</b></i></h2>
			<h3 class="my-4">Мне {{ age }}. Обо мне и моих интересах вы узнаете здесь</h3>
			<v-img class="avatar my-4" position="center" :src='imgsrc'></v-img>
			<!-- <v-avatar :image="imgsrc" rounded="0" class="avatar" ></v-avatar> -->
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		imgsrc: require('../assets/img/Avatar-new.jpg'),
		birthday: "1975-07-26"
	}),
	computed: {
		age() {
			let d = new Date(this.birthday)
			let age = 0
			const now = new Date()
			const addOne = now.getMonth() - d.getMonth() >= 0 && now.getDate() - d.getDate() >= 0
			const diff = now.getFullYear() - d.getFullYear()
			age = diff - 1 + (addOne ? 1 : 0)
			let txt, count = age % 100;
			count >= 5 && count <= 20 ? txt = 'лет' : count = count % 10, count == 1 ? txt = 'год' : (count >= 2 && count <= 4) ? txt = 'года' : txt = 'лет';
			return age + ' ' + txt;

		},
	}
}
</script>

<style lang='sass'>


.v-sheet.v-card:not(.v-sheet--outlined)
	border: none
	box-shadow: none

</style>