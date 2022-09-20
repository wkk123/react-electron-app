
import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import './index.less';
interface IProps {
  children: any
}

type layoutProps = IProps & RouteComponentProps;

interface IState {

}

class Layout extends Component<layoutProps,IState> {
  constructor(props: layoutProps) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Layout)