<template>
    <v-card flat height="85vh" class="overflow-auto">
        <v-card-text>
            <p class="text-justify" :style="getFontSize">
                <b>Диснай (Dysnai)</b> — международный фестиваль молодых
                работников атомной энергетики. Проводится на берегу озера Луодис,
                близ города Висагинас, где расположена Игналинская АЭС, ежегодно,
                начиная с 1988 года в первой неделе июля. В фестивале принимают
                участие молодые специалисты, работающие в сфере атомной энергетики
                из Литвы, России, с Украины, из Восточной и Центральной Европы
                (представители Бельгии, Болгарии, Германии, Великобритании,
                Венгрии, Румынии, Словакии и Швеции).
            </p>
            <PhotoGridText :photos="[1]" />
            <p class="text-justify" :style="getFontSize">
                Позднее, в начале 2000-х, подобный фестиваль стал проводиться в
                России. Первый прошел под Десногорском (Смоленская АЭС) на реке
                Десна, поэтому получил название <b>Деснай</b>. Проводился он в
                разных местах вблизи расположения городов-спутников атомных
                станций России.
            </p>

            <p class="font-weight-black text-justify" :style="getFontSize">
                Немного терминологии:
            </p>
            <p class="text-justify" :style="getFontSize">
                <b>Лагерь</b> – территориально обособленное пространство,
                отведенное команде для установки палаток и командного шатра.
            </p>
            <p class="text-justify" :style="getFontSize">
                <b>Линейка</b> – вечернее собрание команд вокруг сцены, на которой
                представитель команды (обычно капитан) докладывает о результатах
                прошедшего дня. После отчета капитана происходит показ нескольких
                творческих номеров, подготовленных заранее или импровизационных.
            </p>
            <p class="text-justify" :style="getFontSize">
                <b>Стыковка</b> – встреча двух или более команд за дружеским
                столом.
            </p>
            <PhotoGridText :photos="[6]" />
            <p class="text-justify" :style="getFontSize">
                <b>Комсомолка</b> – большая емкость (не менее 1 л), содержащая
                крепкий напиток.
            </p>
            <p class="text-justify" :style="getFontSize">
                <b>Пустить Комсомолку</b> – каждый участник стыковки берет
                Комсомолку, представляется, отпивает и передает дальше.
            </p>
            <p class="text-justify" :style="getFontSize">
                <b>Гвардия</b> - организация, объединившая крепких представителей
                от каждой команды, обеспечивающая порядок на поляне.
            </p>
            <PhotoGridText :photos="[2]" />
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

<style scoped>
p {
	text-indent: 0px;
	text-align: justify;
}
</style>