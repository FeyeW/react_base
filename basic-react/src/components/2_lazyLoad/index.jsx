import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./home'))
const About = lazy(() => import('./about'))

export default function App() {
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
                        <NavLink activeClassName='active' className="list-group-item" to="/about">About</NavLink>
                        <NavLink activeClassName='active' className="list-group-item" to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            <Suspense fallback={<h1>Loading....</h1>}>
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} /></Suspense>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

