import React from 'react'
import './App.css'
import List from './component/List'
import Sreach from './component/Search'


export default class App extends React.Component {
    state = { users: [] }

    saveUsers = (users) => {
        this.setState({ users })
    }
    render() {
        const { users } = this.state
        return (
            <div className="container">
                <Sreach saveUsers={this.saveUsers} />
                <List users={users} />
            </div>
        )
    }
}
