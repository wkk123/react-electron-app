
import React, { Component } from "react";
import './index.less';
import {RouteComponentProps} from "react-router-dom";

interface IProps {}

type lotteryProps = IProps & RouteComponentProps;

interface IState {
  awardIndex: any,
  awardList: any,
  underway: boolean,
}
export default class lottery extends Component<lotteryProps,IState> {
  private timerID: NodeJS.Timeout | undefined;
  constructor(props: lotteryProps) {
    super(props);
    this.state={
      awardIndex: null,
      awardList: [0,1,2,3,4,5,6,7,8],
      underway: false, //是否可以继续抽奖
    }
  }

  componentDidMount(): void {
  }

  // 点击抽奖
  awardBtn(){
    const { underway } = this.state;
    if(underway)return;
    this.setState({
      underway: true
    })
    // 抽奖次数
    const randomAward = Math.floor(Math.random()*9);
    this.awardFun(0,randomAward + 16); // 旋转两圈
  }

  // 抽奖函数
  awardFun(index:number,flag:number){
    let flagIndex = 0;
    let Time = 100;
    this.timerID = setInterval(()=>{
      const arrIndex = [0,1,2,5,8,7,6,3];
      this.setState({
        awardIndex: arrIndex[index],
      })
      if(flagIndex === flag){
        this.setState({ underway: false })
        clearInterval(this.timerID);
      }
      if(index === 7){
        index = 0;
      } else {
        index = index+1;
      }
      flagIndex = flagIndex + 1;
      Time = [100,2000,5000][Math.floor(flagIndex/8)];
    },Time)
  }

  
  render() {
    const { awardList, awardIndex } = this.state;
    return (
      <div className="lottery">
        <ul className="lottery_list">
          {
            awardList.map((item:number,index:number)=> {
              if(index !== 4){
                return <li
                  className={`award_item ${awardIndex === index &&'active'}`}
                  key={`award${index+1}`}
                >{item+1}</li>
              } else {
                return <li
                  className={`award_item award_Btn`}
                  key={`award${index+1}`}
                  onClick={()=>{
                    this.awardBtn()
                  }}
                >抽奖</li>
              }
            })
          }
        </ul>
      </div>
    );
  }
}