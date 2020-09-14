import axios from 'axios'

export function getSearchList (keywords) {
    return axios({
        method: 'get',
        url: `/api/https://c.y.qq.com/soso/fcgi-bin/client_search_cp?p=1&n=2&w=${keywords}&format=json`
    })
}

export function getSearchLists () {
    return axios({
        method: 'get',
        url: '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    })
}