import loginapi from '@lib/api/user/login.js'
import * as types from './mutation-types.js'

import { HTTP_CODE } from '@lib/const.js'

export const login = ({ commit }, user) => {
  return loginapi.Login(user).then(result => {
    console.log('result',result)
    if (parseInt(result.code) === 200) {
      commit(types.MEMCACHE_LOGIN, result)
      commit(types.ACCOUNT_LOGIN, user)
    }
    return {
      result,
    }
  })
}


export const signOut = ({ commit }) => {
  commit(types.LOGIN_OUT)
}

//保存主题
export const setMetheme = ({ commit }, metheme) => {
  commit(types.METHEME_SET,metheme)
}

//存入播放列表
export const setSongList = ({ commit }, songList) => {
  commit(types.SONGS_SET,songList)
}

//存入播放歌曲的index
export const setSongIndex = ({ commit }, songIndex) => {
  commit(types.SONGSINDEX_SET,songIndex)
}

//存入播放歌曲的index
export const setLyricStatus = ({ commit }, num) => {
  commit(types.LYSICWINDOW_SET,num)
}
