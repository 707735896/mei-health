<template>
  <div>
    <Header></Header>
    <div class="content Shenpi">
      <div class="busIndex-list">
        <div>
          <span class="shenpi_title">
            <img src="../../assets/images/btn_shenpi.png" width="30" height="30"/>
            <span class="shenpi_font">审批中心</span>
          </span>
          <div class="dwsp">
            <el-tabs v-model="activeName">
              <el-tab-pane label="待我审批" name="first">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column align="center" prop="id" label="编号" width="100"></el-table-column>
                  <el-table-column align="center" prop="processTypeName" label="类别" width="130"></el-table-column>
                  <el-table-column align="center" prop="applyPersonName" label="申请人" width="130"></el-table-column>
                  <el-table-column align="center" prop="applyTime" label="申请时间" width="180"></el-table-column>
                  <el-table-column align="center" prop="status" label="状态" width="130"></el-table-column>
                  <el-table-column label="操作" align="center" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" type="primary" class="circle" @click="shenpi(scope.row)">审批</el-button>
                      <el-button size="mini" class="circle" plain @click="see(scope.row)">查看</el-button>
                      <el-button size="mini" type="danger" plain class="circle">驳回</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="我发起的" name="second">
                <el-table :data="tableData2" style="width: 100%">
                  <el-table-column align="center" prop="id" label="编号" width="100"></el-table-column>
                  <el-table-column align="center" prop="processTypeName" label="类别" width="130"></el-table-column>
                  <el-table-column align="center" prop="applyPersonName" label="申请人" width="130"></el-table-column>
                  <el-table-column align="center" prop="applyTime" label="申请时间" width="180"></el-table-column>
                  <el-table-column align="center" prop="status" label="状态" width="130"></el-table-column>
                  <el-table-column label="操作" align="center" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" type="primary" class="circle" @click="shenpi(scope.row)">审批</el-button>
                      <el-button size="mini" class="circle" plain @click="see(scope.row)">查看</el-button>
                      <el-button size="mini" type="danger" plain class="circle">驳回</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="全部审批" name="third">
                <el-table :data="tableData3" style="width: 100%">
                  <el-table-column align="center" prop="id" label="编号" width="100"></el-table-column>
                  <el-table-column align="center" prop="processTypeName" label="类别" width="130"></el-table-column>
                  <el-table-column align="center" prop="applyPersonName" label="申请人" width="130"></el-table-column>
                  <el-table-column align="center" prop="applyTime" label="申请时间" width="180"></el-table-column>
                  <el-table-column align="center" prop="status" label="状态" width="130"></el-table-column>
                  <el-table-column label="操作" align="center" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" type="primary" class="circle" @click="shenpi(scope.row)">审批</el-button>
                      <el-button size="mini" class="circle" plain @click="see(scope.row)">查看</el-button>
                      <el-button size="mini" type="danger" plain class="circle">驳回</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <el-dialog :visible.sync="seeQj" width="1050px" center class="Shenpi-block">

      <div class="allapp-title">请假申请单</div>
      <div class="inner-block">
        <div style="margin: 50px 0px 0px 50px;">
          <div class="inner-content">申请人：{{applyPersonName}}</div>
          <div class="inner-content">请假类型：{{dictTypeName}}</div>
          <div class="inner-content">开始时间：{{startTime}}</div>
          <div class="inner-content">结束时间：{{endTime}}</div>
          <div class="inner-content">调休时长：{{totalDay}}</div>
          <div class="inner-content">请假原因：{{remark}}</div>
        </div>
      </div>
      <div class="inner-block-2">
        <div class="steps-block">
          <el-steps direction="vertical" :active="1">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="seeQj = false" class="close" plain>关 闭</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="qjShenpi" width="1050px" center class="Shenpi-block">

      <div class="allapp-title">请假申请单审批</div>
      <div class="inner-block">
        <div style="margin: 50px 0px 0px 50px;">
          <div class="inner-content">申请人：{{applyPersonName}}</div>
          <div class="inner-content">请假类型：{{dictTypeName}}</div>
          <div class="inner-content">开始时间：{{startTime}}</div>
          <div class="inner-content">结束时间：{{endTime}}</div>
          <div class="inner-content">调休时长：{{totalDay}}</div>
          <div class="inner-content">请假原因：{{remark}}</div>
        </div>
      </div>
      <div class="inner-block-2">
        <div class="steps-block">
          <el-steps direction="vertical" :active="1">
            <el-step title="丁辉祥" description="审批意见：" icon="el-icon-time"></el-step>
            <el-step title="胡梦溪" icon="el-icon-time"></el-step>
            <el-step title="李旭伟" description="审批意见：" icon="el-icon-time"></el-step>
          </el-steps>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="close">同 意</el-button>
        <el-button @click="qjShenpi = false" class="close" plain>取 消</el-button>
        <el-button type="danger" class="close" plain>驳 回</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="bxShenpi" width="1050px" center class="Shenpi-block">

      <div class="allapp-title">报销申请单审批</div>
      <div class="inner-block">
        <div style="margin: 50px 0px 0px 34px;">
          <div style="text-align: center;margin: 10px 0;font-size: 16px">报销单明细</div>
          <el-table
            :data="tableBx"
            style="width: 390px">
            <el-table-column
              prop="date"
              label="发生日期"
              width="100">
            </el-table-column>
            <el-table-column
              prop="name"
              label="报销说明"
              width="100">
            </el-table-column>
            <el-table-column
              prop="money"
              label="金额"
              width="50">
            </el-table-column>
            <el-table-column
              prop="zhangshu"
              label="单据张数"
              width="50">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注"
              width="90">
            </el-table-column>
          </el-table>
          <span style="float: right;margin-right: 50px;">合计金额：<span
            style="font-size: 22px;color: #ee456d">55</span></span>
        </div>
      </div>
      <div class="inner-block-2">
        <div class="steps-block">
          <el-steps direction="vertical" :active="1">
            <el-step title="丁慧祥" description="审批意见"></el-step>
            <div>sdfsafd</div>
            <el-step title="步骤 2" description="审批意见"></el-step>
            <div>sdfsafd</div>
            <el-step title="步骤 3" description="审批意见"></el-step>
          </el-steps>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="close">同 意</el-button>
        <el-button @click="bxShenpi = false" class="close" plain>取 消</el-button>
        <el-button type="danger" class="close" plain>驳 回</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="fyShenpi" width="1050px" center class="Shenpi-block">

      <div class="allapp-title">费用申请单审批</div>
      <div class="inner-block" style="height: 405px">
        <div>
          <div style="text-align: center;margin: 10px 0;font-size: 16px">费用申请单明细</div>
          <el-table
            :data="tableBx"
            style="width: 390px;margin-left: 35px">
            <el-table-column
              prop="name"
              label="报销说明"
              width="100">
            </el-table-column>
            <el-table-column
              prop="money"
              label="金额"
              width="100">
            </el-table-column>
            <el-table-column
              prop="zhangshu"
              label="交款类型"
              width="100">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注"
              width="90">
            </el-table-column>
          </el-table>
          <span style="float: right;margin-right: 50px;">合计金额：<span
            style="font-size: 22px;color: #ee456d">55</span></span>

          <div class="zz-info">
            <div style="width: 100%;border: 1px solid;margin: 10px 0"></div>
            <div class="sk-info">收款账户明细</div>
              <div style="margin-right: 100px;margin-left:50px;display: inline-block">姓名：xxxxx</div>
              <div style="display: inline-block">账户：545445456456456456</div>
            <div>
              <div style="margin-right: 100px;margin-left:50px;display: inline-block">备注：xxxxx</div>
              <div style="display: inline-block">开户行：545445456456456456</div>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-block-2" style="height: 405px;bottom: 268px;">
        <div class="steps-block">
          <el-steps direction="vertical" :active="1">
            <el-step title="步骤 1"></el-step>
            <div>sdfsafd</div>
            <el-step title="步骤 2"></el-step>
            <div>sdfsafd</div>
            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="close">同 意</el-button>
        <el-button @click="fyShenpi = false" class="close" plain>取 消</el-button>
        <el-button type="danger" class="close" plain>驳 回</el-button>
      </span>
    </el-dialog>

  </div>
