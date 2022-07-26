import React from 'react'
import { Link, Route } from 'react-router-dom'

import About from './component/About/About'
import Home from './component/Home/Home'

export default function App() {
    return (
        <div>
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

