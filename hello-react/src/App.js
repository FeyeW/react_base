import React from 'react'
import Hello from './component/Hello'
import Welcome from './component/Welcome'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>

        )
    }
}