</template>


<script>
  import Header from "@/components/common/Header";
  import Footer from "@/components/common/Footer";

  export default {
    components: {
      Header, Footer
    },
    data() {
      return {
        applyPersonName: '',
        dictTypeName: '',
        startTime: '',
        endTime: '',
        totalDay: '',
        remark: '',
        seeQj: false,
        qjShenpi: false,
        bxShenpi: false,
        fyShenpi: false,
        activeName: 'first',
        pageSize: '100',
        pageNumber: '1',
        applyPerson: '',
        type: '',
        tableData: [],
        tableData2: [],
        tableData3: [],
        tableBx: [{
          date: '2016-05-02',
          name: '王小虎',
          money: '1',
          zhangshu: '1',
          remark: '2'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          money: '1',
          zhangshu: '1',
          remark: '2'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          money: '1',
          zhangshu: '1',
          remark: '2'
        }]
      }
    },
    created() {
      let postData = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        applyPerson: this.$store.state.userInfo.id,
        type: 0
      }
      this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
      this.$http.post('http://192.168.0.22:8004/applyProcess/selectApplyProcess', JSON.stringify(postData))
        .then((res) => {
          console.log(res)
          this.tableData = res.data.obj.rows;
        })

      let postData2 = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        applyPerson: this.$store.state.userInfo.id,
        type: 1
      }
      this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
      this.$http.post('http://192.168.0.22:8004/applyProcess/selectApplyProcess', JSON.stringify(postData2))
        .then((res) => {
          console.log(res.data.obj.rows)
          this.tableData2 = res.data.obj.rows;
        })

      let postData3 = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        applyPerson: this.$store.state.userInfo.id,
        type: 2
      }
      this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
      this.$http.post('http://192.168.0.22:8004/applyProcess/selectApplyProcess', JSON.stringify(postData3))
        .then((res) => {
          console.log(res.data.obj.rows)
          this.tableData3 = res.data.obj.rows;
        })
    },
    methods: {
      see(row) {
        //请假
        if (row.processType == '1') {
          this.seeQj = true;
          let postData = {
            id: row.id
          }
          this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
          this.$http.post('http://192.168.0.22:8004/applyProcess/viewApplyProcess', JSON.stringify(postData))
            .then((res) => {
              console.log(res.data.obj)
              this.applyPersonName = res.data.obj.applyPerson;
              this.dictTypeName = res.data.obj.dictTypeName;
              this.startTime = res.data.obj.startTime;
              this.endTime = res.data.obj.endTime;
              this.totalDay = res.data.obj.totalDay;
              this.remark = res.data.obj.remark;
            })
        }
        //报销
        if (row.processType == '6') {

        }
        //费用
        if (row.processType == '7') {

        }
      },
      shenpi(row) {
        //请假
        if (row.processType == '1') {
          this.qjShenpi = true;

        }
        //报销
        if (row.processType == '6') {
          this.bxShenpi = true;
        }
        //费用
        if (row.processType == '7') {
          this.fyShenpi = true;
        }
      }
    }
  }
