<template>
    <div>
      <Header/>
      <div class="content setpsd">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm set-form">
        <div class="update-psd">修改密码</div>
        <el-form-item label="旧密码：" prop="oldPass">
          <el-input type="password" v-model="ruleForm2.oldPass" auto-complete="off" class="set-input" placeholder="请输入旧密码"></el-input>
        </el-form-item>
          <el-form-item label="新密码：" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" class="set-input" placeholder="请输入新密码"></el-input>
          </el-form-item>
        <el-form-item label="请确认：" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" class="set-input" placeholder="请再次输入新密码"></el-input>
        </el-form-item>
        <el-form-item class="set-submit">
          <el-button type="primary" @click="submitForm('ruleForm2')">确认修改</el-button>
          <el-button @click="resetForm('ruleForm2')" plain>取消</el-button>
        </el-form-item>
      </el-form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  components:{
    Header,Footer
  },
  data() {
    var checkoldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        Oldpass: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        oldPass: [{ validator: checkoldPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.setpsd {
  box-sizing: border-box;
  padding: 0 80px;
  background: #fff;
  overflow: hidden;
  margin-top: 25px;
  padding-bottom: 300px;
  width: 1200px;
}

.set-form {
  margin-top: 100px;
}
.set-input {
  width: 360px;
}
.el-form-item {
  margin-bottom: 25px;
}
.el-input__inner {
  height: 45px;
  line-height: 45px;
}
.set-submit {
  margin-top: 45px;
  margin-left: 250px
}
.update-psd {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px
}
.el-form-item__label,.el-form-item__error{
  margin-left: 250px
}
.set-submit .el-button--primary {
  font-size: 16px;
  width: 120px;
  height: 40px;
  border-radius: 20px
}
.set-submit .el-button+.el-button {
  border-radius: 20px;
  width: 100px
}
</style>
