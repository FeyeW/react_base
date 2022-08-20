import React, { Component } from 'react'

export default class Demo extends Component {
    state = ({ count: 0 })

    add = () => {
        //对象式setState：异步执行，第一个参数为状态改变对象，第二参数为可选的回调函数，在更新状态完毕也就是render结束后才会被调用，新状态不依赖于原状态
        /*        const { count } = this.state
               this.setState({ count: count + 1 }, () => {
                   console.log(count)
               }) */
        //函数式setState：是setState的语法糖，新状态依赖原状态
        this.setState(state => ({ count: state.count + 1 }))
    }
    render() {
        return (
            <div>
                <h1>当前求值为:{this.state.count}</h1>
                <button onClick={this.add}>点我加1</button>
            </div>
        )
    }
}
