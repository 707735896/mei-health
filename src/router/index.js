import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/home/home'
import Approval from '@/components/home/approval'
import Workflow from '@/components/home/workflow'
import Setpsd from '@/components/home/setpsd'
import Manage from '@/components/manage/manage'
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
    },{
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/setpsd',
    name: 'Setpsd',
    component: Setpsd,
  }, {
    path: '/approval',
    name: 'Approval',
    component: Approval
  },
    {
      path: '/workflow',
      name: 'Workflow',
      component: Workflow
    }, {
      path: '/manage',
      name: 'Manage',
      component: Manage,
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
    }, {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase,
    },
    {
      path: '/cost',
      name: 'Cost',
      component: Cost
    },
    {
      path: '/paid',
      name: 'Paid',
      component: Paid,
    }
    ,
    {
      path: '/pr',
      name: 'Pr',
      component: Pr,
    }, {
      path: '/market',
      name: 'Market',
      component: Market,
    }
    , {
      path: '/business',
      name: 'Business',
      component: Business,
    }
    , {
      path: '/educational',
      name: 'Educational',
      component: Educational,
    }
    , {
      path: '/task',
      name: 'Task',
      component: Task,
    }
    , {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation,
    }
  ]
})

export default router
