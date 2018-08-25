<template>
    <div>
        <Header/>
        <div class="content Business">
            <ul class="busIndex-list">
                <li class="item">
                    <router-link to='/pr'>
                      <img src="../../assets/images/icon_caigou.png">
                      <p>采购申请</p>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to='/paid'>
                      <img src="../../assets/images/icon_baoxiao.png">
                      <p>报销申请</p>
                    </router-link>
                </li>
                <li class="item">
                  <router-link to='/cost'>
                    <img src="../../assets/images/icon_feiyong.png">
                    <p>费用申请</p>
                  </router-link>
                </li>
              <router-view></router-view>
            </ul>
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
.item{
  display: inline-block;
  /* flex: 1; */
  width: 280px;
  height: 340px;
  margin: 200px 50px 0 50px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
}
.item > p{
    font-size: 20px
}
.item img {
    margin-top: 35%;
}
.item:hover {
  -webkit-box-shadow:0 0 10px #e2e5e5; 
  -moz-box-shadow:0 0 10px #e2e5e5; 
   box-shadow:0 0 10px #e2e5e5; 
}
</style>
