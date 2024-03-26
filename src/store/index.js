import { createStore } from 'vuex'
import sitesJson from './sites.json'
import photosJson from './photos.json'
import hobbyJson from './hobby.json'
import handmadeJson from './handmade.json'
import dysnaiJson from './dysnai2005.json'


export default createStore({
  state: {
    view: 'links', //режим отображения
    photoCurrentPage: [],
    cols: 'auto',
    mySitesJson: sitesJson,
    myPhotosJson: photosJson,
    myHobbyJson: hobbyJson,
    myHandmadeJson: handmadeJson,
    myDysnaiJson: dysnaiJson,
    album: photosJson, //текщий альбом (Фото, Хобби, Сайты)
    albumName: 'Фотографии',
    fz: 16,
    lh: 1.5,
    fontSize: {},    
  },
  mutations: {
    setView (state, payload) {
      state.view = payload
    },
    setPhotoCurrentPage (state, payload) {
      state.photoCurrentPage = payload
    },
    setAlbum (state, payload) {
      console.log(payload);
      state.album = payload
    },
    setAlbumName (state, payload) {
      // console.log(payload);
      state.albumName = payload
    },
    setFontSize (state, payload) {
      state.fontSize = payload;
    },
    setFZ (state, payload) {
      state.fz = payload;
    },
    setLH (state, payload) {
      state.lh = payload;
    },
  },
  actions: {
    updatePhotoCurrentPage ({ commit }, page) {
      return commit('setPhotoCurrentPage', page)
    },
    updateView ({ commit }, view) {
      console.log(view);
      return commit('setView', view)
    },
    updateAlbum ({ commit }, album) {
      console.log('updateAlbum ' + album);
      return commit('setAlbum', album)
    },
    updateAlbumName ({ commit }, albumName) {
      return commit('setAlbumName', albumName)
    },
    updateFontSize ({ commit}, fontSize) {
      return commit('setFontSize', fontSize)
    },
    updateFZ ({ commit}, fz) {
      return commit('setFZ', fz)
    },
    updateLH ({ commit}, lh) {
      return commit('setLH', lh)
    }
},
  getters: {
    getView: state => state.view,
    getPhotoCurrentPage: state => state.photoCurrentPage,
    getAlbum: state => state.album,
    getAlbumName: state => state.albumName,
    getPhotosLinks: state => state.myPhotosJson,
    getHobbyLinks: state => state.myHobbyJson,
    getHandmadeLinks: state => state.myHandmadeJson,
    getDysnaiLinks: state => state.myDysnaiJson,
    getSitesLinks: state => state.mySitesJson,
    getFontSize: state => {
      state.fontSize.fontSize = state.fz + "px",
      state.fontSize.lineHeight = state.lh + "em"
      return state.fontSize
      // console.log(state.fontSize)
    },
    getFZ: state => state.fz,
    getLH: state => state.lh
  }
})
