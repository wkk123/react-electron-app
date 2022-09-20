
import React, { Component } from "react";
import {RouteComponentProps} from "react-router-dom";
interface IProps {}

type HomeProps = IProps & RouteComponentProps;

interface IState {}

export default class Login extends Component<HomeProps,IState> {
  constructor(props: HomeProps) {
    super(props);
    this.state={
      
    }
  }
  loginBtn(){
    this.props.history.push("/home");
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <h3 className="center"> Login页面</h3>
          <p>欢迎来到首页</p>
          <button
            onClick={()=>{
              this.loginBtn()
            }}
          >登录</button>
        </div>
      </div>
    );
  }
}