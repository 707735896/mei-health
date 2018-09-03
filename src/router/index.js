import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/home/home'
import Approval from '@/components/home/approval'
import Workflow from '@/components/home/workflow'
import Setpsd from '@/components/home/setpsd'
import Manage from '@/components/manage/manage'
import Attendance from '@/components/manage/attendance'
import Table from '@/components/manage/table'
import Workbench from '@/components/manage/workbench'
import Purchase from '@/components/purchase/purchase'
import Cost from '@/components/purchase/cost'
import Paid from '@/components/purchase/paid'
import Pr from '@/components/purchase/pr'
import Market from '@/components/market/market'
import Business from '@/components/business/business'
import Educational from '@/components/educational/educational'
import Task from '@/components/task/task'
import Documentation from '@/components/documentation/documentation'


Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }, {
      path: '/setpsd',
      name: 'Setpsd',
      component: Setpsd,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }, {
      path: '/approval',
      name: 'Approval',
      component: Approval,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/workflow',
      name: 'Workflow',
      component: Workflow,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }, {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      redirect: '/manage/table',
      children: [{
        path: '/manage/table',
        name: 'Table',
        component: Table
      },
        {
          path: '/manage/workbench',
          name: 'Workbench',
          component: Workbench,
        }
      ]
    },
    {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },{
      path: '/purchase',
      name: 'Purchase',
      component: Purchase,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/cost',
      name: 'Cost',
      component: Cost,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/paid',
      name: 'Paid',
      component: Paid,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
    ,
    {
      path: '/pr',
      name: 'Pr',
      component: Pr,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }, {
      path: '/market',
      name: 'Market',
      component: Market,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
    , {
      path: '/business',
      name: 'Business',
      component: Business,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
    , {
      path: '/educational',
      name: 'Educational',
      component: Educational,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
    , {
      path: '/task',
      name: 'Task',
      component: Task,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
    , {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
  ]
})


// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (this.isLogin) {  // 通过vuex state获取当前的token是否存在
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// })
export default router
