import React, { Component } from 'react'

export default class index extends Component {
    state = {
        hasError:''
    }

    /* Error boundary：
      用来捕获后代组件错误，渲染出备用页面,适用于生产阶段
    特点：
      只能捕获后代组件生命周期的错误
    */
    static getDerivedStateFromErrorp(error)
    {
        console.log(error)
        return {
            hasError:true
        }
    }
    componentDidCatch(error, info)
    {
        console.log('')
    }
  render() {
    return (
      <div>index</div>
    )
  }
}
