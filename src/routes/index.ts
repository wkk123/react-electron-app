// 导入路由组件
import Information from './../pages/information';
import AddressList from './../pages/addressList';
import Lottery from './../pages/lottery';
import Handle from './../pages/handle';
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
  {
    path:'/lottery',
    exact:true,
    component: Lottery
  },
  {
    path:'/handle',
    exact:true,
    component: Handle
  },
]

 
export default routes;