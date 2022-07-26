import React from 'react'
import { nanoid } from 'nanoid'
import PropsTypes from 'prop-types'
import './index.css'

export default class Header extends React.Component {
  static props = {
    addTodo: PropsTypes.func.isRequired
  }
  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('不能输入空')
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
