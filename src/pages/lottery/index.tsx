
import React, { Component } from "react";
import './index.less';
import {RouteComponentProps} from "react-router-dom";

interface IProps {}

type lotteryProps = IProps & RouteComponentProps;

interface IState {

}
export default class lottery extends Component<lotteryProps,IState> {
  constructor(props: lotteryProps) {
    super(props);
    this.state={

    }
  }

  componentDidMount(): void {
  }

  
  render() {
    return (
      <div className="lottery">
        
      </div>
    );
  }
}