
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


  render() {
    return (
      <div className="addressList">
        <Frame
          List={'列表'}
          Info={'内容'}
        />
      </div>
    );
  }
}

export default AddressList;