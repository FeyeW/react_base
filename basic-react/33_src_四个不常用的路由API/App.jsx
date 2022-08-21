import React from 'react'
import { NavLink, useRoutes, useInRouterContext, useNavigationType, useOutlet, useResolvedPath } from 'react-router-dom'
import routes from './routes';


import Head from './components/Head'

export default function App() {
    function computedClass({ isActive }) {
        return isActive ? 'list-group-item active' : 'list-group-item'
    }
    const route = useRoutes(routes)

    //如果组件在Router的上下文呈现，则useInRouterContext()返回的true，否则返回false
    console.log(useInRouterContext())
    //判断页面的三种类型：pop（刷新页面），push，replace
    console.log(useNavigationType())
    //用来呈现当前组件中渲染的嵌套路由 未渲染返回值为null
    console.log(useOutlet())
    //解析路由 其中包含：path，search，hash值
    console.log(useResolvedPath())

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

