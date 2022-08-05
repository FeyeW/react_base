import React from 'react'
import './index.css'

export default class Item extends React.Component {
  state = { mouse: false }

  //鼠标移入移除效果
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
      console.log(flag)
    }
  }
  //checked某个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
      console.log(event.target.checked)
    }
  }
  handleDelete = (id) => {
    if (window.confirm('确定删除嘛？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state

    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
