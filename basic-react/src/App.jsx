import React from 'react'
import { Link, Route } from 'react-router-dom'

/* 
路由组件与一般组件
1.写法不同
  一般组件：<Demo/>
  路由组件:<Route path="/demo" component={Demo}/>
2.存放的位置不同
  一般组件:coponents
  路由组件:pages
3.接收到props不同
  一般组件：写标签时传递了什么，就能收到什么
  路由组件:接收到三个固定的属性
     history:
       go:f go(n)
       goBack:f goBack(n)
       goForward:f goForward(n)
       psuh:f psuh(n)
       replace:f replace(n)
     location:
       pathname:"/about"
       search:""
       state:undefined
     match:
       params:{}
       path:"/about"
       url:"about"
*/
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Help from './components/Help'

export default function App() {
    return (
        <div>
            <Help />
            <div class="row">
                <div class="col-xs-offset-2 col-xs-8">
                    <div class="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2 col-xs-offset-2">
                    <div class="list-group">
                        <Link class="list-group-item active" to="/about">About</Link>
                        <Link class="list-group-item" to="/home">Home</Link>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="panel">
                        <div class="panel-body">
                            <Route path="/about" component={About}></Route>
                            <Route path="/home" component={Home}></Route>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

