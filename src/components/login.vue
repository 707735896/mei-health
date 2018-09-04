//登录
<template>
  <div>
    <div class="header">
      <div class="header-cont">
        <span class="logo"><img src="../assets/images/top_logo.png"></span>
      </div>
    </div>
    <div class="login-content">
      <p class="login-title">
        世界会为有目标的人让路
      </p>
      <p class="login-ms">
        任何的限制都是从自己的内心开始的
      </p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="userNo">
          <img src="../assets/images/login_username.png" class="user-img"/>
          <el-input type="text" placeholder="请输入账号" v-model="ruleForm.userNo" class="imgblock"/>
        </el-form-item>
        <el-form-item prop="password" style="margin-bottom: 25px">
          <img src="../assets/images/login_password.png" class="user-img"/>
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"/>
        </el-form-item>
        <el-button type="primary" class="login-form" @click="login('ruleForm')"
                   v-loading.fullscreen.lock="fullscreenLoading">登 录
        </el-button>
      </el-form>
      <div class="ewm">
        <div class="android">
          <img src="../assets/images/androidimg.png" style="margin-right: 70px"/>
          <img src="../assets/images/androidicon.png"/><span>Android下载</span>
        </div>
        <div class="ios">
          <img src="../assets/images/iosimg.png"/>
          <img src="../assets/images/iosicon.png"/><span>Iphone下载</span>
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "@/components/common/Footer";

  export default {
    name: "Login",
    components: {
      Footer
    },
    data() {
      return {
        isLoging: false,
        fullscreenLoading: false,
        ruleForm: {
          userNo: "",
          password: "",
        },
        rules: {
          userNo: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      //登录逻辑
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //一般要跟后端了解密码的加密规则
            //这里例子用的哈希算法来自./js/sha1.min.js
            // let password_sha = this.password;

            //需要想后端发送的登录参数
            let postData = {
              userNo: this.ruleForm.userNo,
              password: this.ruleForm.password
            };
            //设置在登录状态
            this.isLoging = true;

            //请求后端:
            this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
            this.$http.post(this.$store.state.local + '/console/login', JSON.stringify(postData))
              .then((response) => {
                console.log(response)
                if (response.data.code == 0) {
                  let expireDays = 1000 * 60 * 60 * 24 * 15;
                  this.setCookie('session', response.data.session, expireDays);
                  let userInfo = {
                    id: response.data.obj.id,
                    userName: response.data.obj.userName,
                    password: response.data.obj.password,
                    headUrl:response.data.obj.headUrl
                  }
                  this.$store.commit("updateUserInfo", userInfo);
                  //登录成功后
                  this.isLoging = false;
                  this.fullscreenLoading = true;
                  //登录成功后
                  setTimeout(() => {
                    this.fullscreenLoading = false;
                    this.$router.push("/home");
                  }, 500);
                }
              })
              .catch((error) => {
                console.log(error)
                this.$message({
                  message: '账号或密码错误',
                  type: 'error'
                });
              })
          }
        });
      },
    }
  };
</script>

<style scoped>
  .login-content {
    background: url(../assets/images/loginbg.jpg);
    min-width: 1200px;
    width: 100%;
    height: 800px;
    overflow: hidden;
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

  .login-title {
    font-size: 56px;
    text-align: center;
    margin-top: 160px;
    margin-bottom: 13px;
    color: #fff;
  }

  .login-ms {
    font-size: 22px;
    text-align: center;
    color: #fff;
    margin-bottom: 40px;
  }

  .login-form {
    display: block;
    margin: 0 auto;
    width: 360px;
    font-size: 20px;
    margin-bottom: 45px;
  }

  .ewm {
    margin: 0 auto;
    width: 325px;
  }

  .android {
    display: inline-block;
    width: 120px;
    height: 200px;
    margin-right: 70px;
    color: rgba(255, 255, 255, 0.5)
  }

  .ios {
    display: inline-block;
    width: 120px;
    height: 200px;
    color: rgba(255, 255, 255, 0.5)
  }

  .user-img {
    top: 30px;
    margin: 0 auto;
    display: block;
    position: relative;
    right: 140px;
  }

</style>

<style>
  .login-content .el-input {
    width: 360px;
    display: block;
    margin: 0 auto;
  }

  .login-content .el-input__inner {
    padding-left: 60px;
    border-radius: 20px !important;
    background-color: transparent;
    color: #fff;
  }

  .login-content .el-form-item__error {
    left: 25px;
  }

  .login-content .el-form-item {
    margin-bottom: 5px;
  }

  .login-content .el-form-item__content {
    width: 360px;
    margin: 0 auto;
  }
</style>
