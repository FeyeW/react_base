import React from 'react'
import './index.css'

export default class Footer extends React.Component {
  //全选todos
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  handleCheckAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleCheckAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
