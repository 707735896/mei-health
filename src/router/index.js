import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home/Home'
import Setpsd from '@/components/Home/Setpsd'
import Manage from '@/components/manage/manage'
import Table from '@/components/manage/table'
import Workbench from '@/components/manage/workbench'
import Purchase from '@/components/purchase/purchase'
import Market from '@/components/market/market'
import Business from '@/components/business/business'
import Educational from '@/components/educational/educational'
import Task from '@/components/task/task'
import Documentation from '@/components/documentation/documentation'


Vue.use(VueRouter)

const router = new VueRouter({
    // mode: 'history',
    routes: [{
      path: '/login',
      name: 'Login',
      component: Login,
    },{
      path: '/home',
      name: 'Home',
      component: Home,
    },{
      path: '/setpsd',
      name: 'Setpsd',
      component: Setpsd,
    },{
      path: '/manage',
      name: 'Manage',
      component: Manage,
      redirect: '/manage/table',
      children:[{
        path: '/manage/table',
        name: 'Table',
        component: Table,
      },
      {
        path: '/manage/workbench',
        name: 'Workbench',
        component: Workbench,
      }
    ]
    },{
      path: '/purchase',
      name: 'Purchase',
      component: Purchase,
    },{
      path: '/market',
      name: 'Market',
      component: Market,
    }
    ,{
      path: '/business',
      name: 'Business',
      component: Business,
    }
    ,{
      path: '/educational',
      name: 'Educational',
      component: Educational,
    }
    ,{
      path: '/task',
      name: 'Task',
      component: Task,
    }
    ,{
      path: '/documentation',
      name: 'Documentation',
      component: Documentation,
    }
    ]
  })
  
  export default router