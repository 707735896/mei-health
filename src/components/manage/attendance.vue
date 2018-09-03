<template>
  <div>
    <Header/>
    <div class="content attendance">
      <div class="busIndex-list">
        <div class="pr-title">考勤报表</div>
        <div class="pr-back" @click="back">
          <img src="../../assets/images/icon_back.png"/>
          <span>返回上级页面</span>
        </div>
        <div class="attend-info">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange" style="width: 120px;margin-right: 12px">
          </el-cascader>
          <el-date-picker
            v-model="dateTime"
            type="datetimerange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期" style="margin-right: 24px;width: 380px">
          </el-date-picker>
          <el-input v-model="userName" placeholder="输入员工姓名" style="width: 120px;margin-right: 10px"></el-input>
          <el-button type="primary" style="margin-right: 110px">搜索</el-button>
          <el-button type="danger" style="width: 140px" @click="exportExcel">
            <img src="../../assets/images/icon_export.png"/>
            导出报表
          </el-button>
        </div>
        <div class="table-list" style="margin-top: 20px">
          <el-table
            :data="tableData"
            style="width: 100%" :header-cell-style="{background:'#f5f8fa'}" id="out-table">
            <el-table-column type="selection" width="40">
            </el-table-column>
            <el-table-column
              prop="userName"
              label="姓名"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="levelName"
              label="职位" width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="department"
              label="部门" width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="cardDays"
              label="打卡天数（天）" width="120"
              align="center">
              <template slot-scope="scope">
                <p class="attend-p" @click="openDkts(scope.row)">{{scope.row.cardDays}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="leaveDays"
              label="请假时长（天）" width="120"
              align="center">
              <template slot-scope="scope">
                <p class="attend-p" @click="openQjsc(scope.row)">{{scope.row.leaveDays}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="breakDownDays"
              label="调休时长（天）" width="120"
              align="center">
              <template slot-scope="scope">
                <p class="attend-p" @click="openTxsc(scope.row)">{{scope.row.breakDownDays}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="overTimeDays"
              label="加班时长（天）" width="120"
              align="center">
              <template slot-scope="scope">
                <p class="attend-p" @click="openJbsc(scope.row)">{{scope.row.overTimeDays}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="ccsc"
              label="出差时长（天）" width="120"
              align="center">
              <template slot-scope="scope">
                <p class="attend-p" @click="openCcsc(scope.row)">{{scope.row.ccsc}}</p>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            background
            layout="prev, pager, next, jumper"
            :total="total" style="margin-top: 20px;text-align: right">
          </el-pagination>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="openQj" width="900px" center>

      <div class="dialog-title">请假记录</div>

      <div class="dialog-info">
        <span style="margin-right: 55px">姓名：2018-08-22</span>
        <span style="margin-right: 120px">职位：品牌管理中心</span>
        <span>部门：全员学习</span>
      </div>

      <div class="dialog-content">
        <div class="table-list" style="margin-top: 20px">
          <el-table
            :data="qjData"
            style="width: 840px" :header-cell-style="{background:'#f5f8fa'}">
            <el-table-column
              prop="qjks"
              label="请假开始时间"
              width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="qjjs"
              label="请假结束时间" width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="deptName"
              label="请假时长" width="280"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>


    <el-dialog :visible.sync="openCc" width="900px" center>

      <div class="dialog-title">出差记录</div>

      <div class="dialog-info">
        <span style="margin-right: 55px">姓名：2018-08-22</span>
        <span style="margin-right: 120px">职位：品牌管理中心</span>
        <span>部门：全员学习</span>
      </div>

      <div class="dialog-content">
        <div class="table-list" style="margin-top: 20px">
          <el-table
            :data="ccData"
            style="width: 840px" :header-cell-style="{background:'#f5f8fa'}">
            <el-table-column
              prop="ccks"
              label="出差开始时间"
              width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="ccjs"
              label="出差结束时间" width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="ccsc"
              label="出差时长" width="280"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>


    <el-dialog :visible.sync="openJb" width="900px" center>

      <div class="dialog-title">加班记录</div>

      <div class="dialog-info">
        <span style="margin-right: 55px">姓名：2018-08-22</span>
        <span style="margin-right: 120px">职位：品牌管理中心</span>
        <span>部门：全员学习</span>
      </div>

      <div class="dialog-content">
        <div class="table-list" style="margin-top: 20px">
          <el-table
            :data="jbData"
            style="width: 840px" :header-cell-style="{background:'#f5f8fa'}">
            <el-table-column
              prop="jbks"
              label="加班开始时间"
              width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="jbjs"
              label="加班结束时间" width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="jbsc"
              label="加班时长" width="280"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>


    <el-dialog :visible.sync="openTx" width="900px" center>

      <div class="dialog-title">调休记录</div>

      <div class="dialog-info">
        <span style="margin-right: 55px">姓名：2018-08-22</span>
        <span style="margin-right: 120px">职位：品牌管理中心</span>
        <span>部门：全员学习</span>
      </div>

      <div class="dialog-content">
        <div class="table-list" style="margin-top: 20px">
          <el-table
            :data="txData"
            style="width: 840px" :header-cell-style="{background:'#f5f8fa'}">
            <el-table-column
              prop="txks"
              label="调休开始时间"
              width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="txjs"
              label="调休结束时间" width="280"
              align="center">
            </el-table-column>
            <el-table-column
              prop="txsc"
              label="调休时长" width="280"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>
    <Footer/>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import Footer from "@/components/common/Footer";
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
  //引入数据
  export default {
    components: {
      Header,Footer
    },
    created(){
      let postData = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
      }
      this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
      this.$http.post(this.$store.state.local + '/cardReport/reportList', JSON.stringify(postData))
        .then((res) => {
          console.log(res)
          this.tableData = res.data.rows;
        })
    },
    data() {
      return {
        pageSize: 10,
        pageNumber: 1,
        options: [{
          value: 'caigoubu',
          label: '采购部'
        }, {
          value: 'xingzhengbu',
          label: '行政部'
        }, {
          value: 'renshibu',
          label: '人事部'
        }, {
          value: 'xinxibu',
          label: '信息部'
        }, {
          value: 'caiwubu',
          label: '财务部'
        }
        ],
        selectedOptions: [],
        dateTime: [],
        userName: '',
        tableData: [],
        qjData: [],
        ccData: [],
        jbData: [],
        txData: [],
        pageNumber: 1,
        pageSize: 10,
        total: 1,
        currentPage: 1,
        openQj: false,
        openCc: false,
        openJb: false,
        openTx: false
      }
    },
    methods: {
      back() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/'})
          return false
        } else {
          this.$router.go(-1)
        }
      },
      exportExcel() {
        var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
        try {
          FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), 'sheetjs.xlsx')
        } catch (e) {
          if (typeof console !== 'undefined') console.log(e, wbout)
        }
        return wbout
      },
      handleChange(value) {
        console.log(value);
      },
      handleSizeChange(val) {
        this.pageSize = val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      },
      openDkts(row) {
        console.log(row.id);
      },
      openQjsc(row) {
        this.openQj = true;
      },
      openTxsc(row) {
        this.openTx = true;
      },
      openJbsc(row) {
        this.openJb = true
      },
      openCcsc(row) {
        this.openCc = true;
      }
    }
  }
