
import React, { Component } from "react";
import { Button } from 'antd';
import './index.less';
import { Frame } from './../../components';
import {RouteComponentProps} from "react-router-dom";
import { getAddressBook } from './../../api/index';
interface IProps {}

type addressProps = IProps & RouteComponentProps;

interface IState {
  currentIndex: number,
  list:[
    {
      id: string,
      nickname: string,
      signature: string,
      province: string, //生成一个省份
      city: string, //生成一个市
    }
  ],
  userData:{
    id: string,
    nickname: string,
    signature: string,
    province: string, //生成一个省份
    city: string, //生成一个市
  }
}

class AddressList extends Component<addressProps,IState> {
  constructor(props: addressProps) {
    super(props);
    this.state={
      currentIndex: 0,
      list:[
        {
          id: '',
          nickname: '',
          signature: '',
          province: '', //生成一个省份
          city: '', //生成一个市
        }
      ],
      userData:{
        id: '',
        nickname: '',
        signature: '',
        province: '', //生成一个省份
        city: '', //生成一个市
      }
    }
  }

  componentDidMount(): void {
    this.addressLists();
  }

  // 获取通讯录列表
  addressLists=()=>{
    getAddressBook().then((res:any)=>{
      const { currentIndex } = this.state;
      if(res.status === 200){
        this.setState({
          list: res.data.list,
          userData: res.data.list[currentIndex],
        })
      }
    })
  }

  // 左侧通讯录列表
  addressList=()=>{
    const { list, currentIndex } = this.state;
    return(
      <ul className="list_box">
        {
          list.map((item,index)=>
            <li
              className={`list_item ${currentIndex === index && 'active'}`}
              key={item.id}
              onClick={()=>{
                this.itemUser(item,index)
              }}
            >
              <img className="item_img" src={require('@/assets/images/portrait.png')} alt="" />
              <h3 className="item_name">{item.nickname}</h3>
            </li>
          )
        }
      </ul>
    )
  }

  // 点击某一个用户
  itemUser(data:any,num:number){
    this.setState({
      userData: data,
      currentIndex: num
    })
  }

  // 用户详情
  userInfo=()=>{
    const{ userData:{ nickname, signature, province, city }} = this.state;
    return(
      <div className="userInfo_box">
        <div className="userInfo_content">
          <div className="content_item">
            <h3 className="item_text">{nickname}</h3>
            <h3 className="item_text">{signature}</h3>
          </div>
          <div className="content_item">
            <h3 className="item_text">{province} {city}</h3>
          </div>
          <div className="content_item">
            <Button className="item_btn">发送消息</Button>
          </div>
        </div>
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