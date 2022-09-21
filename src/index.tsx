import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//引入rootReducer组件
import { Provider } from "react-redux";
import store from "./store/index";

// 导入登录组件
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    {/* provider组件将所有的组件包裹起来，用绑定属性的形式绑定store到组件中 */}
    <Provider store={store}>
      <Router>
        <Redirect path="/"  exact={true} to={{pathname: '/login'}} />
        <Route exact path='/login' component={Login} />
        <Switch>
          <App />
        </Switch>
      </Router>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
