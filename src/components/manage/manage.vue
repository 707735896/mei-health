<template>
    <div>
        <Header/>
        <div class="content manage">
            <el-tabs v-model="activeName"
                @tab-click="handleClick">
                <el-tab-pane label="组织架构"
                    name="first">组织架构</el-tab-pane>
                <el-tab-pane label="工作台"
                    name="second">工作台</el-tab-pane>
            </el-tabs>
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


<style>
.manage {
  box-sizing: border-box;
  padding: 0 80px;
  background: #fff;
  overflow: hidden;
  margin-top: 25px;
  padding-bottom: 300px;
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
</style>

