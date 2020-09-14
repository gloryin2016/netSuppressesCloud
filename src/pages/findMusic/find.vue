<style lang="less" scoped>
.home-page {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  .container {
    position: relative;
    max-width: 1200px;
    min-width: 600px;

    .swiper-part {
      width: 100%;
      height: 224px;
      padding: 12px 24px;
      box-sizing: border-box;
    }
    .recomend-title {
      width: 100%;
      height: 42px;
      font-weight: 600;
      color: #606266;
      line-height: 42px;
      text-align: left;
      padding-left: 24px;
      font-size: 20px;
      box-sizing: border-box;
    }
    .card-container {
      width: 100%;
      position: relative;
      .recomend-card {
        max-width: 1200px;
        min-width: 600px;
        padding: 12px 14px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        cursor: pointer;
        flex: 1;
        .card-list {
          width: 20%;
          padding: 0 10px 20px 10px;
          box-sizing: border-box;
          .cover {
            width: 100%;
            display: block;
            border-radius: 6px;
          }
          .title {
            width: auto;
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            overflow: hidden;
            color: #909399;
            text-overflow: ellipsis; /* 超出部分显示省略号 */
            white-space: nowrap; /*规定段落中的文本不进行换行 */
            text-align: left;
          }
        }
      }
    }
    .play-list {
      width: 100%;
      position: relative;
      padding: 12px 24px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .list-content {
        width: 50%;
        height: 84px;
        padding: 12px 10px;
        box-sizing: border-box;
        display: flex;
        .music-index {
          width: 60px;
          height: 60px;
          text-align: center;
          line-height: 60px;
        }
        .music-cover {
          width: 60px;
          height: 60px;
          border-radius: 2px;
        }
        .music-info {
          min-width: 240px;
          max-width: 300px;
          margin-left: 16px;
          .name {
            width: 100%;
            height: 30px;
            line-height: 30px;
            color: #303133;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .singer {
            width: 100%;
            height: 30px;
            line-height: 30px;
            color: #606266;
            font-size: 12px;
          }
        }
      }
      .list-content:hover {
        background: #f2f6fc;
      }
    }
    .movie-list {
      width: 100%;
      position: relative;
      padding: 12px 12px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .list-content {
        width: 25%;
        padding: 0 12px;
        box-sizing: border-box;
        .mv-pic {
          width: 100%;
          border-radius: 4px;
        }
        .title {
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-size: 0.12em;
          color: #303133;
        }
        .singer {
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-size: 0.12em;
          color: #909399;
        }
      }
    }
  }
}
</style>
<style lang="less">
.el-carousel__item {
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>

<template>
  <div class="home-page">
    <div class="container">
      <div class="swiper-part">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item, index) in imageList" :key="index">
            <img :src="item.imageUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="recomend-title">今日推荐</div>
      <div class="card-container">
        <div class="recomend-card">
          <div class="card-list" v-for="(item, index) in cardList" :key="index">
            <img class="cover" :src="item.picUrl" alt="" />
            <div class="title">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="recomend-title">最新音乐</div>
      <div class="play-list">
        <div class="list-content" v-for="(item, index) in songsList" :key="index">
          <div class="music-index">{{index+1}}</div>
          <img class="music-cover" :src="item.picUrl" alt="" />
          <div class="music-info">
            <div class="name">{{item.name}}</div>
            <div class="singer">{{item.song.artists[0].name}}</div>
          </div>
        </div>
      </div>
      <div class="recomend-title">推荐MV</div>
      <div class="movie-list">
        <div class="list-content" v-for="(item, index) in mvList" :key="index">
          <img class="mv-pic" :src="item.picUrl" alt="" />
          <div class="title">{{ item.name }}</div>
          <div class="singer">{{ item.artistName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defualtAvatar from "@assets/avatar_01.jpg";
import homeApi from '@/lib/api/homePage'
export default {
  name: "home-page",
  data() {
    return {
      defualtAvatar,
      imageList: [
        "http://p1.music.126.net/DbJWTijj7jDkpTNAAsY11Q==/109951165266722627.jpg",
        "http://p1.music.126.net/G-N-hIuuttXTNTQMT69FJQ==/109951165269893304.jpg?param=1000y400",
        "http://p1.music.126.net/WSxYS7DltvBMNw650m1vxw==/109951165269801211.jpg?param=1000y400",
        "http://p1.music.126.net/4kupXdkPqPfdJgzE57CZWQ==/109951165269839665.jpg?param=1000y400",
        "http://p1.music.126.net/Zx0XHSKwdQghpiuMZb7uKw==/109951165266765921.jpg?param=1000y400",
      ],
      cardList: [
        {
          pic:
            "https://p1.music.126.net/TV0_z1SFZIxDavpZkSLs-g==/109951165265729523.jpg?param=300y300",
          title: "新歌速递",
        },
        {
          pic:
            "https://p2.music.126.net/Tld8MKjMj-1QK0lSq5aZVA==/109951165056310006.jpg?param=300y300",
          title: "欧美流行",
        },
        {
          pic:
            "https://p2.music.126.net/WH3mG-4yl-BDLMZ_cUOMnA==/109951164629939904.jpg?param=300y300",
          title: "每天醒来都是你",
        },
        {
          pic:
            "https://p2.music.126.net/5qehxWSSDYYmhfRc9BHcxQ==/109951165125269160.jpg?param=300y300",
          title: "你的单曲循环",
        },
        {
          pic:
            "https://p2.music.126.net/CzQ-12cCacY8VgdaNUUq6w==/109951164306182168.jpg?param=300y300",
          title: "明明你也很爱我",
        },
        {
          pic:
            "https://p2.music.126.net/hl7KL-4jpecXZ8pNmSDf-g==/109951165236359263.jpg?param=300y300",
          title: "快和TA一起来听一下这些七夕的歌曲吧！",
        },
        {
          pic:
            "https://p2.music.126.net/IoebTCedSqaRVF9OKlRkUA==/109951165096914476.jpg?param=300y300",
          title: "这一生关于你的风景",
        },
        {
          pic:
            "https://p2.music.126.net/f5wqbyYyGeimv20LyX9MzA==/109951165267752276.jpg?param=300y300",
          title: "你的野区节奏",
        },
        {
          pic:
            "https://p1.music.126.net/5TN9F3PsuD3gZKYZuhbr5Q==/109951165122713861.jpg?param=300y300",
          title: "这个七夕有你才甜",
        },
        {
          pic:
            "https://p1.music.126.net/OP3pdko0dp6sh6T2X_5ruw==/109951165090068862.jpg?param=300y300",
          title: "所以爱会消失是吗？",
        },
      ],
      songsList: [],
      mvList: [
        {
          pic:
            "https://p2.music.126.net/mBVLuaPbq2eVTG3pnwUHQQ==/109951165265738325.jpg?param=500y260",
          title: "断缘诀",
          singer: "摩登兄弟刘宇宁",
        },
        {
          pic:
            "https://p2.music.126.net/3liTn_bDQsMkQD6KVEraFQ==/109951165270418448.jpg?param=500y260",
          title: "断缘诀",
          singer: "网易云音乐",
        },
        {
          pic:
            "https://p1.music.126.net/TowtKj-P7TAZho1QhBNTMQ==/109951165265612078.jpg?param=500y260",
          title: "断缘诀",
          singer: "大阪&春夏秋冬",
        },
        {
          pic:
            "https://p1.music.126.net/ZxjwgNyiIcTkCgD0lCtAQA==/109951165268487967.jpg?param=500y260",
          title: "断缘诀",
          singer: "轩东",
        },
      ],
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      this.GetBanner()
      this.GetNewSongs()  
      this.GetSongsList()  
      this.GetMvRecomend()  
    },
    GetBanner() {
      homeApi.GetBannerList({}).then((res) => {
        console.log("banner", res);
        this.imageList = res.banners
      });
    },
    //最新音乐
    GetNewSongs() {
      homeApi.GetNewSongList({}).then((res) => {
        console.log("新歌", res);
        this.songsList = res.result
      });
    },
    //今日推荐
    GetSongsList() {
      homeApi.GetSongsList({}).then((res) => {
        console.log("今日推荐", res);
        this.cardList = res.result
      });
    },
    //MV推荐
    GetMvRecomend() {
      homeApi.GetMvList({}).then((res) => {
        console.log("GetMvList", res);
        this.mvList = res.result
      });
    },
  },
};
</script>
