import React from 'react'
import './index.css'

export default class Item extends React.Component {
  render() {
    const { name, done } = this.props
    console.log(done)
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" tyle={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}
