<template>
  <v-app class="d-flex justify-center">
    <MyHeader />
    <v-main>
      <router-view />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
// import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="sass">
*
  margin: 0 !important
  padding: 0
  -webkit-box-sizing: border-box
  box-sizing: border-box
  font-size: 1 rem

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  overflow: hidden
  text-align: center
  color: #2c3e50



html
  overflow-y: hidden !important
  font-size: 150%
  @media only screen and (min-width: 600px)
    font-size: 94%

  @media only screen and (min-width: 1000px)
    font-size: 98%

  @media only screen and (min-width: 1200px)
      font-size: 100%

.v-container
  max-width: 100vw !important
  height: calc(100vh - 130px)
  padding: 0

// .v-application--wrap
//   min-height: 78vh

.avatar
  height: 50vh
  width: 20vw
  object-fit: cover
  object-align: center

.imgintext
  display: flex
  justify-content: space-around
  margin-bottom: 20px
  flex-wrap: wrap
  gap: 10px

.v-main
  min-height: calc(100vh - 110px)
  align-items: center
  overflow-y: auto

.row
  justify-content: space-around

.buttons
  display: flex
  justify-content: space-between


.v-card
  overflow: hidden
  transition: .2s ease-in-out

.backgrounding
  background-color: #ddd

.bg
  background-color: #ddd
  border: 1px solid #ddd

.v-image
  transition: .2s ease-in-out
  &:hover
    transform: scale(1.05)

.osnova
  position: relative

.full-picture
  position: absolute
  width: 100vw
  height: 100vh
  left: 0
  top: 0
  z-index: 999999
  background-color: #fff

.text-h5
  background-color: rgba(#FFF, 0.4)
</style>
