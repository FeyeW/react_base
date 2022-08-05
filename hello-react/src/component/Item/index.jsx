import React from 'react'
import './index.css'

export default class Item extends React.Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>yyyy</span>
        </label>
        <button className="btn btn-danger" tyle={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}
