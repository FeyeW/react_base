import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'


export default function App() {
    /* NavLink中isActive函数形式的点击判断ß */
    function computedClassName({ isActive }) {
        return isActive ? 'list-group-item active' : 'list-group-item'
    }
    const Route = useRoutes(routes)
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
                            {Route}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

