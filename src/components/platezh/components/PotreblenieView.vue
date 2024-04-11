<template>
  <div class="ma-4">
    <!-- <div>{{ prevSelectedPotreblenie }}</div> -->
    <!-- <v-data-table
      :headers="potreblenieHeaders"
      :items="getPotreblenie"
      @click:row="changeSelect"
      class="bordered"
      :items-per-page="6"
    >
    </v-data-table> -->
    <v-data-table
      v-model="selected"
      :headers="potreblenieHeaders"
      :items="getPotreblenie"
      item-value="NPP"
      :items-per-page="6"
      single-select
      @click:row="changeSelect"
      :sort-by="sortBy"
      return-object
      show-select
      class="bordered"
    >
    </v-data-table>
    <!-- <div>LastGet - {{ getLastPotreblenie }}</div> 
    <div>PrevGet - {{ getPrevPotreblenie }}</div>
    <div>Last - {{ selectedPotreblenie }}</div>
    <div>Prev - {{ prevSelectedPotreblenie }}</div>    -->

    <!-- <div v-if="this.currentTarif.length == 0 "><p>Отсутствуют тарифы</p></div> -->
    <!-- <div>Tarif - {{ currentTarif }}</div>     -->

    <v-row class="ma-4">
      <v-col cols="12">
        <h2 class="text-center ma-4">Потребление</h2>
      </v-col>
    </v-row>
    <v-row class="ma-4">
      <v-col cols="1" class="bordered">
        <v-row>
          <v-col cols="12" class="bordered">
            <v-row justify="center"> Дата </v-row>
            <v-row height="40px">
              <v-col cols="12" class="bordered text-center" height="40px">
                {{ dateFormatDMY(selectedPotreblenie.Data) }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="bordered">
        <v-row justify="center"> Электричество </v-row>

        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="2" class="bordered dfac jc">Пред.</v-col>
          <v-col cols="2" class="bordered dfac jc">Текущие</v-col>
          <v-col cols="2" class="bordered dfac jc">Разница</v-col>
          <v-col cols="2" class="bordered dfac jc">Тариф</v-col>
          <v-col cols="2" class="bordered dfac jc">Сумма</v-col>
        </v-row>
        <v-row>
          <v-col cols="2" class="bordered">T1</v-col>
          <v-col cols="2" class="bordered dfac jc">{{
            prevSelectedPotreblenie.ElT1
          }}</v-col>
          <v-col cols="2" class="bordered nobottom">
            <v-text-field
              class="dfac jc"
              v-model="selectedPotreblenie.ElT1"
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
          <v-col cols="2" class="bordered dfac jc pa-0">{{ elT1Dif }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{
            currentTarif.ElT1Tarif
          }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{ elT1Sum }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="2" class="bordered">T2</v-col>
          <v-col cols="2" class="bordered dfac jc">{{
            prevSelectedPotreblenie.ElT2
          }}</v-col>
          <v-col cols="2" class="bordered nobottom">
            <v-text-field
              class="dfac jc"
              hide-details="auto"
              v-model="selectedPotreblenie.ElT2"
            >
            </v-text-field>
          </v-col>
          <v-col cols="2" class="bordered dfac jc">{{ elT2Dif }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{
            currentTarif.ElT2Tarif
          }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{ elT2Sum }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="2" class="bordered">T3</v-col>
          <v-col cols="2" class="bordered dfac jc">{{
            prevSelectedPotreblenie.ElT3
          }}</v-col>
          <v-col cols="2" class="bordered nobottom">
            <v-text-field
              class="dfac jc"
              hide-details="auto"
              v-model="selectedPotreblenie.ElT3"
            >
            </v-text-field>
          </v-col>
          <v-col cols="2" class="bordered dfac jc">{{ elT3Dif }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{
            currentTarif.ElT3Tarif
          }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{ elT3Sum }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4" class="bordered">Сумма</v-col>
          <v-col cols="4" class="bordered filled">
            <h3 class="text-center">{{ elSum }}</h3>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6" class="bordered">
        <v-row justify="center"> Вода </v-row>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="3" class="bordered pa-0 dfac jc">Санузел.</v-col>
          <v-col cols="3" class="bordered pa-0 dfac jc">Туалет.</v-col>
          <v-col cols="1" class="dfac jc"></v-col>
          <v-col cols="1" class="dfac jc"></v-col>
          <v-col cols="2" class="dfac jc"></v-col>
        </v-row>

        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="1" class="bordered pa-0 dfac jc">Пред.</v-col>
          <v-col cols="2" class="bordered pa-0 dfac jc">Текущие</v-col>
          <v-col cols="1" class="bordered pa-0 dfac jc">Пред.</v-col>
          <v-col cols="2" class="bordered pa-0 dfac jc">Текущие</v-col>
          <v-col cols="1" class="bordered pa-0 dfac jc">Разница</v-col>
          <v-col cols="1" class="bordered pa-0 dfac jc">Тариф</v-col>
          <v-col cols="2" class="bordered pa-0 dfac jc">Сумма</v-col>
        </v-row>
        <v-row>
          <v-col cols="2" class="bordered dfac" align-content="center"
            >Холодная</v-col
          >
          <v-col cols="1" class="bordered dfac jc">{{
            prevSelectedPotreblenie.VodHol1
          }}</v-col>
          <v-col cols="2" class="bordered dfac nobottom">
            <v-text-field
              class="dfac jc"
              hide-details="auto"
              v-model="selectedPotreblenie.VodHol1"
            >
            </v-text-field>
          </v-col>
          <v-col cols="1" class="bordered dfac jc">
            {{ prevSelectedPotreblenie.VodHol2 }}
          </v-col>
          <v-col cols="2" class="bordered nobottom">
            <v-text-field
              class="dfac jc"
              hide-details="auto"
              v-model="selectedPotreblenie.VodHol2"
            >
            </v-text-field>
          </v-col>
          <v-col cols="1" class="bordered dfac jc">{{ vodHolDif }}</v-col>
          <v-col cols="1" class="bordered dfac jc">{{
            currentTarif.VodHolTarif
          }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{ vodHolSum }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="2" class="bordered dfac">Горячая</v-col>
          <v-col cols="1" class="bordered dfac jc">{{
            prevSelectedPotreblenie.VodGor1
          }}</v-col>
          <v-col cols="2" class="bordered nobottom">
            <v-text-field
              class="dfac jc"
              hide-details="auto"
              v-model="selectedPotreblenie.VodGor1"
            >
            </v-text-field>
          </v-col>
          <v-col cols="1" class="bordered dfac jc">{{
            prevSelectedPotreblenie.VodGor2
          }}</v-col>
          <v-col cols="2" class="bordered nobottom">
            <v-text-field
              class="dfac jc"
              hide-details="auto"
              v-model="selectedPotreblenie.VodGor2"
            >
            </v-text-field>
          </v-col>
          <v-col cols="1" class="bordered dfac jc">{{ vodGorDif }}</v-col>
          <v-col cols="1" class="bordered dfac jc">{{
            currentTarif.VodGorTarif
          }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{ vodGorSum }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="2" class="bordered dfac">Отвод</v-col>
          <v-col cols="6" class="bordered dfac jc nobottom"> </v-col>
          <v-col cols="1" class="bordered dfac jc">{{ vodOtv }}</v-col>
          <v-col cols="1" class="bordered dfac jc">{{
            currentTarif.VodOtvTarif
          }}</v-col>
          <v-col cols="2" class="bordered dfac jc">{{ vodOtvSum }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4" class="bordered">Сумма</v-col>
          <v-col cols="4" class="bordered filled">
            <h3 class="text-center">{{ vodSum }}</h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1" class="bordered">
        <v-row>
          <v-col cols="12" class="bordered">
            <v-row justify="center"> Счетчики </v-row>
            <v-row height="40px">
              <v-col
                cols="12"
                class="bordered text-center filled"
                height="40px"
              >
                <h2 class="bluecolor">{{ itogoSchet }}</h2>
              </v-col>
            </v-row>
            <v-row justify="center"> Аренда </v-row>
            <v-row height="20px">
              <v-col cols="12" class="bordered text-center" height="20px">
                <h3 class="bluecolor">{{ currentTarif.Arenda }}</h3>
              </v-col>
            </v-row>
            <v-row justify="center"> Интернет </v-row>
            <v-row height="20px">
              <v-col cols="12" class="bordered text-center" height="20px">
                <h3 class="bluecolor">{{ currentTarif.Internet }}</h3>
              </v-col>
            </v-row>
            <v-row justify="center"> Итого </v-row>
            <v-row height="40px">
              <v-col
                cols="12"
                class="bordered text-center filled"
                height="40px"
              >
                <h2 class="bluecolor">{{ itogoSum }}</h2>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="justify-center pa-5" v-show="!newRecord">
      <v-btn @click="setNewRecord" class="ma-1">Новая запись</v-btn>
    </v-row>
    <v-row class="justify-center pa-5" v-show="newRecord">
      <v-btn @click="saveRecord" class="ma-1">Сохранить</v-btn>
      <v-btn @click="cancelRecord" class="ma-1">Отмена</v-btn>
    </v-row>
  </div>
</template>

<script src="./calculator.js">
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

.dfac
	display: flex
	flex-wrap: wrap
	align-content: center

.jc
	justify-content: center

.nobottom
	padding: 0

.bluecolor
	color: darkblue

.filled
	background-color: yellow
</style>
