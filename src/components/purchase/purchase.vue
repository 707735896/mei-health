<template>
  <div>
    <Header/>
    <div class="content purchase">
      <ul class="busIndex-list">
        <router-link to='/pr'>
          <li class="item">
            <img src="../../assets/images/icon_caigou.png">
            <p style="font-size: 20px">采购申请</p>
          </li>
        </router-link>
        <router-link to='/paid'>
          <li class="item">
            <img src="../../assets/images/icon_baoxiao.png">
            <p style="font-size: 20px">报销申请</p>
          </li>
        </router-link>
        <router-link to='/cost'>
          <li class="item">
            <img src="../../assets/images/icon_feiyong.png">
            <p style="font-size: 20px">费用申请</p>
          </li>
        </router-link>
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
  .content.purchase {
    box-sizing: border-box;
    /* padding: 0 80px; */
    background: #fff;
    overflow: hidden;
    margin-top: 25px;
    width: 1200px;
  }

  .purchase .busIndex-list {
    /* width: 130%;
    float: left; */

    text-align: center;
    height: 730px;
  }

  .purchase .busIndex-list > a {
    width: 385px;
    float: left;
  }

  .purchase .busIndex-list > a > img {
    width: 55px;
    float: left;
  }

  .purchase .busIndex-list > a > span {
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

  .item img {
    margin-top: 35%;
  }

  .item:hover {
    -webkit-box-shadow: 0 0 10px #e2e5e5;
    -moz-box-shadow: 0 0 10px #e2e5e5;
    box-shadow: 0 0 10px #e2e5e5;
  }
</style>
