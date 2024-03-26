<template>
  <v-container
    class="bg"
    height="20"
  >
  <v-row class="d-flex justify-center">
      <v-col cols="3" class="d-flex">
				<v-img
          height="26"
          width="100"
          contain
          :src="require('../assets/img/Logo.png')"
        ></v-img>

      </v-col>
      <v-col
        class="primary text-center white--text"
        cols="9"
      >
        2020 - {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang='sass' scoped>
  .bg
    background-color: darkblue
    color: #fff
</style>