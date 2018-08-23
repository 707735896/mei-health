<template>
    <div>
        <Header/>
        <div class="group content">
          <div class="layui-tab layui-tab-brief layui-tab01">
            <!-- <el-tabs v-model="activeName"
                @tab-click="handleClick">
                <el-tab-pane label="组织架构"
                    name="first">
                    <Table></Table>
                    </el-tab-pane>
                <el-tab-pane label="工作台"
                    name="second">
                    <Workbench></Workbench>
                    </el-tab-pane>
            </el-tabs> -->
            <ul class="layui-tab-title layui-tab-title01">
              <li style="margin-left:350px;"><router-link to='/manage/table'>组织架构</router-link></li>
              <li style="margin-left:270px;"><router-link to='/manage/workbench'>工作台</router-link></li>
            </ul>
            <router-view></router-view>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>


<style scoped>
.group {
  box-sizing: border-box;
  /* padding: 0 80px; */
  /* background: #fff; */
  overflow: hidden;
  margin-top: 25px;
  height: 730px;
  width: 1200px;
}
.tabName {
  font-size: 18px;
  font-weight: blod;
}
.el-tabs__item {
  font-size: 18px;
  font-weight: bold;
  color: #666;
  line-height: 53px;
  height: 53px;
  min-width: 65px;
}
.el-tabs__item:hover {
  color: #4389f5;
}
.el-tabs__nav {
  left: 40%;
}

.el-tabs__item.is-active {
  color: #4389f5;
}

/*选项卡*/

.layui-tab {
	margin: 0;
}

.group .layui-tab01 .layui-tab-title {
	width: 100%;
	background: #fff;
	border: none;
	height: 50px;
	margin: 20px 0;
}

.group .layui-tab01 .layui-tab01 {
	margin: 25px 0;
}

.group .layui-tab01 .layui-tab-title li {
	line-height: 50px;
	font-weight: bold;
	font-size: 18px;
	color: #666
}

.group .layui-tab01 .layui-tab-title .layui-this:after {
	height: 51px;
}

.group .layui-tab01 .layui-tab-content {
	width: 100%;
	float: left;
	padding: 0;
}
.router-link-active {
  color: #4389f5 !important;
  border-bottom:2px solid #4389f5 !important;
}
</style>


