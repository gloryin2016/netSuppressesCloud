<style lang="less" scoped>
.player-page {
  width: 100%;
  height: 100%;
  position: relative;
  top: 72px;
  z-index: 100;
}
.out-padding {
  position: fixed;
  top: 72px;
  padding: 0 0 72px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  background: rgba(51, 51, 51, 1);
  -webkit-overflow-scrolling: touch;
  background-repeat: no-repeat;
  background-size: 100%;
  /deep/ .el-scrollbar__wrap {
    overflow: hidden;
    display: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }
  .song-lysic {
    width: 100%;
    height: 600px;
    position: relative;
    padding: 12px 100px;
    box-sizing: border-box;
    display: flex;
    .song {
      width: 50%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .disc {
        position: relative;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-image: radial-gradient(5em 30em ellipse, #fff, #000);
        // border: 2px solid rgba(19, 19, 19, 0.7);
        box-shadow: 0 0 0 10px rgba(49, 54, 49, 0.4);
        animation: animations1 12s linear infinite forwards;
        animation-play-state: paused;
        overflow: hidden;
        // -webkit-transform: rotate(360deg);
        // transform: rotate(360deg);
        // animation: rotation 12s linear infinite;
        // -moz-animation: rotation 12s linear infinite;
        // -webkit-animation: rotation 12s linear infinite;
        // -o-animation: rotation 12s linear infinite;
        .imageCover {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes animations1 {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    .lysic {
      width: 50%;
      height: 100%;
      overflow: auto;
      position: relative;
      color: #fff;
      .songInfo {
        width: 100%;
        text-align: center;
        .title {
          font-size: 26px;
          font-weight: 600;
          max-height: 84px;
          line-height: 42px;
          overflow: hidden;
        }
        .album {
          font-size: 18px;
          height: 32px;
          line-height: 32px;
        }
      }
      /*歌词部分*/
      .music-lyric {
        // position: absolute;
        // top: 315px;
        // right: 0;
        // bottom: 0;
        // left: 0;
        padding-top: 215px;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        color: #fff;
        mask-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0,
          rgba(255, 255, 255, 0.6) 5%,
          rgba(255, 255, 255, 1) 15%,
          rgba(255, 255, 255, 1) 35%,
          rgba(255, 255, 255, 0.6) 55%,
          rgba(255, 255, 255, 0) 100%
        );
        .music-lyric-items {
          text-align: center;
          line-height: 34px;
          font-size: 12px;
          color: #fff;
          transform: translate3d(0, 0, 0);
          transition: transform 0.6s ease-out;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .on {
            color: #40ce8f;
          }
        }
      }
    }
  }

  .background-fliter {
    position: fixed;
    top: 72px;
    padding: 0 0 72px 0;
    box-sizing: border-box;
    z-index: -2;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(12px);
    opacity: 0.7;
    overflow: hidden;
    box-sizing: border-box;
  }
}
.mini-player {
  width: 100%;
  height: 72px;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  z-index: 999;
  .prog {
    width: 500%;
    height: 20px;
    border-radius: 5px;
    background: #f0f0f0;
    margin: 20px auto;
    .prog-line {
      transition: all 0.25s ease-in-out;
      height: 20px;
      background: #20a0ff;
      border-radius: 5px;
      position: relative;
    }
    .prog-line:after {
      display: block;
      content: "";
      height: 20px;
      background: #fff;
      border-radius: 5px;
      position: absolute;
      left: 0;
      top: 0;
      animation: progshow 1s infinite;
      @keyframes progshow {
        0% {
          width: 0;
          opacity: 0.3;
        }
        100% {
          width: 100%;
          opacity: 0.1;
        }
      }
    }
  }
  .songInfo {
    width: 480px;
    height: 100%;
    padding: 6px 24px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    .song-cover {
      width: 60px;
      height: 60px;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      .cover {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        position: relative;
      }
      .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // filter: blur(6px);
        background: #333;
        opacity: 0.5;
        .outer {
          width: 100%;
          height: 30px;
          img {
            width: 30px;
            height: 15px;
            margin-left: 15px;
            margin-top: 7px;
          }
        }
      }
    }
    .song-info {
      margin-left: 12px;
      min-width: 360px;
      height: 100%;
      .title {
        color: #606266;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .time-process {
        color: #909399;
        font-size: 10px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .play-event-part {
    min-width: 420px;
    max-width: 520px;
    height: 100%;
    padding: 6px 24px;
    box-sizing: border-box;
    position: relative;
    .play-content {
      min-width: 420px;
      max-width: 520px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon_center {
        margin-left: 28px;
        margin-right: 28px;
      }
      img {
        width: 28px;
        height: 28px;
      }
    }
    .ap-progress-line {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 8px;
      /deep/ .ap-play-track {
        position: relative;
        width: 100%;
        height: 3px;
        .el-slider__runway {
          width: 100%;
          height: 6px;
          margin: 0 0;
          background-color: #e4e7ed;
          border-radius: 3px;
          position: relative;
          cursor: pointer;
          vertical-align: middle;
          .el-slider__button {
            display: none;
          }
        }
      }
      .ap-play-bar-wrap {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 1.5px;
        overflow: hidden;
        background: #ebeef5;
      }
      .ap-buffer-bar {
        background: rgba(50, 176, 218, 0.47);
      }
      .ap-progress-my {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 1.5px;
        overflow: hidden;
        background: #32b0da;
      }
      .ap-progress-bar {
        background: #32b0da;
      }
      .ap-progress-thumb {
        transition: -webkit-transform 0.1s linear;
        transition: transform 0.1s linear;
        transition: transform 0.1s linear, -webkit-transform 0.1s linear;
        position: absolute;
        // display: none;
        top: -5px;
        left: -4px;
      }
      .ap-progress-thumb svg {
        width: 21px;
        height: 19px;
        display: block;
        cursor: pointer;
      }
    }
  }
  .right-part {
    margin-left: 20px;
    width: 360px;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: auto;
    .el-slider {
      width: 100px;
      margin-left: 20px;
      margin-right: 20px;
      /deep/ .el-slider__bar {
        background-color: #ff1818;
      }
      /deep/ .el-slider__button {
        border: 2px solid #ff1818;
      }
    }
  }
}
</style>

<template>
  <div class="player-page">
    <transition name="el-zoom-in-bottom">
      <div v-show="drawer" class="out-padding">
        <div
          class="background-fliter"
          :style="`background-image: url(${songInfo.cover})`"
        ></div>
        <div class="song-lysic">
          <div class="song">
            <div class="disc" ref="rotate">
              <img :src="songInfo.cover" class="imageCover" />
            </div>
          </div>
          <div class="lysic">
            <div class="songInfo">
              <div class="title">{{ songInfo.name }}</div>
              <div class="album">{{ songInfo.albumTitle }}</div>
              <div class="arties">{{ songInfo.artistsName }}</div>
            </div>
            <!--歌词-->
            <div ref="musicLyric" class="music-lyric">
              <div class="music-lyric-items" :style="lyricTop">
                <template v-if="lyricsObjArr.length > 0">
                  <p
                    v-for="(item, index) in lyricsObjArr"
                    :key="index"
                    :data-index="index"
                    ref="lyric"
                    :class="{ on: lyricIndex === index }"
                  >
                    {{ item.lyric }}
                  </p>
                </template>
                <p style="color: #fff;" v-else>歌词加载失败！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="mini-player">
      <audio :src="songInfo.url" id="audio"></audio>
      <div class="songInfo">
        <div
          class="song-cover"
          v-on:mouseover="changeActive($event)"
          v-on:mouseout="removeActive($event)"
        >
          <a href="javascript:;"
            ><img class="cover" :src="songInfo.cover" alt="" />
            <transition name="el-zoom-in-bottom">
              <div v-show="showCoverIcon" @click="ShowSongInfo" class="icon">
                <div class="outer">
                  <img :src="up_icon" alt="" />
                </div>
                <div class="outer">
                  <img :src="down_icon" alt="" />
                </div>
              </div>
            </transition>
          </a>
        </div>
        <div class="song-info">
          <div class="title">
            <!-- <marquee direction="left">
              {{ songInfo.name }} - {{ songInfo.artistsName }}</marquee
            > -->
            {{ songInfo.name }} - {{ songInfo.artistsName }}
          </div>
          <div class="time-process">{{ currentTime }}/{{ totalTime }}</div>
        </div>
      </div>
      <div class="play-event-part">
        <div class="play-content">
          <a href="javascript:;" @click="skipBack">
            <img class="icon_left" :src="icon_01" alt="" />
          </a>
          <a href="javascript:;" @click="play" v-show="playing">
            <img class="icon_center" :src="icon_02" alt="" />
          </a>
          <a href="javascript:;" @click="play" v-show="!playing">
            <img class="icon_center" :src="icon_03" alt="" />
          </a>
          <a href="javascript:;" @click="skipForward">
            <img class="icon_right" :src="icon_04" alt="" />
          </a>
        </div>
        <!-- 进度条 -->
        <div class="ap-progress-line">
          <div class="ap-play-track" ref="track">
            <el-slider
              :step="0.01"
              class="ap-play-track"
              @change="SetCurrentTime"
              v-model="processWidth"
            ></el-slider>
            <!-- 进度按钮 -->
            <div
              class="ap-progress-thumb"
              :class="{ 'forbid-transition': thumbSlide }"
              ref="thumb"
              :style="{ transform: 'translateX(' + thumbTranslateX + 'px)' }"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 32"
                class="ap-svg-exclude"
              >
                <path
                  fill="#32b0da"
                  opacity="0.28"
                  d="M11.789 1.207h11.789c3.72 0 6.737 3.016 6.737 6.737v8.421c0 3.72-3.016 6.737-6.737 6.737h-11.789c-3.72 0-6.737-3.016-6.737-6.737v-8.421c0-3.72 3.016-6.737 6.737-6.737z"
                ></path>
                <path
                  fill="#32b0da"
                  opacity="0.14"
                  d="M12.211 2.050h10.947c3.488 0 6.316 2.828 6.316 6.316v7.579c0 3.488-2.828 6.316-6.316 6.316h-10.947c-3.488 0-6.316-2.828-6.316-6.316v-7.579c0-3.488 2.828-6.316 6.316-6.316z"
                ></path>
                <path
                  fill="#000"
                  d="M22.737 2.969c3.256 0 5.895 2.627 5.895 5.866v6.705c0 3.24-2.639 5.866-5.895 5.866h-10.105c-3.256 0-5.895-2.626-5.895-5.866v-6.705c0-3.239 2.639-5.866 5.895-5.866h10.105z"
                ></path>
                <path
                  fill="#fff"
                  d="M22.737 2.969c3.256 0 5.895 2.627 5.895 5.866v6.705c0 3.24-2.639 5.866-5.895 5.866h-10.105c-3.256 0-5.895-2.626-5.895-5.866v-6.705c0-3.239 2.639-5.866 5.895-5.866h10.105z"
                ></path>
                <path
                  fill="#333"
                  d="M13.053 9.706c0.697 0 1.263 0.566 1.263 1.263v2.526c0 0.697-0.566 1.263-1.263 1.263s-1.263-0.566-1.263-1.263v-2.526c0-0.697 0.566-1.263 1.263-1.263z"
                ></path>
                <path
                  fill="#333"
                  d="M22.316 9.706c0.697 0 1.263 0.566 1.263 1.263v2.526c0 0.697-0.566 1.263-1.263 1.263s-1.263-0.566-1.263-1.263v-2.526c0-0.697 0.566-1.263 1.263-1.263z"
                ></path>
                <path
                  fill="#333"
                  d="M26.947 15.538c0 2.321-1.89 4.211-4.211 4.211h-10.105c-2.321 0-4.211-1.89-4.211-4.211v-6.737c0-2.323 1.89-4.211 4.211-4.211h10.105c2.321 0 4.211 1.888 4.211 4.211v6.737zM23.020 2.935l0.6-1.041c0.349-0.603 0.143-1.376-0.461-1.725s-1.376-0.141-1.725 0.461l-1.314 2.275h-4.871l-1.314-2.275c-0.349-0.603-1.122-0.81-1.725-0.461-0.605 0.349-0.812 1.122-0.463 1.725l0.601 1.041c-3.121 0.15-5.612 2.708-5.612 5.866v6.737c0 3.256 2.639 5.895 5.895 5.895h10.105c3.256 0 5.895-2.639 5.895-5.895v-6.737c0-3.16-2.491-5.716-5.612-5.866z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="right-part">
        <i class="el-icon-headset" :size="32"></i>
        <el-slider v-model="volume"></el-slider>
        <el-button
          slot="reference"
          icon="el-icon-s-unfold"
          @click="playModule = true"
        >
          <span v-show="playType == '1'">列表循环</span>
          <span v-show="playType == '2'">随机播放</span>
          <span v-show="playType == '3'">单曲循环</span>
        </el-button>
      </div>
    </div>
    <el-dialog title="播放模式" :visible.sync="playModule" width="30%" center>
      <el-radio v-model="playType" label="1">列表循环</el-radio>
      <el-radio v-model="playType" label="2">随机播放</el-radio>
      <el-radio v-model="playType" label="3">单曲循环</el-radio>
    </el-dialog>
  </div>
</template>
<script>
import songsApi from "@/lib/api/songs";
import icon_01 from "@assets/icon/icon_01.png";
import icon_02 from "@assets/icon/icon_02.png";
import icon_03 from "@assets/icon/icon_03.png";
import icon_04 from "@assets/icon/icon_04.png";
import icon_05 from "@assets/icon/icon_05.png";
import up_icon from "@assets/icon/up_icon.png";
import down_icon from "@assets/icon/down_icon.png";
import store from "@src/store";
let audio = "";
export default {
  data() {
    return {
      playing: false,
      drawer: false,
      playModule: false,
      index: 0, // 当前播放歌曲在列表中的下标
      id: 2, // 当前播放歌曲的id（此处貌似没有用到）
      currentTime: "00:00", // 当前播放时间
      totalTime: "00:00", // 总播放时间
      bufferedScaleX: 0, // 缓存进度
      processWidth: 0, //播放百分比
      progressScaleX: 0, // 播放进度
      thumbTranslateX: 0, // 进度条滑块位置
      silderBoxX: 0, //进度条滑块位置-->采用element后的
      volume: 50, // 音量进度
      // volumeX: 0, // 音量滑块位置
      thumbSlide: false, // 进度条滑块滑动时标记
      thumbVSlide: false, // 音量滑块滑动时标记
      error: "", // 报错内容
      playType: "1", // 播放类型：1-列表循环，2-随机播放，3-单曲循环
      listShow: false, // 播放列表是否展示
      showCoverIcon: false,
      songList: [
        {
          albumId: 75612550,
          albumTitle: "辞.九门回忆",
          artistsName: "解忧草",
          cover: "",
          finalTime: "04:00",
          id: 1347524822,
          index: 6,
          mvId: 0,
          name: "辞.九门回忆",
          sort: "07",
          url: "https://music.163.com/song/media/outer/url?id=1347524822.mp3",
        },
        {
          albumId: 85511857,
          albumTitle: "谪仙",
          artistsName: "伊格赛听",
          cover: "",
          finalTime: "02:0",
          id: 1421256202,
          index: 0,
          mvId: 0,
          name: "谪仙",
          sort: "01",
          url: "https://music.163.com/song/media/outer/url?id=1421256202.mp3",
        },
        {
          albumId: 35172219,
          albumTitle: "君の名は - 黄昏之时",
          artistsName: "Frank_Jiang",
          cover:
            "https://p1.music.126.net/YppJiMHyrLc7tDkj6jUttg==/109951162858188597.jpg",
          finalTime: "03:00",
          id: 459116892,
          index: 5,
          mvId: 0,
          name: "黄昏之时（FRANKOWO Bootleg）",
          sort: "06",
          url: "https://music.163.com/song/media/outer/url?id=459116892.mp3",
        },
      ],
      songInfo: {
        albumId: 75612550,
        albumTitle: "辞.九门回忆",
        artistsName: "解忧草/冰幽",
        cover: "",
        finalTime: "04:00",
        id: 1347524822,
        index: 6,
        mvId: 0,
        name: "辞.九门回忆",
        sort: "07",
        url: "https://music.163.com/song/media/outer/url?id=1347524822.mp3",
      },

      lyricsObjArr: [],
      lyricIndex: 0,
      top: 0, // 歌词居中
      icon_01,
      icon_02,
      icon_03,
      icon_04,
      icon_05,
      up_icon,
      down_icon,
    };
  },
  created() {
    this.songList = store.state.songs.songList;
    this.drawer = store.state.songs.openLyric;
  },
  mounted() {
    audio = document.getElementById("audio");
    this.Init();
  },
  watch: {
    gePlayid(curval, oldval) {
      this.PlayClickSong(curval);
    },
    //当搜索后播放列表变化，重新给songList赋值
    gePlayList(curval, oldval) {
      // console.log(`最新值${curval}--旧值${oldval}`);
      this.GetNewSongList(curval);
    },
    geOpenLyric(curval, oldval) {
      // console.log(`最新值${curval}--旧值${oldval}`);
      this.GetLysicPopupStatus(curval);
    },
    videoVolume(c, o) {
      this.GetSongVolume(c);
    },
  },
  computed: {
    //同步了store中state内的songIndex值
    gePlayid() {
      return this.$store.state.songs.songIndex;
    },
    //同步了store中state内的songList值
    gePlayList() {
      return this.$store.state.songs.songList;
    },
    //同步了store中state内的songList值
    geOpenLyric() {
      return this.$store.state.songs.openLyric;
    },
    optionSingleHeight() {
      return {
        singleHeight: 26,
      };
    },
    lyricTop() {
      return `transform :translate3d(0, ${-34 *
        (this.lyricIndex - this.top)}px, 0)`;
    },
    videoVolume() {
      return this.volume;
    },
  },
  methods: {
    Init() {
      this.songInfo = this.songList[0];
      this.audioInit();
      // this.GetLyric(this.songInfo.id);
    },
    //搜索后点击播放
    PlayClickSong(index) {
      this.songInfo = this.songList[index];
      this.GetCover(index);
      this.GetLyric(this.songInfo.id);
      this.playing = true;
      this.$refs.rotate.style.animationPlayState = "running";
      setTimeout(() => {
        this.totalTime = "00:00";
        audio.play();
      }, 100);
    },
    GetNewSongList(list) {
      this.songList = list;
    },
    changeActive(e) {
      this.showCoverIcon = true;
    },
    removeActive(e) {
      this.showCoverIcon = false;
    },
    ShowSongInfo() {
      console.log("是否打开歌词轮播", store.state.songs.openLyric);
      this.drawer = !this.drawer;
      this.$store.dispatch("setLyricStatus", this.drawer);
    },
    //播放与暂停
    play() {
      if (this.playing) {
        // 播放中,点击则为暂停
        this.playing = false;
        this.$refs.rotate.style.animationPlayState = "paused";
        audio.pause();
      } else {
        // 暂停中,点击则为播放
        this.playing = true;
        this.$refs.rotate.style.animationPlayState = "running";
        audio.play();
      }
    },
    audioInit() {
      this.GetCover(this.index);
      let _this = this;
      let progressL = this.$refs.track.offsetWidth; // 进度条总长
      // 音频或视频文件已经就绪可以开始，在点击播放时触发
      audio.addEventListener("play", () => {
        console.log("play");
      });

      // 浏览器开始寻找指定的音频或视频
      audio.addEventListener("loadstart", () => {
        console.log("loadstart");
        // 当前音量进度
        // _this.volume = audio.volume;
        // _this.volumeX = _this.volume * _this.$refs.trackV.offsetWidth;
      });

      // 播放位置改变时触发[注意:播放和调整指示定位时都会触发]（主要事件）
      audio.addEventListener("timeupdate", () => {
        // 当前播放时间
        _this.currentTime = _this.timeToString(audio.currentTime);
        let compareTime = audio.currentTime;
        for (let i = 0; i < _this.lyricsObjArr.length; i++) {
          if (compareTime > parseInt(_this.lyricsObjArr[i].time)) {
            const index = _this.$refs.lyric[i].dataset.index;
            if (i === parseInt(index)) {
              _this.lyricIndex = i;
            }
          }
        }
        // 总播放时间
        _this.totalTime = _this.timeToString(audio.duration);

        // 当前播放进度百分比
        let precent = audio.currentTime / audio.duration || 0;

        // 当前播放进度
        _this.progressScaleX = precent.toFixed(3);
        _this.processWidth = precent.toFixed(2) * 100;

        // 当前缓存进度
        // 已缓存时间
        let buffered = audio.buffered.length
          ? audio.buffered.end(audio.buffered.length - 1)
          : 0;
        _this.bufferedScaleX = (buffered / audio.duration).toFixed(3);

        // 当前进度按钮位置
        _this.thumbTranslateX = (precent * progressL).toFixed(3);
      });

      // 音频或视频能够不停顿地一直播放
      audio.addEventListener("canplaythrough", () => {
        console.log("canplaythrough");
      });

      // 音频或视频的时长已改变
      audio.addEventListener("durationchange", () => {
        console.log("durationchange");
        _this.totalTime = _this.timeToString(audio.duration);
      });

      // 在音频或视频终止加载时触发，包括终止当前播放（未加载完）进行下一首播放时也会触发
      audio.addEventListener("abort", () => {
        console.log("abort");
      });

      // 在音频或视频加载发生错误时触发
      audio.addEventListener("error", () => {
        console.log("error");
        console.log("-----networkState---------", audio.networkState);
        console.log("-----readyState---------", audio.readyState);
        switch (audio.networkState) {
          case "0":
            _this.error = "尚未初始化";
            break;
          case "1":
            _this.error = "正在下载数据";
            break;
          case "3":
            _this.error = "未找到资源";
            break;
        }
        audio.readyState == "0" && (_this.error = "音频地址错误");

        setTimeout(() => {
          _this.error = "";
        }, 3000);
      });

      // 播放结束
      audio.addEventListener(
        "ended",
        () => {
          console.log("ended");
          switch (parseInt(_this.playType)) {
            case 1: // 列表循环
              _this.index =
                _this.index + 1 >= _this.songList.length ? 0 : _this.index + 1;
              break;
            case 2: // 随机播放
              _this.index = Math.floor(Math.random() * _this.songList.length);
              break;
            case 3: // 单曲循环
              break;
          }
          _this.songInfo = _this.songList[_this.index];
          console.log("index", _this.index, _this.songInfo);
          this.lyricsObjArr = [];
          this.GetCover(_this.index);
          this.$store.dispatch("setSongIndex", _this.index);
          this.GetLyric(_this.songInfo.id);
          _this.thumbSlide = true;
          // 此处需要一定的延迟让audio的dom结构获取到，额，你们自己意会或者可以试着去掉看bug
          setTimeout(() => {
            audio.play();
          }, 100);
          // 解决因为transition的回弹bug
          setTimeout(() => {
            _this.thumbSlide = false;
          }, 1000);
        },
        true
      );
    },
    // 上一首
    skipBack() {
      this.skipFn("skipBack");
    },

    // 下一首
    skipForward() {
      this.skipFn("skipForward");
    },
    //上下首封装
    skipFn(type) {
      switch (parseInt(this.playType)) {
        case 2: // 随机播放
          this.index = Math.floor(Math.random() * this.songList.length);
          break;
        default:
          if (type == "skipBack") {
            this.index - 1 >= 0 ? this.index-- : 0;
          } else {
            this.index =
              this.index + 1 >= this.songList.length
                ? this.songList.length - 1
                : this.index + 1;
          }
          break;
      }

      this.songInfo = this.songList[this.index];
      this.lyricsObjArr = [];
      this.GetCover(this.index);
      this.$store.dispatch("setSongIndex", this.index);
      this.GetLyric(this.songInfo.id);
      this.playing = true;
      setTimeout(() => {
        this.totalTime = "00:00";
        audio.play();
      }, 100);
    },
    // 字符串转数字
    stringToNum(str) {
      return Number(str.replace(/translateX\(|px\)/g, ""));
    },
    // 秒值转字符串
    timeToString(param) {
      param = parseInt(param);
      let hh = "",
        mm = "",
        ss = "";
      if (param >= 0 && param < 60) {
        param < 10 ? (ss = "0" + param) : (ss = param);
        return "00:" + ss;
      } else if (param >= 60 && param < 3600) {
        mm = parseInt(param / 60);
        mm < 10 ? (mm = "0" + mm) : mm;
        param - parseInt(mm * 60) < 10
          ? (ss = "0" + String(param - parseInt(mm * 60)))
          : (ss = param - parseInt(mm * 60));
        return mm + ":" + ss;
      }
    },
    //获取封面
    GetCover(index) {
      songsApi
        .GetAlbumInfo({
          id: this.songList[index].albumId,
        })
        .then((res) => {
          console.log("album", res);
          this.songInfo.cover = res.album.picUrl;
        });
    },
    SetCurrentTime(val) {
      console.log("拖拽", val);
      let precent = (val / 100).toFixed(2);
      audio.currentTime = audio.duration * precent;
      this.currentTime = this.timeToString(audio.currentTime);
      let progressL = this.$refs.track.offsetWidth; // 进度条总长
      // 当前进度按钮位置
      this.thumbTranslateX = (precent * progressL).toFixed(3);
    },
    GetSongVolume(c) {
      audio.volume = this.volume / 100;
    },
    GetLysicPopupStatus(val) {
      this.drawer = val;
    },
    //获取歌词信息
    GetLyric(id) {
      songsApi
        .GetSongLyric({
          id: id,
        })
        .then((res) => {
          // console.log("Lyric", res.lrc.lyric);
          let lrc = res.lrc.lyric;
          this.GetLyricList(lrc);
        });
    },
    GetLyricList(lrc) {
      let lyricsObjArr = [];
      const regNewLine = /\n/;
      const lineArr = lrc.split(regNewLine); // 每行歌词的数组
      console.log("歌词", lrc);
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
      console.log("歌词信息", lyricsObjArr);
      this.lyricsObjArr = lyricsObjArr;
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
