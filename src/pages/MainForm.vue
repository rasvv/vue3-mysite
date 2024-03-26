<template>
	<v-container class="ma-0 pa-0 d-flex justify-center">
		<v-row class="ma-0 pa-0 flex-nowrap d-flex justify-center">
			<v-col cols="4">
				<Avatar />
			</v-col>
			<v-col cols="8">
				<AboutMe />
			</v-col>
		</v-row>

	</v-container>
</template>

<script>
	import Avatar from '../components/Avatar'
	import AboutMe from '../components/Aboutme'
	
	export default {
		components: {
			Avatar,
			AboutMe
		}
	}
</script>

<style>

</style>