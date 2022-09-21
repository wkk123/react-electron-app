
import React, { Component } from "react";
import './index.less';
import { Frame } from './../../components';
export default class information extends Component {
  render() {
    return (
      <div className="information">
        <Frame
          List={'列表'}
          Info={'内容'}
        />
      </div>
    );
  }
}