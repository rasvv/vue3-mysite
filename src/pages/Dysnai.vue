<template>
  <v-container>
    <v-card>
      <v-card-title flat height="9vh">
        <v-row>
          <v-col cols="9" class="d-flex align-center justify-center">
            <h2>Сочинение на тему "Как я провел лето"</h2>
          </v-col>
          <v-col cols="3">
            Размер шрифта
            <v-btn fab small @click="fzChangeDown">
              -
            </v-btn>

            <v-btn fab small @click="fzChangeUp">
              +
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <div class="d-flex flex-row">
        <v-tabs direction="vertical" v-model="tab">
          <v-tab class="d-flex justify-start" value="pred">
            <v-icon left>
              mdi-message-bulleted
            </v-icon>
            Предисловие
          </v-tab>
          <v-tab class="d-flex justify-start" value="start">
            <v-icon left>
              mdi-clock-start
            </v-icon>
            Начало
          </v-tab>
          <v-tab class="d-flex justify-start" value="day-1">
            <v-icon left>
              mdi-clock-fast
            </v-icon>
            День 1. На поляне
          </v-tab>
          <v-tab class="d-flex justify-start" value="day-2">
            <v-icon left>
              mdi-clock-fast
            </v-icon>
            День 2. День первогодки
          </v-tab>
          <v-tab class="d-flex justify-start" value="day-3">
            <v-icon left>
              mdi-clock-fast
            </v-icon>
            День 3. Симпозиум
          </v-tab>
          <v-tab class="d-flex justify-start" value="day-4">
            <v-icon left>
              mdi-clock-fast
            </v-icon>
            День 4. День мистера
          </v-tab>
          <v-tab class="d-flex justify-start" value="day-5">
            <v-icon left>
              mdi-clock-fast
            </v-icon>
            День 5. День мисс
          </v-tab>
          <v-tab class="d-flex justify-start" value="day-6">
            <v-icon left>
              mdi-clock-fast
            </v-icon>
            День 6. День экскурсий
          </v-tab>
          <v-tab class="d-flex justify-start" value="day-7">
            <v-icon left>
              mdi-clock-fast
            </v-icon>
            День 7. Закрытие
          </v-tab>
          <v-tab class="d-flex justify-start" value="end">
            <v-icon left>
              mdi-clock-end
            </v-icon>
            День 8. Отъезд
          </v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item value="pred">
            <Pred />
          </v-window-item>
          <v-window-item value="start">
            <Start />
          </v-window-item>
          <v-window-item value="day-1">
            <Day1 />
          </v-window-item>
          <v-window-item value="day-2">
            <Day2 />
          </v-window-item>
          <v-window-item value="day-3">
            <Day3 />
          </v-window-item>
          <v-window-item value="day-4">
            <Day4 />
          </v-window-item>
          <v-window-item value="day-5">
            <Day5 />
          </v-window-item>
          <v-window-item value="day-6">
            <Day6 />
          </v-window-item>
          <v-window-item value="day-7">
            <Day7 />
          </v-window-item>
          <v-window-item value="end">
            <End />
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PhotoGridText from '../components/PhotosgridText.vue'
import Pred from './Dysnay/Pred.vue'
import Start from './Dysnay/Start.vue'
import Day1 from './Dysnay/Day1.vue'
import Day2 from './Dysnay/Day2.vue'
import Day3 from './Dysnay/Day3.vue'
import Day4 from './Dysnay/Day4.vue'
import Day5 from './Dysnay/Day5.vue'
import Day6 from './Dysnay/Day6.vue'
import Day7 from './Dysnay/Day7.vue'
import End from './Dysnay/End.vue'
export default {
  data: () => ({
    img: require('../assets/img/Avatar.jpg'),
    tab: 'pred',
    fz: 0,
    lh: 0,
  }),
  components: {
    PhotoGridText,
    Pred,
    Start,
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
    Day6,
    Day7,
    End
  },


  computed: {
    ...mapGetters(["getDysnaiLinks", "getFontSize", "getFZ", "getLH"]),
    fz1() {
      return this.fz + "px";
    },
    lh1() {
      return this.lh + "em";
    },
  },
  methods: {
    ...mapActions(["updateFontSize", "updateFZ", "updateLH"]),

    onSetImg(num) {
      return require("../assets/img/Hobby/Dysnai/" + num + ".jpg");
    },
    fzChangeUp() {
      this.updateFZ(this.getFZ + 1);
      this.updateLH(this.getLH + 0.04);
    },
    fzChangeDown() {
      this.updateFZ(this.getFZ - 1);
      this.updateLH(this.getLH - 0.04);
    },
  },
};

</script>

<style >
  p {
    color: black;
    text-indent: 50px;
    text-align: justify;
  }
</style>