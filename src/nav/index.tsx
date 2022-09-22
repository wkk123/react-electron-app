import React, { Component } from "react";
import { GithubOutlined, MessageOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import { withRouter, RouteComponentProps } from "react-router-dom";
import './index.less';
interface IProps {}

type navProps = IProps & RouteComponentProps;

interface IState {
  currentIndex: number,
}


class nav extends Component<navProps,IState> {
  constructor(props:navProps) {
    super(props);
    this.state={
      currentIndex: 3,
    }
  }

  componentDidMount(): void {
    // console.log(this.props)
  }
  // 跳转页面
  goPage(num:number,page:string){
    this.setState({
      currentIndex: num
    },()=>{
      this.props.history.push(page);
    })
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="nav">
        <div className="nav_item">
          <GithubOutlined  className={`nav_icon ${false&&'active'}`} />
        </div>
        <div
          className="nav_item"
          onClick={()=>{
            this.goPage(1,'/information')
          }}
        >
          <MessageOutlined  className={`nav_icon ${currentIndex === 1&&'active'}`} />
        </div>
        <div
          className="nav_item"
          onClick={()=>{
            this.goPage(2,'/addressList')
          }}
        >
          <UserOutlined  className={`nav_icon ${currentIndex === 2&&'active'}`} />
        </div>
        <div
          className="nav_item"
          onClick={()=>{
            this.goPage(3,'/lottery')
          }}
        >
          <ShoppingOutlined  className={`nav_icon ${currentIndex === 3&&'active'}`} />
        </div>
      </div>
    );
  }
}

export default withRouter(nav)