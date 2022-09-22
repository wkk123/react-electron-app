
import React, { Component } from "react";
import './index.less';
import { Frame } from './../../components';
import {RouteComponentProps} from "react-router-dom";
interface IProps {}

type addressProps = IProps & RouteComponentProps;

interface IState {}

class AddressList extends Component<addressProps,IState> {
  constructor(props: addressProps) {
    super(props);
    this.state={

    }
  }

  // 左侧通讯录列表
  addressList=()=>{
    return(
      <ul className="list_box">
        <li className={`list_item ${true&&'active'}`}>
          <img className="item_img" src={require('@/assets/images/portrait.png')} alt="" />
          <h3 className="item_name">{'昵称'}</h3>
        </li>
      </ul>
    )
  }

  // 用户详情
  userInfo=()=>{
    return(
      <div className="userInfo_box">

      </div>
    )
  }


  render() {
    return (
      <div className="addressList">
        <Frame
          List={this.addressList()}
          Info={this.userInfo()}
        />
      </div>
    );
  }
}

export default AddressList;