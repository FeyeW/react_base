import React, { Component } from 'react'

export default class index extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name, age)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder='请输入名字' ref={c => this.nameNode = c} />&nbsp;
                <input type="text" placeholder='请输入年龄' ref={c => this.ageNode = c} />&nbsp;
                <button onClick={this.addPerson}>添加</button>
            </div>
        )
    }
}
