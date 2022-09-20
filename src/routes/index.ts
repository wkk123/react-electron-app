// 导入路由组件
// import Login from './../Login';
// import layout from '../pages/layout';
import Information from './../pages/information';
import AddressList from './../pages/addressList';
// 导入路由管理工具
import { RouteConfig } from 'react-router-config'
 
const routes:RouteConfig = [
  {
    path:'/information',
    exact:true,
    component: Information
  },
  {
    path:'/addressList',
    exact:true,
    component: AddressList
  },
]

 
export default routes;