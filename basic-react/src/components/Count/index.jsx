import React, { Component } from 'react';
import store from '../../redux/store';

class Index extends Component {
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
            </div>
        );
    }
}

export default Index;
