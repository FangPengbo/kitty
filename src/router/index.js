 
import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import List from '../components/List.vue'
const history = createWebHistory()
const router = createRouter({
    history, // 路由模式
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/detail',
        name: 'detail',
        component: Detail
      },
      {
        path: '/list',
        name: 'list',
        component: List
      }
    ]
  })
export default router