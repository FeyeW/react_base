import React, { Component } from 'react'

//声明获取Context

export default class A extends Component {
    state = {
        name: 'tom',
        age: 18
    }
    render() {
        const { name, age } = this.state
        return (
            <div>
                <h1 style={{ background: 'red', height: '400px' }}>我是A组件，名字是:{name},年龄是:{age}
                    {/* 定义插槽，并传递数据age */}
                    <B state={this.state} render={(age) => <C age={age} />} >数据1</B>

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
                <h1 style={{ background: 'blue', height: '320px' }}>我是B组件，接收到A的年龄是:{name}<hr />
                    {/* C组件在B组件的插槽 */}
                    {this.props.render(age)}
                    {this.props.children}

                </h1>
            </div>
        )
    }
}

class C extends Component {

    render() {
        return (
            <div>
                <h1 style={{ background: 'green', height: '230px' }}>我是C组件，接收到A的年龄是:{this.props.age} {/* 直接获取插槽传入的数据 */}
                </h1>
            </div>
        )
    }

}





