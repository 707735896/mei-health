<template>
  <div>
    <Header/>
    <div class="content Business">
      <div class="busIndex-list">

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
  }
    // data() {
    //   return {
    //     tableData: [{
    //       date: '2016-05-02',
    //       name: '王小虎',
    //       age: 18,
    //       sex: 1,
    //       isSB: true,
    //       address: '上海市普陀区金沙江路 1518 弄'
    //     }, {
    //       date: '2016-05-04',
    //       sex: 1,
    //       name: '王小虎',
    //       isSB: true,
    //       age: 18,
    //       address: '上海市普陀区金沙江路 1517 弄'
    //     }],
    //     currentRow: null,
    //   }
    // },
    // methods: {
    //   addDemo() {
    //     var d = {
    //       date: '',
    //       sex: 1,
    //       name: '',
    //       age: 18,
    //       isSB: true,
    //       address: ''
    //     };
    //     app.tableData.push(d);
    //     setTimeout(() => {
    //       this.$refs.demoTable.setCurrentRow(d);
    //     }, 10);//<==用于延时渲染后选中这行
    //   },
    //   handleCurrentChange(val) {
    //     this.currentRow = val;
    //   },
    //   handleDelete(index, r) {
    //     app.tableData.splice(index, 1)
    //   }
    // }
  // };
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

  .item {
    display: inline-block;
    /* flex: 1; */
    width: 280px;
    height: 340px;
    margin: 200px 50px 0 50px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
  }

  .item > p {
    font-size: 20px
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
