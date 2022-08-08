import React from 'react'
import './App.css'
import List from './component/List'
import Sreach from './component/Search'


export default class App extends React.Component {
    state = {
        users: [],
        //判断请求
        isFirst: true,
        isLoading: false,
        err: ''
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Sreach updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}
