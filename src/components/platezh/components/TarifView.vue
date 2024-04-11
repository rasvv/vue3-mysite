<template>
  <div class="ma-4">
    <v-row class="ma-4">
      <v-col cols="12">
        <v-data-table
          v-model="selected"
          :headers="tarifheaders"
          :items="getTarif"
          item-value="NPP"
          :items-per-page="6"
          single-select
          @click:row="changeSelect"
          :sort-by="sortBy"
          select-strategy="single"
          show-select
        >
        </v-data-table>
        <!-- <v-data-table
          :headers="tarifheaders"
          :items="getTarif"
          :items-per-page="6"
          single-select
          @click:row="changeSelect"
        >
        </v-data-table> -->
        <!-- <v-card class="mt-2 pa-2">
          <pre>{{ selected }}</pre>
        </v-card>
        <div>{{ getLastTarif }}</div> -->
      </v-col>
    </v-row>
    <v-row class="ma-4">
      <v-col cols="4" class="bordered">
        <v-row justify="center">Период действия</v-row>
        <v-row>
          <v-col cols="6" class="bordered">
            <v-row justify="center">Начало</v-row>
            <v-row class="ma-4" height="40px">
              <v-text-field
                v-model="selectedTarif.PerFrom"
                label="Начало"
                :readonly="!newRecord"
                type="date-local"
              ></v-text-field>
            </v-row>
          </v-col>
          <v-col cols="6" class="bordered">
            <v-row justify="center">Конец</v-row>
            <v-row class="ma-4">
              <v-text-field
                v-model="selectedTarif.PerTo"
                label="Конец"
                :readonly="!newRecord"
                type="date-local"
              ></v-text-field>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="bordered">
        <v-row justify="center"> Электроэнергия </v-row>
        <v-row>
          <v-col cols="6" class="bordered dfac jc">
            <v-row justify="center"> T1 </v-row>
          </v-col>
          <v-col cols="6" class="bordered nobottom">
            <v-text-field
              v-model="selectedTarif.ElT1Tarif"
              class="dfac jc"
              :disabled="!newRecord"
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="bordered dfac jc">
            <v-row justify="center"> T2 </v-row>
          </v-col>
          <v-col cols="6" class="bordered nobottom">
            <v-text-field
              :disabled="!newRecord"
              class="dfac jc"
              v-model="selectedTarif.ElT2Tarif"
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="bordered dfac jc">
            <v-row justify="center"> T3 </v-row>
          </v-col>
          <v-col cols="6" class="bordered nobottom">
            <v-text-field
              v-model="selectedTarif.ElT3Tarif"
              class="dfac jc"
              :disabled="!newRecord"
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="bordered">
        <v-row justify="center"> Вода </v-row>
        <v-row>
          <v-col cols="6" class="bordered dfac jc">
            <v-row justify="center"> Холодная </v-row>
          </v-col>
          <v-col cols="6" class="bordered nobottom">
            <v-text-field
              v-model="selectedTarif.VodHolTarif"
              class="dfac jc"
              :disabled="!newRecord"
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="bordered dfac jc">
            <v-row justify="center"> Горячая </v-row>
          </v-col>
          <v-col cols="6" class="bordered nobottom">
            <v-text-field
              v-model="selectedTarif.VodGorTarif"
              class="dfac jc"
              :disabled="!newRecord"
              hide-details="auto"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="bordered dfac jc">
            <v-row justify="center"> Отведение </v-row>
          </v-col>
          <v-col cols="6" class="bordered nobottom">
            <v-text-field
              v-model="selectedTarif.VodOtvTarif"
              class="dfac jc"
              :disabled="!newRecord"
              hide-details="auto"
            >
            </v-text-field>
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

<script>
import FileSaver from "file-saver";
import { mapGetters } from "vuex";
// import { VDataTable } from "vuetify/labs/VDataTable";
// import { VDatePicker } from "vuetify/labs/VDatePicker";
import "./calculator.js";

export default {
  name: "TarifView",
  // props: ["tarif"],
  components: {
    // VDataTable,
    // VDatePicker,
  },
  data() {
    return {
      menuFrom: false,
      menuTo: false,
      newRecord: false,
      dialogFrom: false,
      dialogTo: false,
      selectedTarif: {},
      sortBy: [{ key: "NPP", order: "desc" }],
      selected: [],
      tarifheaders: [
        { title: "Начало", align: "end", key: "PerFrom" },
        { title: "Конец", align: "end", key: "PerTo" },
        { title: "Электричество (Т1)", align: "end", key: "ElT1Tarif" },
        { title: "Электричество (Т2)", align: "end", key: "ElT2Tarif" },
        { title: "Электричество (Т3)", align: "end", key: "ElT3Tarif" },
        { title: "Вода (холодная)", align: "end", key: "VodHolTarif" },
        { title: "Вода (горячая)", align: "end", key: "VodGorTarif" },
        { title: "Водоотведение", align: "end", key: "VodOtvTarif" },
        { title: "Аренда", align: "end", key: "Arenda" },
        { title: "Интернет", align: "end", key: "Internet" },
      ],
      emptyTarif: {
        NPP: 0,
        PerFrom: "",
        PerTo: "",
        ElT1Tarif: 0,
        ElT2Tarif: 0,
        ElT3Tarif: 0,
        VodHolTarif: 0,
        VodGorTarif: 0,
        VodOtvTarif: 0,
        Arenda: 52000,
        Internet: 726,
      },
    };
  },
  methods: {
    setTarif() {
      this.tarif = this.getTarif;
    },
    changeSelect(item) {
      console.log("this.selected");
      console.log(this.selected);
      console.log("item");
      console.log(item);
      // this.selectedTarif = this.selected[0];
      // this.selected = [];
    },
    changePrevSelect(num) {
      console.log("num = " + num);
      return this.Tarif.find((elem) => {
        return elem.NPP === num;
      });
    },
    setNextDay(day) {
      let tomorrow = new Date(day);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return this.dateFormat(tomorrow);
    },
    setNewRecord() {
      this.newRecord = true;
      this.selectedTarif = this.emptyTarif;
      this.selectedTarif.NPP = this.getLastTarif[0].NPP + 1;
      this.selectedTarif.PerFrom = this.setNextDay(this.getLastTarif[0].PerTo);
    },
    saveRecord() {
      this.tarif.push(this.selectedTarif);
      this.saveFile();
      this.newRecord = false;
    },
    cancelRecord() {
      this.newRecord = false;
      // this.tarif.pop();
    },
    saveFile() {
      const data = JSON.stringify(this.tarif);
      const blob = new Blob([data], { type: "application/json" });
      FileSaver.saveAs(blob, [`@/db/`, "Tarif.json"]);
    },
    dateFormat(date) {
      return `${date.getFullYear()}.${this.addZero(
        date.getMonth() + 1
      )}.${this.addZero(date.getDate())}`;
    },
    addZero(num) {
      return num < 10 ? "0" + num : num;
    },
  },

  computed: {
    ...mapGetters(["getTarif", "getLastTarif"]),
    getFromDate() {
      return this.getLastTarif;
    },
  },
  mounted() {
    this.setTarif();
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
