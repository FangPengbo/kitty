 
import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
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
      }
    ]
  })
export default router