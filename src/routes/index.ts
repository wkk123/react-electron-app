// 导入路由组件
import Login from '../pages/Login';
import Home from '../pages/Home';
// 导入路由管理工具
import {RouteConfig} from 'react-router-config'
 
const routes:RouteConfig = [
  {
    path:'/',
    exact:true,
    component:Login
  },
  {
    path:'/home',
    exact:true,
    component:Home
  },
]
 
export default routes;