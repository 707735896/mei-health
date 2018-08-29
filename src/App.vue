<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        // isLogin: false,
        // userInfo: {
        //   //保存用户信息
        //   userNo: null,
        //   portrait: null
        // }
      };
    },
    mounted() {
      //组件开始挂载时获取用户信息
      // this.getUserInfo();
    },

    methods: {
      //请求用户的一些信息
      // getUserInfo() {
      //   //发送http请求获取，这里写死作演示
      //   this.userInfo = {
      //     userNo: "员工1",
      //     portrait:
      //       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534403753315&di=daba81f90b14dcdd76bcc989e93479bc&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130717%2F12788596_144714507000_2.jpg"
      //   };
      //
      //   //实例开发中这里会向服务端请求数据
      //   //如下(用了vue-resource):
      //   /*ts.$http.get(url, {
      //     //参数
      //     "params":{}
      //   }).then((response) => {
      //     //Success
      //   }, (response) => {
      //     //Error
      //   });*/
      //
      //   //提交mutation到Store
      //   this.$store.commit("updateUserInfo", this.userInfo);
      // }
    }
  };
</script>

<style>
  input::-ms-clear {
    display: none;
  }

  body {
    background: #f5f7fa;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "微软雅黑";
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    vertical-align: middle;
  }

  img {
    border: none;
  }

  body,
  button,
  input,
  select,
  textarea {
    font: 14px/1.5 "Microsoft YaHei", "Helvetica Neue", Helvetica Neue, Helvetica,
    Hiragino Sans GB, tahoma, arial, sans-serif;
  }

  input,
  select,
  textarea {
    font-size: 100%;
  }

  table {
    border-collpase: collapse;
  }

  a {
    color: #333;
    cursor: pointer;
    text-decoration: none;
    outline: none;
  }

  a:visited {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: " ";
  }

  .clearfix:after {
    clear: both;
  }

  button {
    outline: none;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .red {
    color: #ff0000;
    margin: 0 3px;
  }

  .blue {
    color: #007eff;
  }

  .blue:hover,
  .blue:visited {
    color: #007eff;
  }

  .hide {
    display: none;
  }

  img {
    boder: none;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
  }

  .el-button--primary, .el-button, .el-button--danger {
    border-radius: 20px;
  }
</style>
