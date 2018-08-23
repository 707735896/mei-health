<template>
  <div>
    <Header/>
    <div class="pageurl">
      <!--banner-->
      <div class="banner">
        <div class="layui-carousel"
             id="test1"
             lay-filter="test4">
          <el-carousel :interval="5000" arrow="never" height="200px">
            <el-carousel-item v-for="(img,index) in imgList"
                              :key="index">
              <img :src="img.url">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="desk-cont">
        <!--工作台-->
        <div class="desk desk-work">
          <h5 class="desk-title">我的工作台</h5>
          <div class="desk-list">
            <router-link class="desk-list-li" to="/approval">
              <img src="../../assets/images/btn_shenpi.png">
              <span class="desk-txt">审批
                <span class="desk-txt-pos">2</span>
              </span>
            </router-link>
            <a class="desk-list-li">
              <img src="../../assets/images/btn_xinjian.png">
              <span class="desk-txt">新建工作流
                                <span class="desk-txt-pos">2</span>
                            </span>
            </a>
            <a class="desk-list-li">
              <img src="../../assets/images/btn_qingjia.png">
              <span class="desk-txt">请假
                            </span>
            </a>
            <a class="desk-list-li">
              <img src="../../assets/images/btn_baoxiao.png">
              <span class="desk-txt">报销
                            </span>
            </a>
          </div>
        </div>

        <div class="desk desk-new">
          <!--新闻中心-->
          <div class="desk-type desk-type-left">
            <h5 class="desk-title">新闻中心
              <div class="title-edit">
                <a class="enter-btn">
                  <img src="../../assets/images/enter.png"> </a>
              </div>
            </h5>
            <div class="new-cont">
              <a class="new-cont-li">
                <img src="../../assets/images/index_newsimg.jpg">
                <span class="new-cont-right">
                                    <span class="new-cont-title">母婴店的未来一定是服务至上</span>
                                    <span class="new-cont-txt">在网上买了3年的母婴用品，它都不能判断我家宝宝的年龄喜欢的品牌，给我推荐其它产品…</span>
                                </span>
              </a>
              <a class="new-cont-li">
                <img src="../../assets/images/index_newsimg.jpg">
                <span class="new-cont-right">
                                    <span class="new-cont-title">母婴店的未来一定是服务至上</span>
                                    <span class="new-cont-txt">在网上买了3年的母婴用品，它都不能判断我家宝宝的年龄喜欢的品牌，给我推荐其它产品…</span>
                                </span>
              </a>
            </div>
          </div>
          <!--公告-->
          <div class="desk-type desk-type-right">
            <h5 class="desk-title">公 告
              <div class="title-edit">
                <a class="enter-btn">
                  <img src="../../assets/images/enter.png"> </a>
              </div>
            </h5>
            <div class="new-cont">
              <a class="new-cont-li" @click="notice = true">
                                <span class="new-cont-right">
                                    <span class="new-cont-title">母婴店的未来一定是服务至上</span>
                                    <span class="new-cont-txt">为向您提供更加优质便捷的无纸化办公服无纸化办公便捷的无纸化办公服无纸</span>
                                </span>
                <div class="userinfo">
                  <img src="../../assets/images/infoimg.png"
                       class="userinfo-img">
                  <div class="userinfo-txt">
                    <span>品牌管理中心</span>
                    <p>2018.05.16 </p>
                  </div>
                </div>
              </a>
              <a class="new-cont-li" @click="notice = true">
                                <span class="new-cont-right">
                                    <span class="new-cont-title">母婴店的未来一定是服务至上</span>
                                    <span class="new-cont-txt">为向您提供更加优质便捷的无纸化办公服无纸化办公便捷的无纸化办公服无纸</span>
                                </span>
                <div class="userinfo">
                  <img src="../../assets/images/infoimg.png"
                       class="userinfo-img">
                  <div class="userinfo-txt">
                    <span>品牌管理中心</span>
                    <p>2018.05.16 </p>
                  </div>
                </div>
              </a>
              <a class="new-cont-li" @click="notice = true">
                                <span class="new-cont-right">
                                    <span class="new-cont-title">母婴店的未来一定是服务至上</span>
                                    <span class="new-cont-txt">为向您提供更加优质便捷的无纸化办公服无纸化办公便捷的无纸化办公服无纸</span>
                                </span>
                <div class="userinfo">
                  <img src="../../assets/images/infoimg.png"
                       class="userinfo-img">
                  <div class="userinfo-txt">
                    <span>品牌管理中心</span>
                    <p>2018.05.16 </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

    <el-dialog :visible.sync="notice" width="900px" center>

      <div class="notice-title">本周学习内容</div>

      <div class="notice-info">
        <span style="margin-right: 55px">发布时间：2018-08-22</span>
        <span style="margin-right: 120px">作者：品牌管理中心</span>
        <span>类型：全员学习</span>
      </div>

      <div class="notice-content">
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="notice = false" class="close" plain>关 闭</el-button>
      </span>
    </el-dialog>
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
        imgList: [
          {url: require("../../assets/images/banner01.png")},
          {url: require("../../assets/images/banner01.png")}
        ],
        notice: false
      };
    }
  };
