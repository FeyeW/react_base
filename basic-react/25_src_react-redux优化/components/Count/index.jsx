import React from 'react';
//引入Count的UI组件
import { Increment, Decrement, DecrementAsyn } from '../../redux/action/count'

//引入connect用于连接UI组件和redux
import { connect } from 'react-redux'

class Count extends React.Component {



    increment = () => {
        const { value } = this.selectNumber
        this.props.Increment(value * 1)

    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.Decrement(value * 1)

    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.Increment(value * 1)
        }
    }

    decrementAsync = () => {
        const { value } = this.selectNumber
        this.props.DecrementAsyn(value * 1, 500)

    }


    render() {
        console.log(this.props.count, "kkkkkk");
        return (
            <div>
                <h1>当前求和为:{this.props.count},下面的总人数为:{this.props.person.length}</h1>&nbsp;
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>纯➕</button>&nbsp;
                <button onClick={this.decrement}>纯➖</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数➕</button>&nbsp;
                <button onClick={this.decrementAsync}>异步➖</button>&nbsp;
            </div>
        );
    }
}

export default connect(
    state => ({ count: state.count, person: state.person })
    ,
    //mapDispatchToProps简写
    {
        Increment,
        Decrement,
        DecrementAsyn
    }

)(Count) 
