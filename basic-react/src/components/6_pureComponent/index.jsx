/* 
Component的2个问题
1.只要执行setState(),即使不改变状态数据，组件也会重新render()
2.只当前组件重新render(),就会自动重新render子组件==》效率低
  原因：Component中的shouldComponentUpdate默认为true
  解决：Component与shouldComponentUpdate搭配使用，将Component变为PureComponent
*/
import React, { PureComponent } from 'react'

//声明获取Context
const MyContext = React.createContext()
const { Provider } = MyContext

export default class A extends PureComponent {
    state = {
        name: 'tom',
        age: 18
    }

    /* 在Component组件中使用
        shouldComponentUpdate(nextProps, nextState)
        {
            return !this.state.name===nextState.name
        } */

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

class B extends PureComponent {

    render() {
        const { name, age } = this.props.state
        return (
            <div>
                <h1 style={{ background: 'blue', height: '320px' }}>我是B组件，接收到A的名字是{name},年龄是{age}</h1>

            </div>
        )
    }
}







