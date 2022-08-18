import React from 'react'
import ReactDOM from 'react-dom'

const Index = () => {
    /* 
     State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
     参数：第一次初始化指定的值在内部做缓存
     返回值：包含2个元素的数组，第一个为内部状态值，第二个为更新的状态值的函数
     */
    const [count, setCount] = React.useState(0)
    /* 
    EffectHook可以让你在函数组件中执行副作用操作（用于模拟类组件中的声明钩子）

    */
    const [name, setName] = React.useState('tom')
    /* 
    RefHook可以在函数组件中存储/查找组件内的标签或者任意其他数据
     */
    const myRef = React.useRef()
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => { //在组件卸载前执行
            clearInterval(timer)
        }
    }, [])//如果指定的是[],回调函数只会在第一次render()后执行

    function add() {
        //setCount()
        setCount(count + 1)
    }
    function change() {
        setName('jack')
    }
    function show() {
        alert(myRef.current.value)
    }
    function unMount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为：{count}</h2>
            <h2>当前名字为：{name}</h2>
            <button onClick={add}>加1</button>
            <button onClick={change}>改名</button>
            <button onClick={unMount}>卸载</button>
            <button onClick={show}>弹出提示</button>
        </div>
    );
}

export default Index;

