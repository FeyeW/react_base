import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'


export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' }
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* params传参 */}
                                    {/*  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* search传参数 */}
                                    {/* {<Link to={`/home/message/detail/?id=${msgObj.id}&${msgObj.title}`}>{msgObj.title}</Link>} */}

                                    {/* 向路由传递state参数 */}
                                    {/* 加入replace模式不会留下痕迹，一般默认为push模式 */}
                                    <Link replace to={{ pathname: '/home/message/detail/', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                                </li>

                            )

                        })
                    }

                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* search、state参数无需声明接收，正常路由即可 */}
                <Route path={'/home/message/detail'} component={Detail}></Route>
            </div>
        )
    }
}
