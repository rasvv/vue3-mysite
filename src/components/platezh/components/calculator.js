
import FileSaver from "file-saver";
import { mapGetters } from 'vuex'
// import { VDataTable } from "vuetify/labs/VDataTable";


export default {
  name: "Potreblenie",
  components: {
    // VDataTable,
  },
  data() {
    return {
      potreblenie: [],
      selectedPotreblenie: {},
      sortBy: [{ key: "NPP", order: "desc" }],
      newRecord: false,
      selected: [],
      prevSelectedPotreblenie: {},
      potreblenieHeaders: [
        { title: "Дата", key: ("Data") },
        { title: "Электричество (Т1)", key: "ElT1" },
        { title: "Электричество (Т2)", key: "ElT2" },
        { title: "Электричество (Т3)", key: "ElT3" },
        { title: "Санузел ВХ", key: "VodHol1" },
        { title: "Санузел ВГ", key: "VodGor1" },
        { title: "Туалет ВХ", key: "VodHol2" },
        { title: "Туалет ВГ", key: "VodGor2" },
        { title: "Водоотведение", key: "VodOtv" },
        { title: "Счетчики", key: "ITOGOSchet" },
        { title: "ИТОГО", key: "ITOGOSum" },
      ],
      emptyPotreblenie: {
        NPP: 0,
        Data: "",
        ElT1: 0,
        ElT2: 0,
        ElT3: 0,
        ElT1Raz: 0,
        ElT2Raz: 0,
        ElT3Raz: 0,
        ElT1Sum: 0,
        ElT2Sum: 0,
        ElT3Sum: 0,
        VodHol1: 0,
        VodGor1: 0,
        VodHol2: 0,
        VodGor2: 0,
        VodHolRaz: 0,
        VodGorRaz: 0,
        VodOtv: 0,
        VodHolSum: 0,
        VodGorSum: 0,
        VodOtvSum: 0,
        ITOGOSchet: 0,
        ITOGOSum: 0
      },
      tarif: []
    };
  },
  methods: {
    changeSelect() {
      console.log(this.selected);
      if (this.selected.length > 0) {
        this.selectedPotreblenie = this.selected[0];
        // this.prevSelectedPotreblenie = this.selected;
        this.selected[0].NPP > 1
          ? (this.prevSelectedPotreblenie = this.changePrevSelect(this.selected[0].NPP - 1))
          : (this.prevSelectedPotreblenie = this.emptyPotreblenie);
      }
    },

    changePrevSelect(num) {
      return this.getPotreblenie.find((elem) => {
        return elem.NPP === num;
      });
    },

    checkPeriod(dat) {
      let { PerTo, PerFrom } = this.tarif[this.tarif.length - 1];
      return PerTo > dat && PerFrom < dat ? true : false;
    },
    checkTarif(dat) {
      let tarif = this.getTarif.find((elem) => {
        return (Date.parse(elem.PerFrom) <= Date.parse(dat) && Date.parse(dat) <= Date.parse(elem.PerTo))
      })
      if (tarif) return tarif
      else return 'Отсутствует тариф'
    },
    setNewRecord() {
      const dat = new Date();
      if (this.checkTarif(this.dateFormat(dat))) {
        this.newRecord = true;
        this.setPrevSelectedPotreblenie(this.getLastPotreblenie)
        this.selectedPotreblenie = this.emptyPotreblenie
        this.selectedPotreblenie.NPP = this.getLastPotreblenie.NPP + 1;
        this.selectedPotreblenie.Data = this.dateFormat(dat);
        // console.log(selectedPotreblenie);
        console.log(this.prevSelectedPotreblenie);
        // const newRec = this.potreblenie[this.potreblenie.length - 1];
        // this.changeSelect(newRec);
      } else alert("На текущую дату не заданы тарифы");
    },
    saveRecord() {
      this.selectedPotreblenie.ElT1Raz = this.elT1Dif
      this.selectedPotreblenie.ElT2Raz = this.elT2Dif
      this.selectedPotreblenie.ElT3Raz = this.elT3Dif
      this.selectedPotreblenie.ElT1Sum = this.elT1Sum
      this.selectedPotreblenie.ElT2Sum = this.elT2Sum
      this.selectedPotreblenie.ElT3Sum = this.elT3Sum


      this.selectedPotreblenie.VodHolRaz = this.vodHolDif
        this.selectedPotreblenie.VodGorRaz = this.vodGorDif
        this.selectedPotreblenie.VodOtv = this.vodOtv
        this.selectedPotreblenie.VodHolSum = this.vodHolSum
        this.selectedPotreblenie.VodGorSum = this.vodGorSum
        this.selectedPotreblenie.VodOtvSum = this.vodOtvSum
        this.selectedPotreblenie.ITOGOSchet = this.itogoSchet
        this.selectedPotreblenie.ITOGOSum = this.itogoSum
      this.potreblenie.push(this.selectedPotreblenie);





      this.newRecord = false;
      this.saveFile();
    },
    cancelRecord() {
      this.newRecord = false;
      this.potreblenie.pop();
    },
    saveFile() {
      const data = JSON.stringify(this.potreblenie);
      const blob = new Blob([data], { type: "application/json" });
      FileSaver.saveAs(blob, "Potreblenie.json");
    },

    addZero(num) {
      return num < 10 ? "0" + num : num;
    },
    calcDif(num1, num2) {
      return num1 - num2;
    },
    calcSum(num) {
      let sum = 0
      num.forEach(elem => sum += +elem)
      return sum.toFixed(2)
    },
    calcMult(num1, num2) {
      return (num1 * num2).toFixed(2);
    },
    setPotreblenie() {
      this.potreblenie = this.getPotreblenie
    },
    setPrevSelectedPotreblenie(attr) {
      console.log(attr);
      this.prevSelectedPotreblenie = attr
    },
    setSelectedPotreblenie() {
      this.selectedPotreblenie = this.getLastPotreblenie
    },
    dateFormat(date) {
      return `${date.getFullYear()}.${this.addZero(
        date.getMonth() + 1
      )}.${this.addZero(date.getDate())}`;
    },
    dateFormatDMY(date) {
      if (date === undefined) return "";
      const dd = date.substring(8, 10);
      const mm = date.substring(5, 7);
      const yyyy = date.substring(0, 4);
      return `${dd}.${mm}.${yyyy}`;
    },
    difMoreZero(num1, num2) {
      let dif = this.calcDif(num1, num2)
      console.log(dif);
      if (dif > 0) return dif
      else return 0
    },
    mulMoreZero(num1, num2) {
      let mul = this.calcMult(num1, num2)
      if (mul > 0) return mul
      else return 0
    },
  },
  computed: {
    ...mapGetters(['getPotreblenie', 'getLastPotreblenie', 'getPrevPotreblenie', 'getTarif', 'getLastTarif']),
    currentTarif() {
      if (this.getLastPotreblenie) {
        if (this.getLastPotreblenie.length != 0) {
          let currentDate = this.getLastPotreblenie.Data;
          return this.checkTarif(currentDate)
        }
      }
    },
    elT1Dif() {
      let dis = +this.difMoreZero(this.selectedPotreblenie.ElT1, this.prevSelectedPotreblenie.ElT1)
      console.log(dis);
      return dis
    },
    elT2Dif() {
      return +this.difMoreZero(this.selectedPotreblenie.ElT2, this.prevSelectedPotreblenie.ElT2)
    },
    elT3Dif() {
      return +this.difMoreZero(this.selectedPotreblenie.ElT3, this.prevSelectedPotreblenie.ElT3)
    },
    elT1Sum() {
      return +this.mulMoreZero(this.elT1Dif, this.currentTarif.ElT1Tarif)
    },
    elT2Sum() {
      return +this.mulMoreZero(this.elT2Dif, this.currentTarif.ElT2Tarif)
    },
    elT3Sum() {
      return +this.mulMoreZero(this.elT3Dif, this.currentTarif.ElT3Tarif)
    },
    elSum() {
      return +this.calcSum([+this.elT1Sum, +this.elT2Sum, +this.elT3Sum])
    },
    vodHolDif() {
      return +this.difMoreZero(
        this.calcSum([this.selectedPotreblenie.VodHol1, this.selectedPotreblenie.VodHol2]),
        this.calcSum([this.prevSelectedPotreblenie.VodHol1, this.prevSelectedPotreblenie.VodHol2]),
      )
    },
    vodGorDif() {
      return +this.difMoreZero(
        this.calcSum([this.selectedPotreblenie.VodGor1, this.selectedPotreblenie.VodGor2]),
        this.calcSum([this.prevSelectedPotreblenie.VodGor1, this.prevSelectedPotreblenie.VodGor2]),
      )
    },
    vodOtv() {
      return +this.calcSum([this.vodHolDif, this.vodGorDif])
    },
    vodHolSum() {
      return +this.mulMoreZero(this.vodHolDif, this.currentTarif.VodHolTarif)
    },
    vodGorSum() {
      return +this.mulMoreZero(this.vodGorDif, this.currentTarif.VodGorTarif)
    },
    vodOtvSum() {
      return +this.mulMoreZero(this.vodOtv, this.currentTarif.VodOtvTarif)
    },
    vodSum() {
      return +this.calcSum([+this.vodHolSum, +this.vodGorSum, +this.vodOtvSum])
    },
    itogoSchet() {
      return +this.calcSum([+this.elSum, +this.vodSum])
    },
    itogoSum() {
      return +this.calcSum([+this.elSum, +this.vodSum, this.currentTarif.Arenda, this.currentTarif.Internet])
    },

  },
  mounted() {
    this.setPotreblenie()
    this.setSelectedPotreblenie()
    this.setPrevSelectedPotreblenie(this.getPrevPotreblenie)
  }
};
