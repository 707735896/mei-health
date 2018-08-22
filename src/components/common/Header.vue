<template>
    <div class="header">
        <div class="header-cont">
            <span class="logo">
                <img src="../../assets/images/top_logo.png"> </span>
            <div class="right-nav">
                <ul ms-controller="user">
                    <li class="nav01">
                        <router-link to='/home'>首页</router-link>
                    </li>
                    <li class="nav02">
                        <router-link to='/manage'>人事行政</router-link>
                    </li>
                    <li>
                        <router-link to='/purchase'>财务采购</router-link>
                    </li>
                    <li>
                        <router-link to='/market'>市场管理</router-link>
                    </li>
                    <li>
                        <router-link to='/business'>商务投资</router-link>
                    </li>
                    <li>
                        <router-link to='/educational'>教务中心</router-link>
                    </li>
                    <li>
                        <router-link to='/task'>任务管理</router-link>
                    </li>
                    <li>
                        <router-link to='/documentation'>文档资料</router-link>
                    </li>
                </ul>
            </div>
            <div class="header-info">
                <span class="header-img">
                    <img :src="$store.state.userInfo.portrait">
                </span>

                <!--个人中心弹框-->
                <el-dropdown>
                    <span class="username el-dropdown-link"
                        v-text="$store.state.userInfo.nick">
                        <i><img src="../../assets/images/arrow-down.png"> </i>
                    </span>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item  @click.native="setpsd">设置</el-dropdown-item>
                        <el-dropdown-item divided
                            @click.native="logout"
                            v-loading.fullscreen.lock="fullscreenLoading">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      fullscreenLoading: false
    };
  },
  methods: {
    //注销
    logout() {
      //删除cookie并跳到登录页

      this.delCookie("session");
      this.fullscreenLoading = true;
      //演示
      setTimeout(() => {
        this.fullscreenLoading = false;
        this.$router.push("/login/");
      }, 1500);
    },
    setpsd(){
      this.$router.push("/setpsd");
    }
  }
};
</script>

<style scoped>
.router-link-active {
  background: #4389f5 !important;
  color: #fff !important;
  font-weight: bold;
  border-radius: 20px;
}

.header {
  min-width: 1200px;
  width: 100%;
  height: 70px;
  background: #fff;
}

.header-cont {
  width: 1200px;
  margin: 0 auto;
}

.header-cont > .logo {
  float: left;
  width: 250px;
  margin: 15px 0;
}

.header-cont > .logo img {
  width: auto;
}

.header-cont .right-nav {
  width: 705px;
  float: left;
  margin-left: 60px;
}

.header-cont .right-nav li {
  height: 32px;
  width: 88px;
  float: left;
  margin: 19px 0;
  line-height: 32px;
}

.header-cont .right-nav li > a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 15px;
  text-align: center;
}

.header-cont .right-nav li > a:hover {
  color: #4389f5 !important;
  font-weight: bold;
  background: #fff;
  transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
}

.header-cont .right-nav .nav-active {
  background: #4389f5 !important;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
}

.header-info {
  float: right;
  cursor: pointer;
  position: relative;
  height: 40px;
  margin: 15px 0;
  box-sizing: border-box;
  padding-top: 6px;
}

.header-info > .header-img {
  width: 32px;
  height: 32px;
  overflow: hidden;
  float: left;
  border-radius: 50%;
}

.header-info > .header-img > img {
  width: 100%;
}

.username {
  float: left;
  line-height: 32px;
  margin: 0 10px;
  color: #666;
}
.username > i {
  margin-left: 5px;
}
.header-info > i {
  margin: 4px 0;
  float: left;
}
</style>
