import React from 'react'
import { Link, Route, Routes, Navigate, NavLink } from 'react-router-dom'

import About from './component/About/About'
import Home from './component/Home/Home'

export default function App() {
    /* NavLink中isActive函数形式的点击判断ß */
    function computedClassName({ isActive }) {
        return isActive ? 'list-group-item active' : 'list-group-item'
    }
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className={computedClassName} to="/about">About</NavLink>
                        <NavLink className={computedClassName} to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* Routers相当于Switch，用于路由匹配 */}
                            <Routes>
                                <Route path="/about" element={<About />}></Route>
                                <Route path="/home" element={<Home />}></Route>
                                {/* 重定向 */}
                                <Route path='/' element={<Navigate to="/about" replace={true} />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

