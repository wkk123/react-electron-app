
import React, { Component } from "react";
import './index.less';
import { withRouter, RouteComponentProps } from "react-router-dom";
interface IProps {
  List: any,
  Info: any,
}

type FrameProps = IProps & RouteComponentProps;

interface IState {
}

class Frame extends Component<FrameProps,IState> {
  constructor(props: FrameProps) {
    super(props);
    this.state={

    }
  }
  render() {
    const { List, Info } = this.props;
    return (
      <div className="layout_content">
        <div className="layout_content_list">{List}</div>
        <div className="layout_content_info">{Info}</div>
      </div>
    );
  }
}

export default withRouter(Frame)