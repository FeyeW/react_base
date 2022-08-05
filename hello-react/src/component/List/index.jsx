import React from 'react'
import './index.css'
import Item from '../Item'

export default class List extends React.Component {
  render() {
    const { todos } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} />
          })
        }
      </ul>
    )
  }
}
