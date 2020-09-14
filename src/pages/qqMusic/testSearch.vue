<style lang="less" scoped>
.home-page {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}
</style>
<template>
  <div class="home-page">
    <el-input
      v-model="keywords"
      @change="SearchSong"
      placeholder="请输入内容"
    ></el-input>
  </div>
</template>
<script>
import songsApi from "@/lib/api/songs";
import axios from 'axios'
import {getSearchList} from "@/lib/qqmusic";
export default {
  data() {
    return {
      keywords: "",
      responseList: [
        {
          album: {
            count: 2,
            itemlist: [
              {
                docid: "13393645",
                id: "13393645",
                mid: "000vtKmF3OEIbF",
                name: "春庭雪",
                pic:
                  "http://y.gtimg.cn/music/photo_new/T002R180x180M000000vtKmF3OEIbF_1.jpg",
                singer: "等什么君",
              },
              {
                docid: "13683507",
                id: "13683507",
                mid: "000qYDKQ1lEnwD",
                name: "春庭雪 (DJ名龙 Mix)",
                pic:
                  "http://y.gtimg.cn/music/photo_new/T002R180x180M000000qYDKQ1lEnwD_2.jpg",
                singer: "名龙",
              },
            ],
            name: "专辑",
            order: 2,
            type: 3,
          },
        },
      ],
    };
  },
  created() {
    // this._getRecommend(); // 初始化时请求
  },
  mounted() {},
  methods: {
    SearchSong() {
      // songsApi
      //   .GetQQMusicSearch({
      //     keywords: this.keywords,
      //   })
      //   .then((res) => {
      //     console.log("搜索结果", res);
      //     //   this.searchSongsList = res.result.songs
      //   });
      const url = '/api'
      axios.get(url + `soso/fcgi-bin/client_search_cp?p=1&n=10&w=${this.keywords}&format=json`)
      .then((res) => {
        console.log(res)
      })
      // this._getRecommend(this.keywords)
      `http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C4000036hiOc1PzcKd.m4a?guid=456532856&vkey=31FDF70D84F550B5B5E84235C07F94F4314C4620BEC83F56FB443158F88643391447B9FFC1FD7CC3FD2BA2CA0D01AE1380D74327FBDCED2E&uin=0&fromtag=38`
    },
    _getRecommend(w) {
      getSearchList(w).then((res) => {
        console.log(res); //
      });
    },
  },
};
</script>
