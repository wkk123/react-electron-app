
import React, { Component } from "react";
import './index.less';
import { Frame } from './../../components';
import {RouteComponentProps} from "react-router-dom";
import { getProfileList } from './../../api/index';

interface IProps {}

type InfoProps = IProps & RouteComponentProps;

interface IState {
  currentIndex: number,
  userList: [
    {
      name: string,
      time: string,
      lastInformation: string,
    }
  ],
}
export default class information extends Component<InfoProps,IState> {
  constructor(props: InfoProps) {
    super(props);
    this.state={
      currentIndex: 1,
      userList:[
        {
          name: '',
          time: '',
          lastInformation: '',
        }
      ],
    }
  }

  componentDidMount(): void {
    getProfileList().then(res=>{
      console.log('res', res)
    })
  }

  // 进入某一个详情
  itemUserInfo=(num:number)=>{
    this.setState({
      currentIndex: num
    })
  }

  // 消息列表
  infoList(){
    const { currentIndex } = this.state;
    return(
      <div className="info_list">
        <div 
          className={`info_item ${currentIndex === 0 && 'active'}`}
          onClick={()=>{
            this.itemUserInfo(0)
          }}
        >
          <img className="item_img" src={require('../../assets/images/portrait.png')} alt="" />
          <div className="item_content">
            <div className="item_top">
              <h3 className="item_name">{'昵称'}</h3>
              <h3 className="item_time">{'2022-09-21'}</h3>
            </div>
            <div className="item_bottom">
              <p className="item_lastinfo">{'这里是聊天的最后一句话，可为空可为空'}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 消息聊天窗
  chatWindow=()=>{
    return(
      <div className="window_box">
        <div className="window_title">{'昵称'}</div>
        <div className="window_list"></div>
        <div className="window_text"></div>
      </div>
    )
  }
  render() {
    return (
      <div className="information">
        <Frame
          List={this.infoList()}
          Info={this.chatWindow()}
        />
      </div>
    );
  }
}