import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Help extends Component {

    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(2)
    }
    render() {
        return (
            <div className="page-header">
                React Router Demo
                <button onClick={this.back}>后退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>跳转</button>&nbsp;
            </div>
        );
    }
}
//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter的返回值是一个新组件
export default withRouter(Help);

