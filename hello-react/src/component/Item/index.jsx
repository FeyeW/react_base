import React from 'react'
import './index.css'

export default class Item extends React.Component {
  state = { mouse: false }

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
      console.log(flag)
    }
  }
  render() {
    const { name, done } = this.props
    const { mouse } = this.state

    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" tyle={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
