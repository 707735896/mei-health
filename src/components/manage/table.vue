<template>
  <div>
    <div class="layui-tab-content">
      <div class="layui-tab-item layui-show" style="display:inlin-block">
        <div class="group-left">
          <!--搜索-->
          <div class="search">
            <input type="search" placeholder="搜索" value="搜索">
            <button type="submit"></button>
          </div>
          <div class="manage-table">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="架构" name="first">
                <!--<h5 class="group-title">-->
                <!--<img src="../../assets/images/group/logo-min.png">-->
                <!--<span class="group-name">梅氏健康管理有限公司</span>-->
                <!--<span class="group-sum">(287)</span>-->
                <!--</h5>-->
                <div style="height: 480px">
                  <el-tree
                    :data="treeData"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick">
                  </el-tree>
                </div>
              </el-tab-pane>
              <el-tab-pane label="职权" name="second">职权</el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="group-right">
          <h6>
            <img src="../../assets/images/group/people.png">
            <span class="title-user">部门人员</span>
            <a @click="openSetDept">
              <img src="../../assets/images/group/edit.png">
              <span class="edit-txt">设置</span>
            </a>
          </h6>
          <div class="right-select">
            <a @click="openAddDept">添加子部门</a>
            <a @click="deleteDept">删除部门</a>
            <a class="addPeople" @click="openAddUser">添加人员</a>
            <a>调整部门</a>
            <a @click="editUser">修改</a>
            <a @click="deleteUser">删除</a>
          </div>
          <el-table ref="multipleTable" :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    tooltip-effect="dark" style="width: 100%;height: 432px"
                    @selection-change="handleSelectionChange" :header-cell-style="{background:'#f5f8fa'}">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="userName" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="level" label="职位" width="120">
            </el-table-column>
            <el-table-column prop="jobName" label="岗位" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="userNo" label="工号" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="phone" label="手机" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="email" label="邮箱" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="statusId" label="状态" show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="[10, 20]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="total" style="margin-top: 20px;">
          </el-pagination>

          <!--设置部门-->
          <div class="addDept">
            <el-dialog :visible.sync="outerSetDept" width="500px">
              <el-dialog width="850px" :visible.sync="innerSetDept" append-to-body>
                <div class="inner-title">部门负责人</div>
                <div class="dept-transfer">
                  <el-transfer
                    :titles="['部门人员', '已选负责人']"
                    filterable
                    :filter-method="filterMethod"
                    filter-placeholder="请输入拼音"
                    v-model="value2"
                    :data="data2" @change="getCheckLabel">
                  </el-transfer>
                </div>
                <div slot="footer" class="dialog-footer" style="text-align: center">
                  <el-button type="primary" @click="innerSetDept = false">确 定</el-button>
                  <el-button @click="innerSetDept = false">取 消</el-button>
                </div>
              </el-dialog>
              <div slot="footer" class="dialog-footer">
              </div>
              <div class="dept-title">设置部门</div>
              <el-form :model="deptForm" status-icon :rules="dept" ref="deptForm" label-width="100px"
                       class="demo-ruleForm">
                <el-form-item label="部门名称：" prop="deptName">
                  <el-input v-model="setDeptName"></el-input>
                </el-form-item>
                <el-form-item label="上级部门：" prop="dept">
                  <el-select v-model="deptForm.deptId" placeholder="请选择部门" style="width: 300px">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.deptName"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="部门负责人：" prop="deptManager">
                  <div @click="openInnerSetDept"
                       class="open-select">
                    <span v-for="item in selectFzr"
                          class="open-span">{{item}}</span>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updateDept('deptForm')">保存</el-button>
                  <el-button @click="outerSetDept = false">取消</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>

          <!--添加部门-->
          <div class="addDept">
            <el-dialog :visible.sync="outerDeptVisible" width="500px">
              <el-dialog width="850px" :visible.sync="innerDeptVisible" append-to-body>
                <!--<div class="inner-title">部门负责人</div>-->
                <!--<div class="dept-transfer">-->
                <!--<el-transfer-->
                <!--:titles="['部门人员', '已选负责人']"-->
                <!--filterable-->
                <!--:filter-method="filterMethod"-->
                <!--filter-placeholder="请输入城市拼音"-->
                <!--v-model="value2"-->
                <!--:data="data2">-->
                <!--</el-transfer>-->
                <!--</div>-->
                <div slot="footer" class="dialog-footer" style="text-align: center">
                  <el-button type="primary">确 定</el-button>
                  <el-button @click="innerDeptVisible = false">取 消</el-button>
                </div>
              </el-dialog>
              <div slot="footer" class="dialog-footer">
                <!--<el-button @click="outerDeptVisible = false">取 消</el-button>-->
              </div>
              <div class="dept-title">添加部门</div>
              <el-form :model="deptForm" status-icon :rules="dept" ref="deptForm" label-width="100px"
                       class="demo-ruleForm">
                <el-form-item label="部门名称" prop="deptName">
                  <el-input v-model="deptForm.deptName"></el-input>
                </el-form-item>
                <el-form-item label="上级部门" prop="dept">
                  <el-select v-model="deptForm.deptId" placeholder="请选择部门" style="width: 300px">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.deptName"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <!--<el-form-item label="部门负责人" prop="deptManager">-->
                <!--<el-input v-model="deptForm.deptManager" @click.native="innerDeptVisible = true"></el-input>-->
                <!--</el-form-item>-->
                <el-form-item>
                  <el-button type="primary" @click="submitDeptForm('deptForm')">保存</el-button>
                  <el-button @click="outerDeptVisible = false">取消</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>

          <!--添加成员-->
          <div class="addUser">
            <el-dialog :visible.sync="outerUserVisible" width="500px">
              <div slot="footer" class="dialog-footer">
              </div>
              <div class="dept-title">添加人员</div>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name" placeholder="请输入姓名">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex" placeholder="请输入性别">
                  <el-radio v-model="ruleForm.sex" label="0">男</el-radio>
                  <el-radio v-model="ruleForm.sex" label="1">女</el-radio>
                </el-form-item>
                <el-form-item label="部门" prop="dept">
                  <el-select v-model="ruleForm.deptId" placeholder="请选择部门" style="width: 360px">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.deptName"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="级别" prop="level" placeholder="请输入级别">
                  <el-input v-model="ruleForm.level"></el-input>
                </el-form-item>
                <el-form-item label="岗位" prop="position" placeholder="请输入职位">
                  <el-input v-model="ruleForm.position"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phone" placeholder="请输入手机">
                  <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" placeholder="请输入邮箱">
                  <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" required>
                  <el-col :span="11">
                    <el-form-item prop="birthday">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday"
                                      style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="入职时间" required>
                  <el-col :span="11">
                    <el-form-item prop="entryDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.entryDate"
                                      style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitUserClose('ruleForm')">保存</el-button>
                  <el-button type="primary" @click="submitUser('ruleForm')">保存并继续添加</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>

          <!--编辑成员-->
          <div class="editUser">
            <el-dialog :visible.sync="outerEditUserVisible" width="500px">
              <div slot="footer" class="dialog-footer">
              </div>
              <div class="dept-title">{{editForm.userName}}(工号：{{editForm.userNo}})</div>
              <el-form :model="editForm" ref="editForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name" placeholder="请输入姓名">
                  <el-input v-model="editForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="部门" prop="dept">
                  <el-select v-model="editForm.deptId" placeholder="请选择部门" style="width: 360px">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.deptName"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="职位" prop="position" placeholder="请输入职位">
                  <el-input v-model="editForm.levelName"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phone" placeholder="请输入手机">
                  <el-input v-model="editForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" placeholder="请输入邮箱">
                  <el-input v-model="editForm.email"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" required>
                  <el-col :span="11">
                    <el-form-item prop="birthday">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birthday"
                                      style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="入职时间" required>
                  <el-col :span="11">
                    <el-form-item prop="entryDate">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.entryDate"
                                      style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitEditUserClose('editForm')">保 存</el-button>
                  <el-button type="danger" @click="deleteUser">彻底删除</el-button>
                  <el-button type="green" @click="deleteUser">离职</el-button>
                  <el-button @click="resetForm('editForm')">取 消</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {toTree} from '../../assets/js/toTree.js'

  export default {
    created() {
      this.getdeptList();
    },
    data() {
      const generateData2 = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      var checkDeptName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('部门名称不能为空'));
        }
      };
      var checkPdept = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('上级部门不能为空'));
        }
      };
      var checkDeptManager = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('部门负责人不能为空'));
        }
      };
      return {
        selectListId: [],
        selectFzr: [],
        selectId: [],
        newLists: [],
        setDeptName: '',
        delId: '',
        options: [],
        data2: generateData2(),
        value2: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        multipleSelection: [],
        total: 0,//默认数据总数
        pageSize: 10,//每页的数据条数
        pageNumber: 1,//页数
        currentPage: 1,//默认开始页面
        activeName2: 'first',
        tableData: [],
        treeData: [],
        defaultProps: {
          children: 'children',
          label: 'deptName'
        },
        outerDeptVisible: false,
        innerDeptVisible: false,
        outerUserVisible: false,
        innerUserVisible: false,
        outerEditUserVisible: false,
        innerEditUserVisible: false,
        outerSetDept: false,
        innerSetDept: false,
        deptForm: {
          deptName: '',
          deptId: '',
          deptManager: ''
        },
        dept: {
          deptName: [
            {validator: checkDeptName, trigger: 'blur'}
          ],
          pDept: [
            {validator: checkPdept, trigger: 'blur'}
          ],
          deptManager: [
            {validator: checkDeptManager, trigger: 'blur'}
          ]
        },
        ruleForm: {
          name: '',
          sex: '0',
          deptId: '',
          level: '',
          position: '',
          phone: '',
          email: '',
          birthday: '',
          entryDate: ''
        },
        editForm: {
          id: '',
          userNo: '',
          userName: '',
          levelName: '',
          jobName: '',
          phone: '',
          email: '',
          birthday: '',
          entryDate: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
          ],
          deptId: [
            {required: true, message: '请选择部门', trigger: 'change'}
          ],
          level: [
            {required: true, message: '请输入级别', trigger: 'blur'},
          ],
          position: [
            {required: true, message: '请输入职位', trigger: 'blur'},
          ],
          phone: [
            {required: true, message: '请输入手机', trigger: 'blur'},
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'},
          ],
          birthday: [
            {type: 'date', required: true, message: '请选择出生日期', trigger: 'change'}
          ],
          entryDate: [
            {type: 'date', required: true, message: '请选择入职时间', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getUserList()
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getUserList()
        console.log(`当前页: ${val}`);
      },
      handleNodeClick(data) {
        this.delId = data.id;
        this.setDeptName = data.deptName;
        this.getUserList()
      },
      getUserList() {
        let postData = {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          deptId: this.delId
        }
        console.log('部门id=' + postData.deptId)
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/user/selectUser', JSON.stringify(postData))
          .then((res) => {
            var datas = res.data.obj.rows;
            console.log(res)
            this.tableData = datas;
            this.total = res.data.obj.total;
          })
          .catch((error) => {
            console.log(error)
          })
      },
      getdeptList() {
        let postData = {
          pageSize: 0,
          pageNumber: 0
        }
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/deptList', JSON.stringify(postData))
          .then((res) => {
            var datas = res.data.obj;
            console.log(datas)
            var newList = toTree(datas, 'id', 'pid', 'children')
            this.treeData = newList;
          })
          .catch((error) => {
            console.log(error)
          })
      },
      openAddDept() {
        this.outerDeptVisible = true;
        let postData = {
          pageSize: 0,
          pageNumber: 0
        }
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/deptList', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            var datas = res.data.obj;
            this.options = datas;
          })
          .catch((error) => {
            console.log(error)
          })
      },
      openSetDept() {
        this.outerSetDept = true;
        let postData = {
          pageSize: 0,
          pageNumber: 0
        }
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/deptList', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            var datas = res.data.obj;
            this.options = datas;
          })
          .catch((error) => {
            console.log(error)
          })
      },
      openInnerSetDept() {
        this.innerSetDept = true;
        let postData = {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          deptId: this.delId
        }
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/user/selectUser', JSON.stringify(postData))
          .then((res) => {
            var datas = res.data.obj.rows;
            var newJson = datas.map((us) => {
              return us.userName
            });

            var newId = datas.map((us) => {
              return us.id
            });
            this.selectListId = newId;
            const data = [];
            const cities = newJson;
            const pinyin = newJson;
            cities.forEach((city, index) => {
              data.push({
                label: city,
                key: index,
                pinyin: pinyin[index]
              });
            });
            this.data2 = data;
          })
          .catch((error) => {
            console.log(error)
          })
      },
      openAddUser() {
        this.outerUserVisible = true;
        let postData = {
          pageSize: 0,
          pageNumber: 0
        }
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/deptList', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            var datas = res.data.obj;
            this.options = datas;
          })
          .catch((error) => {
            console.log(error)
          })
      },
      submitDeptForm(formName) {
        let postData = {
          deptName: this.deptForm.deptName,
          pid: this.deptForm.deptId,
        }
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/addDept', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.$refs[formName].resetFields();
            this.getdeptList();
            this.outerDeptVisible = false
          })
          .catch((error) => {
            console.log(error)
          })

      },
      submitUserClose(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let postData = {
              userName: this.ruleForm.name,
              sex: this.ruleForm.sex,
              deptId: this.ruleForm.deptId,
              level: this.ruleForm.level,
              jobName: this.ruleForm.position,
              phone: this.ruleForm.phone,
              email: this.ruleForm.email,
              birthday: this.ruleForm.birthday,
              entryDate: this.ruleForm.entryDate,
              statusId: 1
            }
            this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
            this.$http.post(this.$store.state.local + '/web/user/addUser', JSON.stringify(postData))
              .then((res) => {
                console.log(res)
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                this.outerUserVisible = false
                let postData = {
                  pageSize: this.pageSize,
                  pageNumber: this.pageNumber,
                  deptId: this.ruleForm.deptId,
                }
                this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
                this.$http.post(this.$store.state.local + '/web/user/selectUser', JSON.stringify(postData))
                  .then((res) => {
                    var datas = res.data.obj.rows;
                    console.log(res)
                    console.log(datas.length)
                    this.tableData = datas;
                    this.total = res.data.obj.total;
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      submitUser(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let postData = {
              userName: this.ruleForm.name,
              sex: this.ruleForm.sex,
              deptId: this.ruleForm.deptId,
              level: this.ruleForm.level,
              jobName: this.ruleForm.position,
              phone: this.ruleForm.phone,
              email: this.ruleForm.email,
              birthday: this.ruleForm.birthday,
              entryDate: this.ruleForm.entryDate,
              statusId: 1
            }
            this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
            this.$http.post(this.$store.state.local + '/web/user/addUser', JSON.stringify(postData))
              .then((res) => {
                console.log(res)
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                this.$refs[formName].resetFields();
                let postData = {
                  pageSize: this.pageSize,
                  pageNumber: this.pageNumber,
                  deptId: this.ruleForm.deptId,
                }
                this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
                this.$http.post(this.$store.state.local + '/web/user/selectUser', JSON.stringify(postData))
                  .then((res) => {
                    var datas = res.data.obj.rows;
                    console.log(res)
                    console.log(datas.length)
                    this.tableData = datas;
                    this.total = res.data.obj.total;
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      editUser() {
        this.outerEditUserVisible = true;
        let postData = {
          pageSize: 0,
          pageNumber: 0
        }
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/deptList', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            var datas = res.data.obj;
            this.options = datas;
          })
          .catch((error) => {
            console.log(error)
          })
        console.log(this.multipleSelection[0])
        this.editForm.id = this.multipleSelection[0].id;
        this.editForm.userNo = this.multipleSelection[0].userNo;
        this.editForm.userName = this.multipleSelection[0].userName;
        this.editForm.deptId = this.multipleSelection[0].deptId;
        this.editForm.levelName = this.multipleSelection[0].levelName;
        this.editForm.jobName = this.multipleSelection[0].jobName;
        this.editForm.phone = this.multipleSelection[0].phone;
        this.editForm.email = this.multipleSelection[0].email;
        this.editForm.birthday = this.multipleSelection[0].birthday;
        this.editForm.entryDate = this.multipleSelection[0].entryDate;
      },
      deleteUser() {
        let postData = {
          id: this.multipleSelection[0].id
        }
        console.log(postData)
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/user/deleteUser', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.outerEditUserVisible = false
          })
          .catch((error) => {
            console.log(error)
          })
      },
      submitEditUserClose(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let postData = {
              id: this.editForm.id,
              userNo: this.editForm.userNo,
              userName: this.editForm.userName,
              deptId: this.editForm.deptId,
              levelName: this.editForm.levelName,
              jobName: this.editForm.jobName,
              phone: this.editForm.phone,
              email: this.editForm.email,
              birthday: this.editForm.birthday,
              entryDate: this.editForm.entryDate
            }
            console.log(postData)
            this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
            this.$http.post(this.$store.state.local + '/web/user/updateUser', JSON.stringify(postData))
              .then((res) => {
                console.log(res)
                this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                this.outerEditUserVisible = false
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      updateDept() {
        let postData = {
          id: this.delId,
          deptName: this.setDeptName,
          principal: this.selectId
        }
        console.log(postData)
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/updateDept', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.outerSetDept = false
          })
          .catch((error) => {
            console.log(error)
          })
      },
      deleteDept() {
        let postData = {
          id: this.delId
        }
        console.log(postData)
        this.$http.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8'
        this.$http.post(this.$store.state.local + '/web/dept/deleteDept', JSON.stringify(postData))
          .then((res) => {
            console.log(res)
            this.$confirm('是否继续删除?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.outerEditUserVisible = false;
              this.getdeptList();
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          })
          .catch((error) => {
            console.log(error)
          })
      },
      getCheckLabel() {
        for (var i = 0; i < this.value2.length; i++) {
          var ss = this.value2[i];
          this.selectFzr.push(this.data2[ss].label)
        }
        for (var i = 0; i < this.value2.length; i++) {
          var ss = this.value2[i];
          this.selectId.push(this.selectListId[ss])
        }
        console.log(this.selectId)
      }
    }
  }
</script>

<style scoped>
  .group-title > .group-name {
    /*float: left;*/
    font-size: 16px;
    font-weight: bold;
  }

  .group-title > .group-sum {
    /*float: left;*/
    color: #666;
    font-size: 12px;
    margin-left: 6px;
    margin-top: 4px;
    max-width: 165px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /*左侧菜单*/

  .group-left {
    width: 280px;
    float: left;
    background: #fff;
    margin-right: 20px;
    box-sizing: border-box;
    padding: 10px 20px 40px 20px;
    height: 660px;
  }

  .search {
    width: 240px;
    height: 36px;
    background: url("../../assets/images/group/search.png") no-repeat;
    margin-top: 20px;
  }

  .search > input {
    width: 180px;
    float: left;
    margin-left: 20px;
    border: none;
    padding: 7px 0;
    line-height: 1;
    margin-top: 1px;
    color: #999;
  }

  .search > ::-webkit-input-placeholder {
    color: #999;
  }

  .search > :-moz-placeholder {
    color: #999;
  }

  .search > :-ms-input-placeholder {
    color: #999;
  }

  .search > button {
    background: transparent;
    width: 35px;
    height: 35px;
    margin-top: 1px;
    border: none;
    cursor: pointer;
  }

  /*右侧*/

  .group-right {
    width: 880px;
    height: 660px;
    float: left;
    background: #fff;
    box-sizing: border-box;
    padding: 0 30px 60px 30px;
  }

  .group-right > h6 {
    padding: 0;
    margin-top: 35px;
    width: 100%;
    float: left;
  }

  .group-right > h6 > img {
    width: 24px;
    float: left;
    margin-right: 10px;
    margin-top: 8px;
  }

  .group-right > h6 > .title-user {
    float: left;
    font-weight: bold;
    font-size: 20px;
  }

  .group-right > h6 > a {
    float: left;
    display: block;
    margin-left: 20px;
    margin-top: 6px;
  }

  .group-right > h6 > a > img {
    width: 16px;
    float: left;
    margin-top: 3px;
  }

  .group-right > h6 > a > .edit-txt {
    color: #999;
    float: left;
    margin-left: 5px;
  }

  .right-select {
    width: 100%;
    float: left;
    margin: 20px 0;
  }

  .right-select > a {
    display: block;
    float: left;
    text-align: center;
    color: #999;
    border: 1px solid #c8cdd5;
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    margin-right: 15px;
    border-radius: 16px;
  }

  .right-select > .active {
    color: #fff;
    background: #4389f5;
    border: 1px solid #4389f5;
  }

  .mo {
    color: #222 !important;
  }
</style>

<style>
  .manage-table .el-tabs__header, .manage-table .el-tabs__content {
    margin: 15px 0;

  }

  .manage-table .el-tabs__content {
    overflow: scroll;
  }

  .manage-table .el-tabs--card > .el-tabs__header .el-tabs__item {
    border: none;
  }

  .manage-table .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }

  .manage-table .el-tabs--card > .el-tabs__header {
    border: none;
  }

  .manage-table .el-tabs__nav-scroll {
    background: #f5f7fa;
    border-radius: 20px;
  }

  .manage-table .el-tabs__item {
    text-align: center;
    width: 120px;
  }

  .manage-table .el-tabs__item.is-active {
    color: #fff;
    background: #4389f5;
    border-radius: 20px;
    width: 120px;
    font-weight: bold;
  }

  .el-tree {
    margin-top: 10px;
  }

  .el-tree-node__content {
    height: 40px !important;
    border-radius: 20px;
    margin: 2px 0;
  }

  .el-tree-node:focus > .el-tree-node__content {
    background: #4389f5 !important;
    color: #fff;
    font-size: 15px;
  }

  .addDept .el-dialog {
    margin-right: 0;
  }

  .addDept .el-dialog_ {
    text-align: center;
  }

  .addDept .el-input__inner {
    width: 290px;
  }

  .addDept .el-form-item__content {
    text-align: center;
  }

  .addDept .el-form-item__error {
    left: 35px;
  }

  .dept-transfer .el-transfer-panel {
  }

  .dept-transfer .el-transfer {
    margin: 0 auto;
    width: 500px;
  }

  .dept-title {
    height: 45px;
    line-height: 45px;
    background: #eeeeee;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 470px;
    margin: 20px 0;
  }

  .inner-title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  /*添加人员*/
  .addUser .el-dialog, .addDept .el-dialog, .editUser .el-dialog {
    float: right;
    height: 100%;
    margin-top: 0vh !important;
    margin: 0 auto 0px;
  }

  .addUser .el-input--prefix .el-input__inner {
    width: 360px;
  }

  .addUser .el-button + .el-button, .addUser .el-button--primary {
    border-radius: 20px;
  }

  .el-table__row {
    height: 40px;
  }

  .el-dialog {

  }

  .open-select {
    width: 290px;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
    text-align: left;
  }

  .open-span {
    display: inline-block;
    width: 80px;
    background: #dcdfe6;
    border-radius: 20px;
    line-height: 35px;
    height: 35px;
    text-align: center;
  }

  .editUser .el-input--prefix .el-input__inner {
    width: 360px;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #37414a;
  }
</style>
