import { MEMCACHE_LOGIN, LOGIN_OUT, ACCOUNT_LOGIN, METHEME_SET } from '../mutation-types'

import { searchWords } from '../actions'

const state = {
  keywords: localStorage.keywords ? JSON.parse(localStorage.keywords) : null,
}

const getters = {
//   isLogin,
}

const actions = {
    searchWords,
}

const mutations = {
  [SEARCH_SET](state, metheme) {
    localStorage.metheme = JSON.stringify(metheme)
    state.metheme = metheme
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
