import React, { Component } from 'react';
import Count from './components/Count'
import Preson from './components/Person'


class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <hr />
                <Preson />
            </div>
        );
    }
}

export default App;
