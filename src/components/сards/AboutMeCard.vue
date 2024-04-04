<template>
  <v-card class="card">
    <v-card-item
      color="#385F73"
      class="py-4"
      min-height="15vh"
      @click="$emit('clickCard')"
    >
      <v-row>
        <v-col cols="1">
          <v-img
            :src="require(`@/assets/img/${path}/${n}.${extension}`)"
            height="100px"
          ></v-img>
        </v-col>
        <v-col cols="11">
          <v-card-title class="d-flex justify-center mb-3">
            {{ title }}
          </v-card-title>
          <v-card-text class="d-flex flex-column justify-center">
            {{ description }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  props: ['path', 'n', 'extension', 'title', 'description'],
};
</script>