</script>

<style>
  .content.attendance {
    box-sizing: border-box;
    /* padding: 0 80px; */
    background: #fff;
    overflow: hidden;
    margin-top: 25px;
    width: 1200px;
  }

  .attendance .busIndex-list {
    /* width: 130%;
    float: left; */

    text-align: center;
    height: 730px;
  }

  .attendance .busIndex-list > a {
    width: 385px;
    float: left;
    margin-top: 100px;
  }

  .attendance .busIndex-list > a > img {
    width: 55px;
    float: left;
  }

  .attendance .busIndex-list > a > span {
    float: left;
    font-size: 18px;
    margin: 15px 0 0 10px;
  }

  .item {
    display: inline-block;
    /* flex: 1; */
    width: 280px;
    height: 340px;
    margin: 200px 50px 0 50px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
  }

  .item > p {
    font-size: 20px
  }

  .item img {
    margin-top: 35%;
  }

  .item:hover {
    -webkit-box-shadow: 0 0 10px #e2e5e5;
    -moz-box-shadow: 0 0 10px #e2e5e5;
    box-shadow: 0 0 10px #e2e5e5;
  }

  .pr-title {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 100px;
  }

  .pr-back {
    display: inline-block;
    position: relative;
    left: 340px;
    font-size: 14px;
    cursor: pointer;
  }

  .table-list {
    width: 1000px;
    margin: 0 auto;
  }

  .table-list .el-button + .el-button, .table-list .el-button--primary {
    border-radius: 20px;
  }

  .table-list .btn-pos {
    /*position: relative;*/
    /*top: 375px;*/
    margin-top: 100px;
  }

  .attendance .el-input__inner {
    border-radius: 20px;
  }

  .dialog-title {
    text-align: center;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .dialog-info {
    text-align: center;
    font-size: 14px;
    color: #9c9c9c;
    width: 700px;
    margin: 0 auto 50px auto;
    padding: 5px 0;
  }

  .dialog-content {
    text-align: center;
    margin-bottom: 100px;
  }

  .attend-p {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 20px;
  }

  .attend-p:hover {
    background-color: #669df9;
    color: #fff;
  }
</style>
