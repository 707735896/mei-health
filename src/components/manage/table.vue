<template>
  <div>
    <div class="layui-tab-content">
      <div class="layui-tab-item layui-show" style="display:inlin-block">
        <div class="group-left">
          <!--搜索-->
          <div class="search">
            <input type="search" placeholder="搜索" value="搜索">
            <button type="submit"></button>
          </div>
          <div class="manage-table">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="架构" name="first">
                <h5 class="group-title">
                  <img src="../../assets/images/group/logo-min.png">
                  <span class="group-name">梅氏健康管理有限公司</span>
                  <span class="group-sum">(287)</span>
                </h5>
                <el-tree
                  :data="data"
                  :props="defaultProps"
                  accordion
                  @node-click="handleNodeClick">
                </el-tree>
              </el-tab-pane>
              <el-tab-pane label="职权" name="second">职权</el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="group-right">
          <h6>
            <img src="../../assets/images/group/people.png">
            <span class="title-user">部门人员</span>
            <a>
              <img src="../../assets/images/group/edit.png">
              <span class="edit-txt">设置</span>
            </a>
          </h6>
          <div class="right-select">
            <a class="active">添加子部门</a>
            <a class="addPeople">添加人员</a>
            <a>调整部门</a>
            <a>修改</a>
            <a>删除</a>
          </div>
          <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="姓名" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="职位" width="120">
            </el-table-column>
            <el-table-column prop="address" label="岗位" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="工号" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="手机" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="邮箱" show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="400" style="margin-top: 20px;">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
        activeName2: 'first',
        data: [{
          label: '互联网中心',
          children: [{
            label: '管理层',
            children: [{
              label: '信息部'
            }]
          }]
        }, {
          label: '人事行政中心',
          children: [{
            label: '管理层',
            children: [{
              label: '信息部'
            }]
          }, {
            label: '信息部',
            children: [{
              label: '信息部'
            }]
          }]
        }, {
          label: '商务管理中心',
          children: [{
            label: '信息部',
            children: [{
              label: '信息部'
            }]
          }, {
            label: '信息部',
            children: [{
              label: '信息部'
            }]
          }]
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

<style scoped>
  .group-title > .group-name {
    /*float: left;*/
    font-size: 16px;
    font-weight: bold;
  }

  .group-title > .group-sum {
    /*float: left;*/
    color: #666;
    font-size: 12px;
    margin-left: 6px;
    margin-top: 4px;
    max-width: 165px;
    white-space: nowrap;
    text-overflow: ellipsis;
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

  .group-right {
    width: 880px;
    height: 660px;
    float: left;
    background: #fff;
    box-sizing: border-box;
    padding: 0 30px 60px 30px;
  }

  .group-right > h6 {
    padding: 0;
    margin-top: 35px;
    width: 100%;
    float: left;
  }

  .group-right > h6 > img {
    width: 24px;
    float: left;
    margin-right: 10px;
    margin-top: 8px;
  }

  .group-right > h6 > .title-user {
    float: left;
    font-weight: bold;
    font-size: 20px;
  }

  .group-right > h6 > a {
    float: left;
    display: block;
    margin-left: 20px;
    margin-top: 6px;
  }

  .group-right > h6 > a > img {
    width: 16px;
    float: left;
    margin-top: 3px;
  }

  .group-right > h6 > a > .edit-txt {
    color: #999;
    float: left;
    margin-left: 5px;
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

  .mo {
    color: #222 !important;
  }
</style>

<style>
  .manage-table .el-tabs__header, .manage-table .el-tabs__content {
    margin: 15px 0;
  }

  .manage-table .el-tabs--card > .el-tabs__header .el-tabs__item {
    border: none;
  }

  .manage-table .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }

  .manage-table .el-tabs--card > .el-tabs__header {
    border: none;
  }

  .manage-table .el-tabs__nav-scroll {
    background: #f5f7fa;
    border-radius: 20px;
  }

  .manage-table .el-tabs__item {
    text-align: center;
    width: 120px;
  }

  .manage-table .el-tabs__item.is-active {
    color: #fff;
    background: #4389f5;
    border-radius: 20px;
    width: 120px;
    font-weight: bold;
  }

  .el-tree {
    margin-top: 10px;
  }

  .el-tree-node__content {
    height: 40px;
    border-radius: 20px;
    margin: 2px 0;
  }

  .el-tree-node:focus > .el-tree-node__content {
    background: #4389f5;
    color: #fff;
    font-size: 15px;
  }

</style>
