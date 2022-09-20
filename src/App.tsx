import React from 'react';
// 引入routes组件
import routes from "./routes";
// 引入包管理工具
import { renderRoutes, RouteConfig } from "react-router-config";


function App() {
  return (
    <div className="App">
      {/* 设置routes的类型为RouteConfig[]，否则报错 */}
      {renderRoutes(routes as RouteConfig[])}
    </div>
  );
}

export default App;
