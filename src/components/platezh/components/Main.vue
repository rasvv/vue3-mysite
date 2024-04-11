<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="title">
      <v-tab value="potreblenie"> Потребление </v-tab>
      <v-tab value="tarif"> Тарифы </v-tab>

      <v-tab-item  value="potreblenie">
        <Potreblenie/>
      </v-tab-item>

      <v-tab-item value="tarif">
        <Tarif/>

      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import Potreblenie from "./PotreblenieView.vue"
import Tarif from "./TarifView.vue"

export default {
  name: "Platezh",
  data () {
    return {
      tab: null
    }
  },
  components: {
    Tarif,
    Potreblenie
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.bordered
  margin: 0
  width: 100%
  border: 1px solid lightblue

.v-messages
  min-height: 0 !important

.v-text-field__details
  min-height: 0 !important

.nobottom
  padding-bottom: 0

.bluecolor
  color: darkblue
</style>
