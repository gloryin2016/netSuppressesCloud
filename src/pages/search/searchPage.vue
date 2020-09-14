<style lang="less" scoped>
.main-page {
  width: 100%;
  height: 100%;
  padding: 10px 12px 72px 12px;
  box-sizing: border-box;
  background: #fff;
  // margin-bottom: 72px;
  .header {
    width: 100%;
    padding: 0 12px;
    height: 50px;
    display: flex;
    align-items: center;
    .keyword {
      height: 100%;
      font-size: 24px;
      line-height: 50px;
      color: #303133;
      font-weight: 600;
      span {
        margin-left: 12px;
        font-size: 16px;
        color: #909399;
        font-weight: 500;
      }
    }
  }
}
</style>
<template>
  <div class="main-page">
    <div class="header">
      <div class="keyword">
        {{ keyword }} <span>共为你找到{{ songCount }}条结果</span>
      </div>
    </div>
    <div class="search-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="歌曲" name="first">
          <el-table
            :data="searchSongsList"
            size="mini"
            stripe
            style="width: 100%"
            highlight-current-row
            @current-change="handleCurrentChange"
          >
            <el-table-column prop="sort" width="50"></el-table-column>
            <el-table-column prop="name" label="歌曲名称"> </el-table-column>
            <el-table-column prop="artistsName" label="歌手"> </el-table-column>
            <el-table-column prop="albumTitle" label="专辑"> </el-table-column>
            <el-table-column prop="finalTime" label="时长"> </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
        <el-tab-pane label="MV" name="third">MV</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import songsApi from "@/lib/api/songs";
import store from "@src/store";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      keyword: "",
      searchSongsList: [],
      songCount: "",
      activeName: "first",
    };
  },
  created() {
    this.keyword = this.$route.query.keywords;
  },
  mounted() {
    // this.GetSearchList();
    // this.getAblumInfo(91607757)
  },
  watch: {
    $route() {
      this.keyword = this.$route.query.keywords;
    },
    keyword() {
      //   console.log("重新请求" + this.keyword + "的数据");
      this.GetSearchList();
    },
  },
  methods: {
    GetSearchList() {
      let that = this;
      songsApi
        .SearchSongs({
          keywords: this.keyword,
        })
        .then((res) => {
          this.searchSongsList = res.result.songs.map((item, index) => {
            if (index < 9) {
              item.sort = `0${index + 1}`;
            } else {
              item.sort = `${index + 1}`;
            }
            if (item.artists.length > 1) {
              item.artistsName = item.artists[0].name;
            } else {
              item.artistsName = item.artists[0].name;
            }
            item.albumTitle = item.album.name;
            item.albumId = item.album.id;
            // item.picUrl = that.getAblumInfo(item.album.id);
            item.url = that.genSongPlayUrl(item.id);
            item.finalTime = that.timeToString(item.duration / 1000);
            return {
              index: index,
              id: item.id,
              name: item.name,
              artistsName: item.artistsName,
              albumId: item.albumId,
              url: item.url,
              cover: "",
              albumTitle: item.albumTitle,
              finalTime: item.finalTime,
              sort: item.sort,
              mvId: item.mvid,
            };
          });
          this.songCount = res.result.songCount;
          setTimeout(() => {
            this.SetSongsList();
          }, 200);
        });
    },
    SetSongsList() {
      this.$store.dispatch("setSongList", this.searchSongsList);
    },
    handleCurrentChange(val) {
      console.log(val);
      if (val) {
        let index = val.index;
        this.$store.dispatch("setSongIndex", index);
        console.log(store.state.songs.songIndex);
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    timeToString(value) {
      var secondTime = parseInt(value); // 秒
      var minuteTime = 0; // 分
      var hourTime = 0; // 小时
      if (secondTime > 60) {
        //如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        if (minuteTime < 10) {
          minuteTime = `0${parseInt(secondTime / 60)}`;
        } else {
          minuteTime = parseInt(secondTime / 60);
        }
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        if (secondTime < 10) {
          secondTime = `0${parseInt(secondTime / 60)}`;
        } else {
          secondTime = parseInt(secondTime / 60);
        }
        //如果分钟大于60，将分钟转换成小时
        // if (minuteTime > 60) {
        //   //获取小时，获取分钟除以60，得到整数小时
        //   hourTime = parseInt(minuteTime / 60);
        //   //获取小时后取佘的分，获取分钟除以60取佘的分
        //   minuteTime = parseInt(minuteTime % 60);
        // }
      }
      // console.log("minuteTime",minuteTime)
      var result = `${secondTime}`;

      if (minuteTime > 0) {
        // result = "00" + parseInt(minuteTime) + ":" + parseInt(secondTime);
        result = `${minuteTime}:${secondTime}`;
      } else {
        result = `00:${secondTime}`;
      }
      // if (hourTime > 0) {
      //   result = "" + parseInt(hourTime) + ":" + result;
      // }
      // console.log(result)
      return result;
    },
    genSongPlayUrl(id) {
      return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    },
    getAblumInfo(id) {
      songsApi
        .GetAlbumInfo({
          id: id,
        })
        .then((res) => {
          console.log("album", res);
          return res.album.picUrl;
        });
    },
  },
};
</script>
