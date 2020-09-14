<style lang="less" scoped>
.out-padding {
  position: fixed;
  top: 72px;
  padding: 0 0 72px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  background: #f5f5f5;
  .song-lysic {
    width: 100%;
    height: 500px;
    position: relative;
    padding: 12px 100px;
    box-sizing: border-box;
    display: flex;
    .song {
      width: 50%;
      height: 100%;
      position: relative;
      .play-bar {
        position: absolute;
        left: 100px;
        width: 100px;
        height: 146px;
      }
    }
    .lysic {
      width: 50%;
      height: 100%;
      overflow: auto;
    }
  }
}
</style>

<template>
  <transition name="el-zoom-in-bottom">
    <div v-show="drawer" class="out-padding">
      <div class="song-lysic">
        <div class="song">
          <img class="play-bar" src="@assets/icon/play-bar.png" alt="" />
          <!-- <img class="play-bar-support" src="@assets/icon/play-bar-support.png" alt=""> -->
        </div>
        <div class="lysic"></div>
      </div>
    </div>
  </transition>
</template>
<script>
import store from "@src/store";
import songsApi from "@/lib/api/songs";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  created() {
    this.drawer = this.$store.state.songs.openLyric;
    // this.GetLyric(1347524822)
    this.GetLyric(1421256202);
  },
  mounted() {},
  watch: {
    getOpenLyric(curval, oldval) {
      console.log(`最新值${curval}--旧值${oldval}`);
      this.GetPopupStatu(curval);
    },
  },
  computed: {
    getOpenLyric() {
      return this.$store.state.songs.openLyric;
    },
  },
  methods: {
    GetPopupStatu(val) {
      this.drawer = val;
    },
    GetLyric(id) {
      songsApi
        .GetSongLyric({
          id: id,
        })
        .then((res) => {
          console.log("Lyric", res.lrc.lyric);
          let lrc = res.lrc.lyric;
          this.GetLyricList(lrc);
        });
    },
    GetLyricList(lrc) {
      let lyricsObjArr = []
      const regNewLine = /\n/;
      const lineArr = lrc.split(regNewLine); // 每行歌词的数组
      const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;
      lineArr.forEach((item) => {
        if (item === "") return;
        const obj = {};
        const time = item.match(regTime);

        obj.lyric =
          item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
        obj.time = time
          ? this.formatLyricTime(time[0].slice(1, time[0].length - 1))
          : 0;
        obj.uid = Math.random()
          .toString()
          .slice(-6);
        if (obj.lyric === "") {
          console.log("这一行没有歌词");
        } else {
          lyricsObjArr.push(obj);
        }
      });
      console.log("歌词信息",lyricsObjArr)
    },
    formatLyricTime(time) {
      // 格式化歌词的时间 转换成 sss:ms
      const regMin = /.*:/;
      const regSec = /:.*\./;
      const regMs = /\./;

      const min = parseInt(time.match(regMin)[0].slice(0, 2));
      let sec = parseInt(time.match(regSec)[0].slice(1, 3));
      const ms = time.slice(
        time.match(regMs).index + 1,
        time.match(regMs).index + 3
      );
      if (min !== 0) {
        sec += min * 60;
      }
      return Number(sec + "." + ms);
    },
  },
};
</script>
