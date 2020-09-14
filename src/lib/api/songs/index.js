import request from '@lib/request'

function SearchSongsSuggest({
    keywords
}) {
    return request
        .get('/search/suggest', {
            params: {
                keywords,
            },
        })
        .then((result) => {
            return result.data
        })
}

function SearchSongs({
    keywords
}) {
    return request
        .get('/search', {
            params: {
                limit: 30,
                offset: 0,
                keywords,
            },
        })
        .then((result) => {
            return result.data
        })
}

function GetAlbumInfo({
    id
}) {
    return request
        .get('/album', {
            params: {
                id,
            },
        })
        .then((result) => {
            return result.data
        })
}

function GetSongLyric({
    id
}) {
    return request
        .get('/lyric', {
            params: {
                id,
            },
        })
        .then((result) => {
            return result.data
        })
}

function GetQQMusicSearch({
    keywords
}) {
    return request
        .get(`https://c.y.qq.com/soso/fcgi-bin/client_search_cp?p=1&n=2&w=${keywords}&format=json`, {
            params: {
                // id,
            },
        }, {
            headers: {
                referer: 'https://c.y.qq.com/',
                host: 'c.y.qq.com'
            },
        })
        .then((result) => {
            return result.data
        })
}
export default {
    SearchSongsSuggest,
    SearchSongs,
    GetAlbumInfo,
    GetSongLyric,
    GetQQMusicSearch
}