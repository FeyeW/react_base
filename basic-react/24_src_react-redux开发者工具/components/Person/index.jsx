import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/action/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        //将更新数据往共享的reducer进行保存
        this.props.personNumber(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        console.log(this.props, 'person')
        return (
            <div>
                <h4>上方的总数为{this.props.count}</h4>
                <input type="text" placeholder='请输入名字' ref={c => this.nameNode = c} />&nbsp;
                <input type="text" placeholder='请输入年龄' ref={c => this.ageNode = c} />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        //渲染最新数据
                        this.props.person.map((p) => {
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

//连接action 获取状态值，命名为person，
//连接reducer，命名为add
export default connect(
    state => ({ person: state.person, count: state.count }),
    {
        personNumber: createAddPersonAction
    }


)(Person)
