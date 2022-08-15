import React, { Component } from 'react';


class Count extends Component {



    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)

    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)

    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }

    decrementAsync = () => {
        const { value } = this.selectNumber
        this.props.asyn(value * 1,500)

    }


    render() {

        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>&nbsp;
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

export default Count;
