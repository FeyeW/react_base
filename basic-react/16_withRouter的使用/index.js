//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
    <BrowserRouter forcerefresh={true}
    >
        <App />
    </BrowserRouter>
    , document.getElementById('root'))
