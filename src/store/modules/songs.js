import { SONGS_SET, SONGSINDEX_SET, LYSICWINDOW_SET } from '../mutation-types'

import { setSongList, setSongIndex , setLyricStatus } from '../actions'
import { isLogin } from '../getters'

const state = {
  songList: localStorage.songList ? JSON.parse(localStorage.songList) : null,
  songIndex: localStorage.songIndex ? JSON.parse(localStorage.songIndex) : null,
  openLyric: localStorage.openLyric ? JSON.parse(localStorage.openLyric) : false,
}

const getters = {
}

const actions = {
  setSongList,
  setSongIndex,
  setLyricStatus
}

const mutations = {
  [SONGS_SET](state, songList) {
    localStorage.songList = JSON.stringify(songList)
    state.songList = songList
  },
  [SONGSINDEX_SET](state, songIndex) {
    localStorage.songIndex = JSON.stringify(songIndex)
    state.songIndex = songIndex
  },
  [LYSICWINDOW_SET](state, num) {
    localStorage.openLyric = JSON.stringify(num)
    state.openLyric = num
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
