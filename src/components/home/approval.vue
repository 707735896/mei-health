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
                  <el-table-column align="center" prop="id" label="编号" width="130"></el-table-column>
                  <el-table-column align="center" prop="type" label="类别" width="130"></el-table-column>
                  <el-table-column align="center" prop="name" label="申请人" width="130"></el-table-column>
                  <el-table-column align="center" prop="date" label="申请时间" width="130"></el-table-column>
                  <el-table-column align="center" prop="status" label="状态" width="130"></el-table-column>
                  <el-table-column label="操作" align="center" width="300">
                    <template slot-scope="scope">
                      <el-button size="mini" type="primary" class="circle">审批</el-button>
                      <el-button size="mini" class="circle" plain>查看</el-button>
                      <el-button size="mini" type="danger" plain class="circle">驳回</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="我发起的" name="second">我发起的</el-tab-pane>
              <el-tab-pane label="全部审批" name="third">全部审批</el-tab-pane>
            </el-tabs>
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
        activeName: 'first',
        tableData: [{
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }, {
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }, {
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }, {
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }, {
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }, {
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }, {
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }, {
          id: 1,
          type: '请假',
          date: '2016-05-02',
          name: '王小虎',
          status: '待审批'
        }]
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
</style>
