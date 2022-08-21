import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes';


import Head from './components/Head'

export default function App() {
    function computedClass({ isActive }) {
        return isActive ? 'list-group-item active' : 'list-group-item'
    }
    const route = useRoutes(routes)
    return (
        <div>
            <Head />
            
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className={computedClass} to="/about">About</NavLink>
                        {/* end结束高亮 */}
                        <NavLink className={computedClass} end to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {route}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

