<template>
                <div class="layui-tab-item">
                <div class="work-desk">
                    <h4 class="work-desk-title">人事申请</h4>
                    <div class="work-desk-cont">
                        <div class="work-desk-box">
                            <a><img src="../../assets/images/group/btn_qingjia.png">
                                <span>请假申请</span></a>
                            <a><img src="../../assets/images/group/btn_jiaban.png">
                                <span>加班申请</span></a>
                            <a><img src="../../assets/images/group/btn_chuchai.png">
                                <span>出差申请</span></a>
                            <a><img src="../../assets/images/group/btn_zhuanzheng.png">
                                <span>转正申请</span></a>
                            <a><img src="../../assets/images/group/btn_lizhi.png">
                                <span>离职申请</span></a>
                            <a><img src="../../assets/images/group/btn_kaoqin.png">
                                <span>考勤申请</span></a>
                        </div>
                    </div>
                    <h4 class="work-desk-title">行政申请</h4>
                    <div class="work-desk-cont">
                        <div class="work-desk-box">
                            <a><img src="../../assets/images/group/btn_bangong.png">
                                <span>办公用品</span></a>
                            <a><img src="../../assets/images/group/btn_cheliang.png">
                                <span>车辆管理</span></a>
                        </div>
                    </div>
                </div>
            </div>
</template>


<style>
.work-desk {
  width: 100%;
  float: left;
  box-sizing: border-box;
  padding: 0 80px;
  background: #fff;
  min-height: 680px;
}

.work-desk .work-desk-title {
  width: 100%;
  float: left;
  padding: 35px 10px 23px;
  color: #666;
  font-size: 18px;
  border-bottom: 1px solid #dee6ea;
}

.work-desk-cont {
  width: 100%;
  float: left;
  overflow: hidden;
}

.work-desk-cont .work-desk-box {
  width: 140%;
  float: left;
  padding-top: 40px;
}

.work-desk-cont .work-desk-box > a {
  display: block;
  float: left;
  width: 375px;
  margin-left: 10px;
  margin-bottom: 55px;
}

.work-desk-cont .work-desk-box > a > img {
  float: left;
  width: 50px;
  margin-right: 15px;
}

.work-desk-cont .work-desk-box > a > span {
  float: left;
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  margin-top: 15px;
}
</style>
