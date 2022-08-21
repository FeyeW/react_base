import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'

const Message = () => {
    const [message] = useState([
        { id: '001', title: '消息1', content: '你好 世界' },
        { id: '002', title: '消息2', content: 'holle world' },
        { id: '003', title: '消息3', content: '你好 中国' },
    ])
    return (
        <div>
            <ul>
                {
                    message.map((m) => {
                        return (
                            <li key={m.id}>
                                { /* 传递params参数占位符  */}
                                {/*  <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link> */}

                                {/* 传递search参数占位符 */}
                                {/*   <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link> */}

                                {/* state传递参数占位符 */}
                                <Link to='detail' state={
                                    {
                                        id: m.id,
                                        title: m.title,
                                        content: m.content
                                    }
                                }>{m.title}</Link>
                            </li>)
                    })
                }
            </ul>
            <Outlet />
        </div>
    );
}

export default Message;
