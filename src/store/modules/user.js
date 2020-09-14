import { MEMCACHE_LOGIN, LOGIN_OUT, ACCOUNT_LOGIN, METHEME_SET, SONGS_SET } from '../mutation-types'

import { login, signOut, setMetheme, setSongList } from '../actions'
import { isLogin } from '../getters'

const state = {
  user: localStorage.user ? JSON.parse(localStorage.user) : null,
  metheme: localStorage.metheme ? JSON.parse(localStorage.metheme) : null,
  // songList: localStorage.songList ? JSON.parse(localStorage.songList) : null
}

const getters = {
  isLogin,
}

const actions = {
  login,
  signOut,
  setMetheme,
  setSongList
}

const mutations = {
  [MEMCACHE_LOGIN](state, user) {
    localStorage.user = JSON.stringify(user)
    state.user = user
  },
  [LOGIN_OUT](state) {
    localStorage.removeItem('user')
    state.user = null
  },
  [ACCOUNT_LOGIN](state, account) {
    localStorage.account = JSON.stringify(account)
    state.account = account
  },
  [METHEME_SET](state, metheme) {
    localStorage.metheme = JSON.stringify(metheme)
    state.metheme = metheme
  },
  // [SONGS_SET](state, songList) {
  //   localStorage.songList = JSON.stringify(songList)
  //   state.songList = songList
  // },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