</script>


<style>
  .desk-cont {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
    padding-left: 80px;
    overflow: hidden;
    padding-bottom: 40px;
  }

  .desk-cont > .desk {
    margin-top: 40px;
    float: left;
    margin-bottom: 20px;
  }

  .desk-cont > .desk-work {
    width: 100%;
  }

  .desk-title {
    width: 100%;
    font-size: 20px;
    color: #222;
    font-weight: bold;
    line-height: 30px;
    margin: 0;
    padding: 0;
  }

  .desk-work .desk-list {
    width: 100%;
    float: left;
    margin-top: 30px;
  }

  .desk-work .desk-list .desk-list-li {
    width: 220px;
    height: 70px;
    float: left;
    border-radius: 10px;
    border: 1px solid #e6e6e6;
    display: block;
    margin-right: 50px;
  }

  .desk-work .desk-list .desk-list-li:hover {
    background: #f3f3f4;
    border-color: transparent;
    transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
  }

  .desk-work .desk-list .desk-list-li > img {
    width: 50px;
    float: left;
    margin: 10px 15px 10px 25px;
  }

  .desk-work .desk-list .desk-list-li > .desk-txt {
    line-height: 70px;
    float: left;
    position: relative;
  }

  .desk-txt .desk-txt-pos {
    color: #fff;
    background: #d20303;
    border-radius: 50%;
    line-height: 1;
    padding: 1px 6px;
    font-size: 12px;
  }

  /*新闻中心*/

  .desk-new {
    overflow: hidden;
  }

  .desk-type {
    width: 495px;
    float: left;
    margin-right: 45px;
    margin-bottom: -3px;
  }

  .desk-title .title-edit {
    float: right;
  }

  .desk-title .title-edit > a {
    display: block;
    margin-right: 15px;
    float: left;
  }

  .new-cont {
    width: 100%;
  }

  .new-cont .new-cont-li {
    display: block;
    width: 100%;
    float: left;
    padding: 25px 0 30px 0;
    border-bottom: 1px solid #e2e2e2;
  }

  .new-cont .new-cont-li > img {
    width: 100px;
    height: 80px;
    float: left;
    margin-left: 10px;
  }

  .new-cont .new-cont-li > .new-cont-right {
    width: 360px;
    float: left;
    overflow: hidden;
    margin-left: 18px;
  }

  .new-cont .new-cont-li > .new-cont-right .new-cont-title {
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 34px;
    width: 100%;
    overflow: hidden;
  }

  .new-cont .new-cont-li > .new-cont-right .new-cont-title:hover {
    color: #d20303;
    transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
  }

  .new-cont .new-cont-li > .new-cont-right .new-cont-txt {
    color: #999;
    font-size: 14px;
    width: 100%;
    float: left;
  }

  /*公告*/

  .desk-type-right .new-cont .new-cont-li {
    padding: 15px 0 19px 0;
    box-sizing: border-box;
  }

  .desk-type-right .new-cont .new-cont-li > .new-cont-right {
    width: 285px;
    margin-left: 10px;
    margin-right: 45px;
  }

  .desk-type-right .new-cont .new-cont-li > .new-cont-right .new-cont-txt {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .desk-type-right .userinfo {
    float: left;
    margin-top: 6px;
    width: 150px;
  }

  .desk-type-right .userinfo > .userinfo-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    float: left;
    margin-right: 5px;
    overflow: hidden;
  }

  .desk-type-right .userinfo > .userinfo-txt {
    float: left;
    width: 90px;
  }

  .desk-type-right .userinfo > .userinfo-txt > span {
    color: #666;
    float: left;
    width: 100%;
    line-height: 23px;
  }

  .desk-type-right .userinfo > .userinfo-txt > p {
    color: #999;
    font-size: 12px;
    padding: 0;
    margin: 0;
  }

  /*banner*/

  .banner {
    width: 100% !important;
    /* height: 200px !important; */
  }

  .layui-carousel,
  .layui-carousel .slide {
    min-width: 1200px;
    width: 100% !important;
    height: 200px !important;
    background: transparent;
    margin: 0 auto;
    background: url("../../assets/images/banner-bg.png");
    background-position: center center;
    clear: both;
    text-align: center;
  }

  .layui-carousel > [carousel-item]:before {
    content: "";
  }

  .layui-carousel-arrow {
    display: none;
  }

  .layui-carousel .slide > img {
    width: 1200px;
    margin: 0 auto;
  }

  .close {
    width: 90px;
    height: 40px;
    border-radius: 20px;
  }
  .notice-title {
    text-align: center;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .notice-info {
    text-align: center;
    font-size: 14px;
    color: #9c9c9c;
    width: 700px;
    margin:0 auto 50px auto;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    padding: 5px 0;
  }

  .notice-content {
    text-align: center;
    margin-bottom: 100px;
  }
</style>

