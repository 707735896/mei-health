<template>
    <div>
        <Header/>
        <div class="content Business">
            <div class="busIndex-list">
                <a>
                    <img src="../../assets/images/Business/business-icon01.png">
                    <span>商务往来账</span>
                </a>
                <a>
                    <img src="../../assets/images/Business/business-icon02.png">
                    <span>商务应收款</span>
                </a>
                <a>
                    <img src="../../assets/images/Business/business-icon03.png">
                    <span>加盟查询</span>
                </a>
                <a>
                    <img src="../../assets/images/Business/business-icon04.png">
                    <span>商务赠送</span>
                </a>
                <a>
                    <img src="../../assets/images/Business/business-icon05.png">
                    <span>客户档案</span>
                </a>
                <a>
                    <img src="../../assets/images/Business/business-icon06.png">
                    <span>活动方案</span>
                </a>
                <a>
                    <img src="../../assets/images/Business/business-icon07.png">
                    <span>客户账户</span>
                </a>
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
  }
};
</script>
<style scoped>
.content.Business {
  box-sizing: border-box;
  padding: 0 80px;
  background: #fff;
  overflow: hidden;
  margin-top: 25px;
  height: 730px;
  width: 1200px;
}
.Business .busIndex-list {
  width: 130%;
  float: left;
}
.Business .busIndex-list > a {
  width: 385px;
  float: left;
  margin-top: 100px;
}
.Business .busIndex-list > a > img {
  width: 50px;
  float: left;
}
.Business .busIndex-list > a > span {
  float: left;
  font-size: 18px;
  margin: 15px 0 0 10px;
}
</style>
