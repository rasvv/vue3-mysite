<template>
	<v-card class="card pa-10" >
		<v-card-item 
		color="#385F73" 
		class="card pa-10" 
		@click ="setAlbum(getHandmadeLinks, '/handmade')"
		min-height="15vh">
		<v-card-title class="d-flex justify-center mb-3">
			Поделки
		</v-card-title>

		<v-card-text class="d-flex flex-column justify-center" >
			В свободное время люблю мастерить что-либо из металла или дерева.
			Сварил несколько печей для бань или гаражей. Также делаю монгалы. На
			фотографиях этапы изготовления.
		</v-card-text>
	</v-card-item>

	</v-card>

</template>

<script src="./script.js"></script>