<template>
  <div>
    <Header/>
    <div class="content Business">
      <div class="busIndex-list">
        <div class="pr-title">报销申请单</div>
        <div class="pr-back" @click="back">
          <img src="../../assets/images/icon_back.png"/>
          <span>返回上级页面</span>
        </div>
        <div class="table-list">
          <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            :cell-edit-done="cellEditDone"
          ></v-table>
          <div @click="add" style="cursor: pointer;margin: 15px 0">
            <img src="../../assets/images/btn_add.png" width="35px" height="35px"/>
          </div>
          <el-input placeholder="请输入报销原因" v-model="remark"></el-input>
          <div class="total">合计金额：
            <span>¥ {{ total.toFixed(2) }}</span>
          </div>
          <div class="btn-pos">
            <el-button type="primary" @click="submitForm">提 交</el-button>
            <el-button style="margin-left: 20px">取 消</el-button>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import Footer from "@/components/common/Footer";
  //引入数据
  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        remark: "",
        totalAmount: "",
        tableData: [
          {
            "occurrenceDate": "",
            "costExplain": "",
            "price": 0,
            "billNumber": "",
            "remark": ""
          },
        ],
        columns: [
          {
            field: 'occurrenceDate',
            title: '发生日期',
            width: 50,
            titleAlign: 'center',
            columnAlign: 'center',
            isEdit: true,
            formatter: function (rowData, rowIndex, pagingIndex, field) {
              return `<el-date-picker class='cell-edit-color' v-model="occurrenceDate" type="date">${rowData[field]}</el-date-picker>`;
            },
            isResize: true
          },
          {
            field: 'costExplain',
            title: '报销说明',
            width: 50,
            titleAlign: 'center',
            columnAlign: 'center',
            isEdit: true,
            isResize: true
          },
          {
            field: 'price',
            title: '金额',
            width: 50,
            titleAlign: 'center',
            columnAlign: 'center',
            isEdit: true,
            isResize: true
          },
          {
            field: 'billNumber',
            title: '单据张数',
            width: 50,
            titleAlign: 'center',
            columnAlign: 'center',
            isEdit: true,
            isResize: true
          },
          {
            field: 'remark',
            title: '备注',
            width: 100,
            titleAlign: 'center',
            columnAlign: 'center',
            isEdit: true,
            isResize: true
          }
        ]
      };
    },
    computed: {
      total() {
        return this.totalAmount = this.tableData.map(row => row.price).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
      }
    },
    methods: {
      add() {
        var data = {
          "occurrenceDate": "",
          "costExplain": "",
          "price": 0,
          "billNumber": "",
          "remark": ""
        }
        this.tableData.push(data)
      },
      // 单元格编辑回调
      cellEditDone(newValue, oldValue, rowIndex, rowData, field) {

        this.tableData[rowIndex][field] = newValue;
        // 接下来处理你的业务逻辑，数据持久化等...

      },
      back() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/'})
          return false
        } else {
          this.$router.go(-1)
        }
      },
      submitForm() {
        let postData = {
          applyPerson: '1',
          remark: this.remark,
          totalAmount: this.totalAmount,
          processType: 6,
          financeDetail: this.tableData
        }
        console.log(postData)
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/applyProcess/addApplyProcess', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  };
</script>
<style>
  .content.Business {
    box-sizing: border-box;
    /* padding: 0 80px; */
    background: #fff;
    overflow: hidden;
    margin-top: 25px;
    width: 1200px;
  }

  .Business .busIndex-list {
    /* width: 130%;
    float: left; */

    text-align: center;
    height: 730px;
  }

  .Business .busIndex-list > a {
    width: 385px;
    float: left;
    margin-top: 100px;
  }

  .Business .busIndex-list > a > img {
    width: 55px;
    float: left;
  }

  .Business .busIndex-list > a > span {
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

  .cell-edit-input {
    width: 120px !important;
    height: 30px !important;
    border-radius: 5px;
    border: 1px solid #409EFF;
  }

  .total {
    text-align: right;
    font-size: 14px;
    margin: 20px;
  }

  .total span {
    font-size: 22px;
    color: #ee456d;
  }

  .v-table-title-class {
    background: #f5f8fa !important;
  }
</style>
