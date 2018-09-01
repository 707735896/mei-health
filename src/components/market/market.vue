<template>
  <div>
    <Header></Header>
    <div class="market content">
      <div class="layui-tab layui-tab-brief layui-tab01">
        <div class="layui-tab-content">
          <div class="layui-tab-item layui-show" style="display:inlin-block">
            <div class="group-left">
              <!--搜索-->
              <div class="search">
                <input type="search" placeholder="搜索" value="搜索">
                <button type="submit"></button>
              </div>
              <el-tree
                :data="data"
                :props="defaultProps" default-expand-all
                @node-click="handleNodeClick">
              </el-tree>
            </div>
            <div class="market-right">
              <h6>市场管理中心</h6>
              <div class="market-manage">
                <div class="market-li">
                  <div class="market-color blue">12</div>
                  <div class="market-label">销售订单</div>
                </div>
                <div class="market-li">
                  <div class="market-color red">8</div>
                  <div class="market-label">售后订单</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">1</div>
                  <div class="market-label">退货订单</div>
                </div>
                <div class="market-li">
                  <div class="market-color gray">0</div>
                  <div class="market-label">补货订单</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">2</div>
                  <div class="market-label">内部领用</div>
                </div>
              </div>

              <h6>仓库管理中心</h6>
              <div class="market-manage">
                <div class="market-li">
                  <div class="market-color blue">6</div>
                  <div class="market-label">采购进货</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">13</div>
                  <div class="market-label">订单发货</div>
                </div>
                <div class="market-li">
                  <div class="market-color gray">0</div>
                  <div class="market-label">售后发货</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">2</div>
                  <div class="market-label">退货入库</div>
                </div>
              </div>

              <div class="market-manage" style="margin-top: 10px">
                <div class="market-li">
                  <div class="market-color blue">10</div>
                  <div class="market-label">库存盘点</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">7</div>
                  <div class="market-label">库存查询</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">8</div>
                  <div class="market-label">库存调拨</div>
                </div>
                <div class="market-li">
                  <div class="market-color gray">8</div>
                  <div class="market-label">出入库</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">8</div>
                  <div class="market-label">商品资料</div>
                </div>
              </div>

              <h6>仪器售后中心</h6>
              <div class="market-manage">
                <div class="market-li">
                  <div class="market-color blue">3</div>
                  <div class="market-label">仪器售后</div>
                </div>
                <div class="market-li">
                  <div class="market-color blue">9</div>
                  <div class="market-label">维修方案</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
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
        tableData3: [{
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-07",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        multipleSelection: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        activeName2: 'first',
        data: [{
          label: '销售订单',
          children: [{
            label: '待确认订单'
          }, {
            label: '待收款订单'
          }, {
            label: '待发货订单'
          }]
        }, {
          label: '售后订单',
          children: [{
            label: '售后发货'
          }, {
            label: '售后退货'
          }]
        }, {
          label: '仪器售后'
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },

    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style>
  .market {
    box-sizing: border-box;
    /* padding: 0 80px; */
    /* background: #fff; */
    overflow: hidden;
    margin-top: 25px;
    height: 730px;
    width: 1200px;
  }

  /*左侧菜单*/

  .group-left {
    width: 280px;
    float: left;
    background: #fff;
    margin-right: 20px;
    box-sizing: border-box;
    padding: 10px 20px 40px 20px;
    height: 660px;
  }

  .search {
    width: 240px;
    height: 36px;
    background: url("../../assets/images/group/search.png") no-repeat;
    margin-top: 20px;
  }

  .search > input {
    width: 180px;
    float: left;
    margin-left: 20px;
    border: none;
    padding: 7px 0;
    line-height: 1;
    margin-top: 1px;
    color: #999;
  }

  .search > ::-webkit-input-placeholder {
    color: #999;
  }

  .search > :-moz-placeholder {
    color: #999;
  }

  .search > :-ms-input-placeholder {
    color: #999;
  }

  .search > button {
    background: transparent;
    width: 35px;
    height: 35px;
    margin-top: 1px;
    border: none;
    cursor: pointer;
  }

  /*右侧*/

  .market-right {
    width: 880px;
    height: 660px;
    float: left;
    background: #fff;
    box-sizing: border-box;
    padding: 0 30px 60px 30px;
  }

  .market-right > h6 {
    padding: 0;
    margin-top: 30px;
    width: 100%;
    float: left;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .market-right > h6 > img {
    width: 24px;
    float: left;
    margin-right: 10px;
    margin-top: 8px;
  }

  .market-right > h6 > .title-user {
    float: left;
    font-weight: bold;
    font-size: 20px;
  }

  .market-right > h6 > a {
    float: left;
    display: block;
    margin-left: 20px;
    margin-top: 6px;
  }

  .market-right > h6 > a > img {
    width: 16px;
    float: left;
    margin-top: 3px;
  }

  .right-select {
    width: 100%;
    float: left;
    margin: 20px 0;
  }

  .right-select > a {
    display: block;
    float: left;
    text-align: center;
    color: #999;
    border: 1px solid #c8cdd5;
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    margin-right: 15px;
    border-radius: 16px;
  }

  .right-select > .active {
    color: #fff;
    background: #4389f5;
    border: 1px solid #4389f5;
  }

  .el-tree {
    margin-top: 10px;
  }

  .el-tree-node__content {
    height: 40px !important;;
    border-radius: 20px;
    margin: 2px 0;
  }

  .el-tree-node:focus > .el-tree-node__content {
    background: #4389f5 !important;
    color: #fff;
    font-size: 15px;
  }

  .el-tree-node__label {
    margin-left: 45px;
  }

  /*市场管理中心*/

  .market-li {
    width: 150px;
    height: 100px;
    background: #f5f8fa;
    display: inline-block;
    margin-right: 10px;
  }

  .market-label {
    font-size: 18px;
    text-align: center;
    font-weight: 500;
  }

  .market-color {
    font-size: 36px;
    text-align: center;
    font-weight: 500;
    margin-top: 5px;
  }

  .blue {
    color: #4389f5;
  }

  .red {
    color: #d20303;
  }

  .gray {
    color: #99999a;
  }

</style>


