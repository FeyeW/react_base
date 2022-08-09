import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import About from './pages/About/About'
import Home from './pages/Home/Home'
import Help from './components/Help'
import MyNavLink from './components/MyNavLink'

export default function App() {
    return (
        <div>
            <Help />
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <MyNavLink to="/about">About</MyNavLink>
                        <MyNavLink to="/home">Home</MyNavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 
                           一般写在所有路由注册的下方，当素有路由都无法匹配时，跳转到Redirect指定的路由
                            */}
                            <Switch>
                                <Route exact path="/about" component={About}></Route>
                                <Route exact path="/home" component={Home}></Route>
                                <Redirect to="/about"></Redirect>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

