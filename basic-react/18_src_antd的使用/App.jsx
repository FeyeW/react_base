import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import { SearchOutlined } from '@ant-design/icons';


class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">123</Button >
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </div>
        );
    }
}

export default App;
