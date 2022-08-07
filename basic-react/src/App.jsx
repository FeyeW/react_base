import React from 'react'
import './App.css'
import List from './component/List'
import Sreach from './component/Search'


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Sreach />
                <List />
            </div>
        )
    }
}
