<template>
  <div class="workbench">

    <div class="work-desk">
      <h4 class="work-desk-title">人事申请</h4>
      <div class="work-desk-cont">
        <div class="work-desk-box">
          <a @click="openLeave = true">
            <img src="../../assets/images/group/btn_qingjia.png">
            <span>请假申请</span>
          </a>
          <a @click="openOvertime = true">
            <img src="../../assets/images/group/btn_jiaban.png">
            <span>加班申请</span>
          </a>
          <a @click="openGo = true">
            <img src="../../assets/images/group/btn_chuchai.png">
            <span>出差申请</span>
          </a>
          <a>
            <img src="../../assets/images/group/btn_zhuanzheng.png">
            <span>转正申请</span>
          </a>
          <a>
            <img src="../../assets/images/group/btn_lizhi.png">
            <span>离职申请</span>
          </a>
          <a>
            <img src="../../assets/images/group/btn_kaoqin.png">
            <span>考勤申请</span>
          </a>
        </div>
      </div>
      <h4 class="work-desk-title">行政申请</h4>
      <div class="work-desk-cont">
        <div class="work-desk-box">
          <a>
            <img src="../../assets/images/group/btn_bangong.png">
            <span>办公用品</span>
          </a>
          <a>
            <img src="../../assets/images/group/btn_cheliang.png">
            <span>车辆管理</span>
          </a>
        </div>
      </div>
    </div>


    <!--加班申请-->
    <div class="addOverTime">
      <el-dialog :visible.sync="openOvertime" width="500px">
        <div class="workbench-title">加班申请</div>
        <el-form :model="overTimeForm" :rules="rules" ref="overTimeForm" label-width="100px" class="demo-overTimeForm">
          <el-form-item label="加班类型：" prop="type">
            <el-select v-model="overTimeForm.type" placeholder="请选择加班类型">
              <el-option label="平常加班" value="平常加班"></el-option>
              <el-option label="双休日加班" value="双休日加班"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="核算方式：" prop="mode">
            <el-select v-model="overTimeForm.mode" placeholder="请选择核算方式">
              <el-option label="调休" value="调休"></el-option>
              <el-option label="工资" value="工资"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="加班开始时间：" required>
            <el-date-picker v-model="overTimeForm.date1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="加班结束时间：" required>
            <el-date-picker v-model="overTimeForm.date2" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="加班时长：" prop="timeLength">
            <el-input v-model="overTimeForm.timeLength" style="width: 100px"></el-input>
          </el-form-item>
          <el-form-item label="加班原因：" prop="desc" style="width: 100px">
            <el-input type="textarea" v-model="overTimeForm.desc"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="submitOverTimeForm('overTimeForm')">提 交</el-button>
            <el-button @click="resetOverTimeForm('overTimeForm')">取 消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>


    <!--请假申请-->
    <div class="addLeave">
      <el-dialog :visible.sync="openLeave" width="500px">
        <div class="workbench-title">请假申请</div>
        <el-form :model="leaveForm" :rules="leaveRules" ref="leaveForm" label-width="100px" class="demo-leaveForm">
          <el-form-item label="请假类型：" prop="type">
            <el-select v-model="leaveForm.type" placeholder="请选择加班类型" @change="opentx">
              <el-option label="事假" value="sj"></el-option>
              <el-option label="调休假" value="txj"></el-option>
              <el-option label="病假" value="bj"></el-option>
              <el-option label="婚假" value="hj"></el-option>
              <el-option label="丧假" value="sj"></el-option>
              <el-option label="产假" value="cj"></el-option>
              <el-option label="年休假" value="nxj"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开始时间：" required>
            <el-date-picker v-model="leaveForm.date1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间：" required>
            <el-date-picker v-model="leaveForm.date2" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="请假时长：" prop="leaveTime">
            <el-input v-model="leaveForm.leaveTime" style="width: 100px"></el-input>
          </el-form-item>
          <el-form-item label="可用加班时长：" prop="timeLength1" v-show="leaveForm.isShow">
            <el-input v-model="leaveForm.timeLength1" style="width: 100px"></el-input>
          </el-form-item>
          <el-form-item label="调休时长：" prop="timeLength2" v-show="leaveForm.isShow">
            <el-input v-model="leaveForm.timeLength2" style="width: 100px"></el-input>
          </el-form-item>
          <el-form-item label="请假原因：" prop="desc" style="width: 100px">
            <el-input type="textarea" v-model="leaveForm.desc"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="submitLeaveForm('leaveForm')">提 交</el-button>
            <el-button @click="resetLeaveForm('leaveForm')">取 消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>


    <!--外出申请-->
    <div class="addGo">
      <el-dialog :visible.sync="openGo" width="500px">
        <div class="workbench-title">出差申请</div>
        <el-form :model="goForm" :rules="goRules" ref="goForm" label-width="100px" class="demo-overTimeForm">
          <el-form-item label="外出类型：" prop="type">
            <el-select v-model="goForm.type" placeholder="请选择加班类型">
              <el-option label="双休日加班" value="sxrjb"></el-option>
              <el-option label="双休日加班" value="sxr"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="外出开始时间：" required>
            <el-date-picker v-model="goForm.date1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="外出结束时间：" required>
            <el-date-picker v-model="goForm.date2" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="外出时长：" prop="timeLength" @click="calculation">
            <el-input v-model="goForm.timeLength" style="width: 100px"></el-input>
          </el-form-item>
          <el-form-item label="外出原因：" prop="desc" style="width: 100px">
            <el-input type="textarea" v-model="goForm.desc"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="submitGoForm('goForm')">提 交</el-button>
            <el-button @click="resetGoForm('goForm')">取 消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        openLeave: false,
        openGo: false,
        openOvertime: false,
        overTimeForm: {
          type: '',
          mode: '',
          date1: '',
          date2: '',
          timeLength: '',
          desc: ''
        },
        leaveForm: {
          isShow: false,
          type: '',
          date1: '',
          date2: '',
          leaveTime: '',
          timeLength1: '',
          timeLength2: '',
          desc: ''
        },
        goForm: {
          type: '',
          date1: '',
          date2: '',
          timeLength: '',
          desc: ''
        },
        rules: {
          type: [
            {required: true, message: '请输入加班类型', trigger: 'change'}
          ],
          mode: [
            {required: true, message: '请输入核算方式', trigger: 'change'}
          ],
          date1: [
            {type: 'datetime', required: true, message: '请选择时间', trigger: 'change'}
          ],
          date2: [
            {type: 'datetime', required: true, message: '请选择时间', trigger: 'change'}
          ],
          timeLength: [
            {required: true, message: '请输入加班时长', trigger: 'blur'}
          ],
          // desc: [
          //   {required: true, message: '请填写加班原因', trigger: 'blur'}
          // ]
        },
        leaveRules: {
          type: [
            {required: true, message: '请输入请假类型', trigger: 'change'}
          ],
          date1: [
            {type: 'datetime', required: true, message: '请选择时间', trigger: 'change'}
          ],
          date2: [
            {type: 'datetime', required: true, message: '请选择时间', trigger: 'change'}
          ],
          // timeLength1: [
          //   {required: true, message: '请输入请假时长', trigger: 'blur'}
          // ],
          // timeLength2: [
          //   {required: true, message: '请输入可用加班时长', trigger: 'blur'}
          // ],
          // desc: [
          //   {required: true, message: '请填写加班原因', trigger: 'blur'}
          // ]
        },
        goRules: {
          type: [
            {required: true, message: '请输入外出类型', trigger: 'change'}
          ],
          date1: [
            {type: 'datetime', required: true, message: '请选择时间', trigger: 'change'}
          ],
          date2: [
            {type: 'datetime', required: true, message: '请选择时间', trigger: 'change'}
          ],
          timeLength: [
            {required: true, message: '请输入外出时长', trigger: 'blur'}
          ],
          // desc: [
          //   {required: true, message: '请填写加班原因', trigger: 'blur'}
          // ]
        }
      }
    },
    methods: {
      opentx() {
        if (this.leaveForm.type === 'txj') {
          this.leaveForm.isShow = true;
        } else {
          this.leaveForm.isShow = false;
        }
      },
      submitOverTimeForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let postData = {
              processType: 2,
              type: this.overTimeForm.type,
              mode: this.overTimeForm.mode,
              startTime: this.overTimeForm.date1,
              endTime: this.overTimeForm.date2,
              totalDay: this.overTimeForm.timeLength,
              remark: this.overTimeForm.desc
            }
            console.log(postData)
            this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
            this.$http.post('http://192.168.0.22:8004/applyProcess/addApplyProcess', JSON.stringify(postData))
              .then((res) => {
                console.log(res)
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                this.openOvertime = false
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetOverTimeForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitLeaveForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.leaveForm.type === 'txj') {
              let postData = {
                processType: 1,
                type: this.leaveForm.type,
                startTime: this.leaveForm.date1,
                endTime: this.leaveForm.date2,
                totalDay: this.leaveForm.timeLength1,
                supplementTotalDay: this.leaveForm.timeLength2,
                remark: this.leaveForm.desc
              }
              console.log(postData)
              this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
              this.$http.post('http://192.168.0.22:8004/applyProcess/addApplyProcess', JSON.stringify(postData))
                .then((res) => {
                  console.log(res)
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                  this.openLeave = false
                })
                .catch((error) => {
                  console.log(error)
                })
            } else {
              let postData = {
                processType: 1,
                type: this.leaveForm.type,
                startTime: this.leaveForm.date1,
                endTime: this.leaveForm.date2,
                supplementTotalDay: this.leaveForm.leaveTime,
                remark: this.leaveForm.desc
              }
              this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
              this.$http.post('http://192.168.0.22:8004/applyProcess/addApplyProcess', JSON.stringify(postData))
                .then((res) => {
                  console.log(res)
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                  this.openLeave = false
                })
                .catch((error) => {
                  console.log(error)
                })
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetLeaveForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitGoForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let postData = {
              processType: 3,
              type: this.goForm.type,
              startTime: this.goForm.date1,
              endTime: this.goForm.date2,
              supplementTotalDay: this.goForm.timeLength,
              remark: this.goForm.desc
            }
            console.log(postData)
            this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
            this.$http.post('http://192.168.0.22:8004/applyProcess/addApplyProcess', JSON.stringify(postData))
              .then((res) => {
                console.log(res)
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                this.openGo = false
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetGoForm(formName) {
        this.$refs[formName].resetFields();
      },
      calculation(){
        var date3 = this.date2.getTime() - this.date1.getTime();
        var days = Math.floor(date3/(24*3600*1000));
        console.log(days)
        this.goForm.timeLength = days
      }

    }
  }
</script>

<style>
  .work-desk {
    width: 100%;
    float: left;
    box-sizing: border-box;
    padding: 0 80px;
    background: #fff;
    min-height: 680px;
  }

  .work-desk .work-desk-title {
    width: 100%;
    float: left;
    padding: 35px 10px 23px;
    color: #666;
    font-size: 18px;
    border-bottom: 1px solid #dee6ea;
  }

  .work-desk-cont {
    width: 100%;
    float: left;
    overflow: hidden;
  }

  .work-desk-cont .work-desk-box {
    width: 140%;
    float: left;
    padding-top: 40px;
  }

  .work-desk-cont .work-desk-box > a {
    display: block;
    float: left;
    width: 375px;
    margin-left: 10px;
    margin-bottom: 55px;
  }

  .work-desk-cont .work-desk-box > a > img {
    float: left;
    width: 50px;
    margin-right: 15px;
  }

  .work-desk-cont .work-desk-box > a > span {
    float: left;
    margin-top: 20px;
    font-size: 18px;
    line-height: 1;
    margin-top: 15px;
  }

  .workbench .el-dialog {
    margin-right: 0;
  }

  .workbench-title {
    height: 45px;
    line-height: 45px;
    background: #eeeeee;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 470px;
    margin: 20px 0;
  }

  .workbench .el-select .el-input__inner {
    width: 290px;
  }

  .workbench .el-input--prefix .el-input__inner {
    width: 290px;
  }

  .workbench .el-textarea__inner {
    width: 290px;
    min-height: 120px !important;
  }

  .workbench .el-form-item__label {
    width: 125px !important;
  }

  .workbench .el-input__inner {
    width: 290px;
  }

  .workbench .el-button + .el-button, .workbench .el-button--primary {
    border-radius: 20px;
  }

  .workbench .el-form-item__error {
    left: 25px;
  }
</style>
