import React from 'react'
import PropsTypes from 'prop-types'
import './index.css'
import Item from '../Item'

export default class List extends React.Component {
  static props = {
    todos: PropsTypes.array.isRequired,
    updateTodo: PropsTypes.func.isRequired
  }
  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}
