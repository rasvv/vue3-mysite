<template>
    <v-card flat height="85vh" class="overflow-auto">
        <v-card-text>
            <p class="text-justify" :style="getFontSize">
                В восемь часов утра начал разъезжаться народ с поляны. Первыми мы отправили украинскую команду, причем
                все, кто был с Запорожской станции, зачем-то остались на поляне еще на сутки. Далее пришел наш автобус.
                Были долгие прощания, обнимания, целования, слезы, какая-то горечь на душе (кто был на поляне пеня
                поймет). Как всегда, вместо положенного времени мы уехали на час позднее. Заехали в Вильнюсе в магазин,
                где накупили провизии для поездки. В пять часов вечера был наш поезд. Рассевшись по своим местам, мы
                быстро перекусили и завалились спать. Приехали в Москву утром. Сфотографировались командой и каждый
                разъехался в своем направлении. Мы взяли билеты на 12 часов дня, почти сразу сели в поезд, и опять
                завалились спать. В 10 часов вечера мы были уже в Курчатове. Приехав домой, я думал, что долго не засну,
                так как проспал целый день, но дойдя до кровати заснул как убитый.
            </p>
            <p class="text-justify" :style="getFontSize">
                Вот так и закончилась моя поездка в Литву на фестиваль "Dysnai – 2005"!
            </p>


        </v-card-text>
    </v-card>
</template>  

<script>
import { mapGetters } from 'vuex'
import PhotoGridText from '../../components/PhotosgridText.vue'
export default {
    components: {
        PhotoGridText
    },
    computed: {
        ...mapGetters(["getFontSize"]),
    },
}
</script>