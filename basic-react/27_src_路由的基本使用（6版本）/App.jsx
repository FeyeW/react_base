import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

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
                            {/* Routers相当于Switch，用于路由匹配 */}
                            <Routes>
                                <Route path="/about" element={<About />}></Route>
                                <Route path="/home" element={<Home />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

