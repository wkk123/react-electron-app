
import React, { Component } from "react";
import './index.less';
import { Frame } from './../../components';

export default class addressList extends Component {
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