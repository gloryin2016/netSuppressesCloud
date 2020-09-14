<template>
  <div class="page-header">
    <div class="userInfo" @click="UserLogin">
      <img class="avatar" :src="defualtAvatar" alt="" />
      <div class="nickname">网抑云用户小A</div>
    </div>
    <el-input
      style="width: 200px;"
      placeholder="搜索"
      prefix-icon="el-icon-search"
      v-model="input2"
    >
    </el-input>
  </div>
</template>

<script>
import defualtAvatar from "@assets/avatar_02.jpg";
export default {
  data() {
    return {
      input2: "",
      defualtAvatar,
      drawer: false,
      direction: "rtl",
    };
  },
  created() {},
  methods: {
    UserLogin() {
      this.drawer = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        // eslint-disable-next-line no-unused-vars
        .then((_) => {
          done();
        })
        // eslint-disable-next-line no-unused-vars
        .catch((_) => {});
    },
  },
};
</script>

<style lang="less" scoped>
.page-header {
  width: 100%;
  height: 72px;
  padding: 0 24px;
  box-sizing: border-box;
  background: #ebeef5;
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
}
</style>
