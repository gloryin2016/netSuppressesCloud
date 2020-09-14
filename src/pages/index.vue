<style lang="less" scoped>
.index-page {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 72px 0 0 0;
  box-sizing: border-box;
  z-index: 10000;
  .page-header {
    width: 100%;
    height: 72px;
    padding: 0 24px;
    z-index: 10000;
    box-sizing: border-box;
    background: rgba(
      rgb(230, 248, 255),
      rgb(217, 243, 255),
      rgb(186, 230, 248),
      0.5
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    .userInfo {
      position: relative;
      width: 360px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .nickname {
        width: 300px;
        padding: 0 16px;
        box-sizing: border-box;
        display: block;
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        color: #fff;
        text-shadow: 0 0 0.3em #6eb9d9, -0 -0 0.3em #6eb9d9;
      }
    }
    .top-right-style {
      display: flex;
      align-items: center;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
        margin-right: 20px;
      }
    }
  }
  .top-bg {
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    left: 0;
    -webkit-overflow-scrolling: touch;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 10;
  }
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    // padding-bottom: 72px;
    // box-sizing: border-box;
    .menu-left {
      width: 20%;
      min-width: 240px;
      height: 100%;
      background: #f5f5f5;
      padding: 16px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      background-repeat: no-repeat;
      background-size: 100%;
      // z-index: 2;
      // position: absolute;
      // left: 0;
      // top: 0;
      .scrollbar::-webkit-scrollbar {
        width: 16px;
        height: 16px;
        background-color: #f5f5f5;
      }
      .menu-top-list {
        width: 100%;
        padding: 12px 18px;
        box-sizing: border-box;
        height: 36px;
        display: flex;
        align-items: center;
        .title-1 {
          padding-left: 10px;
          font-size: 0.5em;
          color: #fff;
        }
        .title-2 {
          padding-left: 10px;
          font-size: 0.5em;
          color: #303133;
        }
        .title-3 {
          padding-left: 10px;
          font-size: 0.5em;
          color: #303133;
        }
      }
      .menu-top-list-choose {
        width: 100%;
        padding: 12px 18px;
        box-sizing: border-box;
        height: 36px;
        display: flex;
        align-items: center;
        // background-color: #ebeef5;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        border-radius: 4px;
        .title {
          padding-left: 10px;
          font-size: 0.5em;
        }
        .title-choose {
          padding-left: 10px;
          font-size: 0.5em;
          color: #d33a31;
        }
      }
      .menu-top-list:hover {
        // background-color: #ebeef5;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        border-radius: 4px;
        cursor: pointer;
        opacity: 0.6;
      }
      .common-title {
        width: 100%;
        height: 42px;
        line-height: 42px;
        color: #c0c4cc;
        text-align: left;
        padding-left: 18px;
        box-sizing: border-box;
        font-size: 10px;
      }
    }
    .main {
      width: 80%;
      min-width: 800px;
      height: 100%;
      // padding-bottom: 72px;
      box-sizing: border-box;
      overflow: auto;
      .scrollbar::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #f5f5f5;
      }
    }
  }
  /deep/ .el-drawer__body {
    margin-top: 80px;
    padding: 20px;
    box-sizing: border-box;
    // background-image: url()
    .login-btn {
      margin-left: 120px;
    }
    .userInfo {
      width: 100%;
      padding: 100px 0 0 0;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      background-repeat: no-repeat;
      background-size: 100%;
      .avatar-box {
        display: flex;
        justify-content: center;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: #d33a31 2px solid;
        }
      }
      .form-list {
        width: 100%;
        display: flex;
        height: 42px;
        line-height: 42px;
        background: #fff;
        .desc {
          width: 20%;
        }
        .info {
          width: 80%;
        }
      }
    }
  }
}
</style>
<template>
  <div class="index-page">
    <div class="page-header">
      <div class="userInfo" @click="UserLogin">
        <a href="javascript:;"><img class="avatar" :src="avatar" alt=""/></a>
        <div class="nickname">
          <i>{{ nickname }}</i>
        </div>
      </div>
      <div class="top-right-style">
        <a style="color: #333" href="javascript:;">
          <div class="icon" @click="centerDialogVisible = true">
            <i class="el-icon-view"></i>
          </div>
        </a>
        <el-input
          style="width: 200px;"
          placeholder="搜索"
          prefix-icon="el-icon-search"
          v-model="searchKeyWord"
          @input="InputKeyword"
          @change="SelectKeyword"
        >
        </el-input>
      </div>
    </div>
    <div class="top-bg" :style="`background-image: url(${showTopBg})`"></div>
    <div class="content">
      <div
        class="menu-left"
        :style="`background-image: url(${showLeftBg})`"
      >
        <div v-for="(item, index) in menuList" :key="index">
          <div v-if="item.title != ''" class="common-title">
            {{ item.title }}
          </div>
          <div
            :class="
              items.statu == true ? 'menu-top-list-choose' : 'menu-top-list'
            "
            v-for="(items, indexs) in item.subMenu"
            :key="indexs"
            @click="SetMenuClick(index, indexs, items.name)"
          >
            <i :class="`${items.icon}`"></i>
            <div :class="items.statu == true ? `title-choose` : `title-${metheme}`">
              {{ items.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <el-scrollbar style="height:100%">
          <router-view />
          <!-- <SearchLists/> -->
        </el-scrollbar>
      </div>
    </div>
    <MiniPlayer />
    <!-- <LyricPlayer /> -->
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      direction="ltr"
      :before-close="handleClose"
    >
      <el-form
        ref="form"
        :model="form"
        v-show="!hasLoginStatus"
        label-width="120px"
      >
        <el-form-item label="请输入UID">
          <el-input style="width: 240px;" v-model="form.account"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="Login"
          >登录</el-button
        >
      </el-form>
      <div
        v-show="hasLoginStatus"
        class="userInfo"
        :style="`background-image: url(${defualBackground})`"
      >
        <div class="avatar">
          <div class="avatar-box">
            <img :src="avatar" alt="" />
          </div>
          <div class="avatar-box">
            {{ nickname }}
          </div>
        </div>
        <div class="form-list">
          <div class="desc">生日</div>
          <div class="info">1997-10-26</div>
        </div>
      </div>
    </el-drawer>
    <el-dialog
      title="主题"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <el-radio v-model="metheme" label="1">主题1</el-radio>
      <el-radio v-model="metheme" label="2">主题2</el-radio>
      <el-radio v-model="metheme" label="3">主题3</el-radio>
    </el-dialog>
  </div>
</template>
<script>
// import AppHeader from "@components/header.vue";
import homeApi from "@/lib/api/homePage";
import songsApi from "@/lib/api/songs";
import MiniPlayer from "@components/mini-player.vue";
import LyricPlayer from "@components/lyric.vue";
import SearchLists from "@components/searchList.vue";
import defualtAvatar from "@assets/avatar_02.jpg";
import topBg1 from "@assets/background/bg_02.png";
import topBg2 from "@assets/background/bg_01.png";
import topBg3 from "@assets/background/bg_06.jpg";
import leftBg1 from "@assets/background/bg_07.jpg";
import leftBg2 from "@assets/background/bg_04.png";
import leftBg3 from "@assets/background/bg_08.png";
import store from "@src/store";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      hasLoginStatus: false, //用户是否登录
      uid: 0,
      metheme: "1",
      topBg1,
      topBg2,
      topBg3,
      leftBg1,
      leftBg2,
      leftBg3,
      showLeftBg: leftBg1,
      showTopBg: topBg1,
      defualBackground:
        "https://img.qupeiyin.cn/ugcdev/2020-07-21/accef8fec4e32a5832adbe26152917dd.jpg",
      defualtAvatar,
      searchKeyWord: "",
      menuList: [
        {
          title: "",
          id: 1,
          subMenu: [
            {
              icon: "el-icon-mobile-phone",
              title: "发现音乐",
              statu: true,
              id: 11,
              name: "find",
            },
            {
              icon: "el-icon-document",
              title: "推荐歌单",
              statu: false,
              id: 12,
              name: "qqSearch",
            },
            {
              icon: "el-icon-service",
              title: "最新音乐",
              statu: false,
              id: 13,
              name: "find",
            },
            {
              icon: "el-icon-star-off",
              title: "最新MV",
              statu: false,
              id: 14,
              name: "find",
            },
          ],
        },
        {
          title: "创建的歌单",
          id: 2,
          subMenu: [
            {
              icon: "el-icon-headset",
              title: "我喜欢的音乐",
              statu: false,
              id: 21,
              name: "find",
            },
            {
              icon: "el-icon-headset",
              title: "我大学听过的音乐",
              statu: false,
              id: 22,
              name: "find",
            },
            {
              icon: "el-icon-headset",
              title: "2019年度歌单",
              statu: false,
              id: 23,
              name: "find",
            },
            {
              icon: "el-icon-headset",
              title: "日语专辑",
              statu: false,
              id: 24,
              name: "find",
            },
            {
              icon: "el-icon-headset",
              title: "我的国风专辑",
              statu: false,
              id: 25,
              name: "find",
            },
          ],
        },
        {
          title: "收藏的歌单",
          id: 3,
          subMenu: [
            {
              icon: "el-icon-star-off",
              title: "王者荣耀原声",
              statu: false,
              id: 31,
              name: "find",
            },
            {
              icon: "el-icon-star-off",
              title: "国风",
              statu: false,
              id: 32,
              name: "find",
            },
            {
              icon: "el-icon-star-off",
              title: "那些评论过万的日语歌曲",
              statu: false,
              id: 33,
              name: "find",
            },
          ],
        },
      ],
      drawer: false,
      centerDialogVisible: false,
      form: {
        account: "",
      },
      avatar: "",
      nickname: "",
      searchSongsList: [],
    };
  },
  components: {
    // AppHeader,
    MiniPlayer,
    LyricPlayer,
    SearchLists,
  },
  watch: {
    metheme: "GetMetheme",
  },
  created() {
    document.title = "网抑云时间";
    this.menuList.forEach((item, index) => {
      item.subMenu.forEach((items, indexs) => {
        if (items.statu == true) {
          // this.$router.push({ name: `${items.name}` });
        }
      });
    });
    if (store.state.user.user != null) {
      this.hasLoginStatus = true;
      this.avatar = store.state.user.user.profile.avatarUrl;
      this.nickname = store.state.user.user.profile.nickname;
      this.uid = store.state.user.user.userPoint.userId;
      this.defualBackground = store.state.user.user.profile.backgroundUrl;
      this.init();
    } else {
      this.avatar = defualtAvatar;
      this.nickname = "未登录";
    }
    // console.log("metheme",store.state.user.metheme)
    this.metheme = store.state.user.metheme
  },
  mounted(){
  },
  methods: {
    init() {
      this.GetMenuList()
    },
    SetMenuClick(id, ids, name) {
      this.menuList.forEach((item, index) => {
        if (id == index) {
          item.subMenu.forEach((items, indexs) => {
            if (ids == indexs) {
              items.statu = true;
            } else {
              items.statu = false;
            }
          });
        } else {
          item.subMenu.forEach((items) => {
            items.statu = false;
          });
        }
      });
      setTimeout(() => {
        this.$router.push({
          name: name,
          query: {
            uid: 20190803,
          },
        });
      }, 200);
    },
    UserLogin() {
      this.drawer = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //用户登录。同时存入store
    Login() {
      if (this.form.account == "") {
        this.$message("uid不能为空");
      } else {
        this.$store
          .dispatch("login", {
            uid: this.form.account,
          })
          .then((response) => {
            console.log("登录成功", response);
            this.hasLoginStatus = true;
            this.avatar = store.state.user.user.profile.avatarUrl;
            this.nickname = store.state.user.user.profile.nickname;
            this.uid = store.state.user.user.userPoint.userId;
            this.defualBackground = store.state.user.user.profile.backgroundUrl;
          });
      }
    },
    //获取菜单
    GetMenuList() {
      homeApi
        .GetUserMenuList({
          uid: this.uid,
        })
        .then((res) => {
          console.log("菜单", res);
        });
    },
    InputKeyword() {
      songsApi
        .SearchSongsSuggest({
          keywords: this.searchKeyWord,
        })
        .then((res) => {
          // console.log("搜索结果", res);
          this.searchSongsList = res.result.songs
        });
    },
    SelectKeyword() {
      this.$store.dispatch("setLyricStatus", false);
      this.$router.push({ name: 'search',query: {keywords: this.searchKeyWord} });
    },
    //主题切换
    GetMetheme() {
      if (this.metheme == "1") {
        this.showTopBg = topBg1;
        this.showLeftBg = leftBg1;
      } else if (this.metheme == "2") {
        this.showTopBg = topBg2;
        this.showLeftBg = leftBg2;
      } else if (this.metheme == "3") {
        this.showTopBg = topBg3;
        this.showLeftBg = leftBg3;
      }
      this.centerDialogVisible = false
      this.$store.dispatch('setMetheme',this.metheme)
      // console.log("metheme",store.state.user.metheme)
    },
  },
};
</script>
