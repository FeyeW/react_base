import React, { Component } from 'react';
import store from '../../redux/store';
import { createDecrementAction, createIncrementAction } from '../../redux/count_action';

class Index extends Component {


    componentDidMount = () => {
        //检测redux中的状态的变化，只要变化，就调用render
        store.subscribe(() => {
            this.setState({})
        })
    }

    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))
    }

    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    decrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch(createDecrementAction(value * 1))
        }, 500)
    }


    render() {

        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>&nbsp;
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>纯➕</button>&nbsp;
                <button onClick={this.decrement}>纯➖</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数➕</button>&nbsp;
                <button onClick={this.decrementAsync}>异步➖</button>&nbsp;
            </div>
        );
    }
}

export default Index;
