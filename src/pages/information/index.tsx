
import React, { Component } from "react";
import './index.less';
import { Frame } from './../../components';
import {RouteComponentProps} from "react-router-dom";
import { getList } from './../../api/index';

interface IProps {}

type InfoProps = IProps & RouteComponentProps;

interface IState {
  currentIndex: number,
  userList: [
    {
      id: string,
      nickname: string,
      finalTime: string,
      content: any,
    }
  ],
  recordsList: [
    {
      id: string,
      nickname: string,
      index: string,
      role: string,
      callerTTS: string,
      calleeTTS: string,
    }
  ],
}
export default class information extends Component<InfoProps,IState> {
  constructor(props: InfoProps) {
    super(props);
    this.state={
      currentIndex: 0,
      userList:[
        {
          id: '',
          nickname: '',
          finalTime: '',
          content: [],
        }
      ],
      recordsList: [
        {
          id: '',
          nickname: '',
          index: '',
          role: '',
          callerTTS:'',
          calleeTTS:'',
        }
      ],
    }
  }

  componentDidMount(): void {
    getList().then((res:any)=>{
      if(res.status === 200){
        const { currentIndex } = this.state;
        this.setState({
          userList: res.data.list,
          recordsList: res.data.list[currentIndex].content,
        })
      }
    })
  }

  // 进入某一个详情
  itemUserInfo=(data:any,num:number)=>{
    this.setState({
      recordsList: data.content,
      currentIndex: num,
    })
  }

  // 消息列表
  infoList(){
    const { currentIndex, userList } = this.state;
    return(
      <div className="info_list">
        {
          userList.map((item,index)=>
            <div 
              className={`info_item ${currentIndex === index && 'active'}`}
              key={item.id}
              onClick={()=>{
                this.itemUserInfo(item,index)
              }}
            >
              <img className="item_img" src={require('../../assets/images/portrait.png')} alt="" />
              <div className="item_content">
                <div className="item_top">
                  <h3 className="item_name">{item.nickname}</h3>
                  <h3 className="item_time">{item.finalTime}</h3>
                </div>
                <div className="item_bottom">
                  <p className="item_lastinfo">{'这里是聊天的最后一句话，可为空可为空'}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }

  // 消息聊天窗
  chatWindow=()=>{
    const { recordsList } = this.state;
    return(
      <div className="window_box">
        <div className="window_title">{'昵称'}</div>
        <div className="window_list">
        {
          recordsList.map((item:any,index:number)=>{
            if(index%2===1){
              return <div className="chat_item left" key={item.id}>
                <img className="chat_img" src={require('./../../assets/images/ai.png')} alt="" />
                <div className="chat_text">{item.calleeTTS}</div>
              </div>
            } else {
              return <div className="chat_item right" key={item.id}>
                <div className="chat_text">{item.callerTTS}</div>
                <img className="chat_img" src={require('./../../assets/images/user.png')} alt="" />
              </div>
            }
          })
        }
        </div>
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