</script>

<style>
  .shenpi_title {
    float: left;
    margin-left: 110px;
    margin-top: 40px;
    color: #656565;
    font-size: 21px;
    font-weight: bold;
  }

  .shenpi_font {

  }

  .content.Shenpi {
    box-sizing: border-box;
    background: #fff;
    overflow: hidden;
    margin-top: 25px;
    width: 1200px;
  }

  .Shenpi .busIndex-list {
    text-align: center;
    height: 730px;
  }

  .dwsp .el-tabs__nav {
    float: right;
  }

  .dwsp .el-tabs__header, .dwsp .el-tabs__content {
    top: 50px;
    right: 120px;
  }

  .dwsp .el-tabs__item {
    font-size: 16px;
    font-weight: bold;
  }

  .circle {
    border-radius: 20px;
  }

  .allapp-title {
    text-align: center;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .inner-block {
    width: 455px;
    height: 355px;
    display: inline-block;
    background: #f5f8fa;
    margin: 0px 30px;
  }

  .inner-block-2 {
    width: 455px;
    height: 355px;
    display: inline-block;
    background: #f5f8fa;
    position: relative;
    bottom: 204px;
  }

  .inner-content {
    font-size: 14px;
    margin: 20px;
  }

  .steps-block {
    height: 300px;
    margin: 50px 0 0 50px;
  }

  .Shenpi-block .el-dialog__body {
    height: 550px;
  }

  .el-button--primary, .el-button, .el-button--danger {
    border-radius: 20px;
  }

  .zz-info {
    position: relative;
    top: 30px;
  }

  .sk-info {
    font-size: 16px;
    text-align: center;
    margin-left: 140px;
    margin-bottom: 15px;
  }
</style>
