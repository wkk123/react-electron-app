import React from 'react';
// 引入routes组件
import routes from "./routes";
import './App.less';
// 引入包管理工具
import { renderRoutes, RouteConfig } from "react-router-config";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// 导入公共组件
import Nav from './nav';
import Layout from './layout';


function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Nav />
        {/* 设置routes的类型为RouteConfig[]，否则报错 */}
        <Layout>
          {renderRoutes(routes as RouteConfig[])}  
        </Layout>
      </div>  
    </ConfigProvider>
  );
}

export default App;
