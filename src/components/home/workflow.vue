<template>
  <div>
    <Header></Header>
    <div class="content workflow">
      <div class="busIndex-list">
        <div class="workflow_title">
          <img src="../../assets/images/btn_xinjian.png" width="30" height="30"/>
          <span class="shenpi_font">新建工作流</span>
        </div>
        <div class="spbt">
          <label class="workflow-title">申请标题：</label>
          <el-input placeholder="请输入工作标题" class="input-set" v-model="title"></el-input>
        </div>
        <div class="work-content">
          <label class="workflow-label">工作流内容：</label>
          <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"
                        class="workflow-editor"></quill-editor>
        </div>
        <div style="height: 40px;width: 100%">
          <label class="workflow-label">添加附件：</label>
          <el-upload
            class="upload-demo"
            :action="uploadUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :data="upLoadData"
            :onError="uploadError"
            :onSuccess="uploadSuccess"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <div class="fj-submit-btn">
          <el-button type="primary" class="close" @click="submitWorkflow">提 交</el-button>
          <el-button class="close" plain>取 消</el-button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
  import Header from "@/components/common/Header";
  import Footer from "@/components/common/Footer";
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import {quillEditor} from 'vue-quill-editor';

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction
    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}]
  ]
  export default {
    components: {
      Header, Footer, quillEditor
    },
    data() {
      return {
        upLoadData: {
          filename: '123456',
        },
        title: '',
        content: '',
        enclosure: '',
        editorOption: {},
        uploadUrl: this.$store.state.local + '/file/upLoadFile'
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      submitWorkflow() {
        let postData = {
          applyPerson: this.$store.state.userInfo.id,
          title: this.title,
          content: this.content,
          processType: 0
        };

        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/applyProcess/addApplyProcess', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            this.$message({
              message: '提交成功',
              type: 'success'
            });
          })
      },
      // 上传成功后的回调
      uploadSuccess (response, file, fileList) {
        console.log('上传文件', response)
      },
      // 上传错误
      uploadError (response, file, fileList) {
        console.log('上传失败，请重试！')
      },
    }
  }
</script>

<style>
  .workflow_title {
    float: left;
    margin-left: 110px;
    margin-top: 40px;
    color: #656565;
    font-size: 21px;
    font-weight: bold;
    height: 50px;
    text-align: left;
    width: 1000px;
    border-bottom: 2px solid #eeeeee;
    margin-right: 80px;
  }

  .content.workflow {
    box-sizing: border-box;
    background: #fff;
    overflow: hidden;
    margin-top: 25px;
    width: 1200px;
  }

  .workflow .busIndex-list {
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

  .workflow-editor {
    width: 800px;
    height: 180px;
    position: relative;
    left: 242px;
  }

  .input-set {
    width: 800px !important;
    height: 40px;
    margin: 30px 0;
  }

  .workflow-title {
    font-size: 16px;
  }

  .workflow-label {
    font-size: 16px;
    float: left;
    margin-left: 145px;
  }

  .work-content {
    width: 800px;
    height: 300px;
  }

  .workflow .upload-demo {
    width: 338px;
  }

  .fj-submit-btn {
    margin-top: 115px;
  }

  .workflow .el-upload-list {
    width: 350px;
    /*height: 40px;*/
    line-height: 40px;
    margin-left: 236px;
    /*background: #f5f8fa;*/
  }

  .workflow .el-upload-list__item-name {
    /*line-height: 40px;*/
    /*float: left;*/
    text-align: left;
  }
</style>
