import React, { Component } from 'react'

//声明获取Context
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {
    state = {
        name: 'tom',
        age: 18
    }
    render() {
        const { name, age } = this.state
        return (
            <div>
                <h1 style={{ background: 'red', height: '400px' }}>我是A组件，名字是{name},年龄是{age}
                    {/* 传值给B组件和B组件的子组件 */}
                    <Provider value={{ name, age }}>
                        <B state={this.state} />
                    </Provider>

                </h1>

            </div>
        )
    }
}

class B extends Component {

    render() {
        const { name, age } = this.props.state
        return (
            <div>
                <h1 style={{ background: 'blue', height: '320px' }}>我是B组件，接收到A的名字是{name},年龄是{age}
                    <C /></h1>

            </div>
        )
    }
}

/* class C extends Component {
    //声明接收context
    static contextType = MyContext
    render() {
        const { name, age } = this.context
        return (
            <div>
                <h1 style={{ background: 'green', height: '230px' }}>我是C组件，接收到A的名字是{name},年龄是{age}</h1>
            </div>
        )
    }
} */

//函数式组件的使用
function C() {

    return (
        <div>
            <h1 style={{ background: 'green', height: '230px' }}>我是C组件，接收到A的名字是:
                <Consumer>
                    {
                        value => `${value.name},年龄是：${value.age}`
                    }
                </Consumer>
            </h1>
        </div>
    )
}





