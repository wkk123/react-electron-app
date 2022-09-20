
import React, { Component } from "react";
import { Input, Button } from 'antd';
import {RouteComponentProps} from "react-router-dom";
import './index.less';
interface IProps {}

type HomeProps = IProps & RouteComponentProps;

interface IState {
  account: string,
  password: string,
}

export default class Login extends Component<HomeProps,IState> {
  constructor(props: HomeProps) {
    super(props);
    this.state={
      account: '77@qq.com',
      password: 'Ws123456',
    }
  }
  loginBtn(){
    this.props.history.push("/information");
  }

  render() {
    const { account, password } = this.state;
    return (
      <div className="login">
        <div className="login_content">
          <Input
            value={account} 
            placeholder='请输入账号'
            className="login_input"
            onChange={(event)=>{
              this.setState({
                account: event.target.value
              })
            }}
          />
          <Input
            value={password}
            placeholder='请输入密码'
            className="login_input"
            onChange={(event)=>{
              this.setState({
                password: event.target.value
              })
            }}
          />
          <Button
            type="primary"
            className="login_btn"
            onClick={()=>{
              this.loginBtn()
            }}
          >登录</Button>  
        </div>
      </div>
    );
  }
}