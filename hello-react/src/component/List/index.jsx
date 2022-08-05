import React from 'react'
import './index.css'
import Item from '../Item'

export default class List extends React.Component {
  render() {
    return (
      <ul className="todo-main">
        <Item />
      </ul>
    )
  }
}
