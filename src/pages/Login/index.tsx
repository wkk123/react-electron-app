
import React, { Component } from "react";
import {RouteComponentProps} from "react-router-dom";
// import './index.less';
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
      </div>
    );
  }
}