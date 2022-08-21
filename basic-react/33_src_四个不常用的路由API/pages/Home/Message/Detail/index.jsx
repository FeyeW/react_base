import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    /* 或者params参数 */
    /* const { id, title, content } = useParams()
    const x = useMatch('/home/message/detail/:id/:title/:content')
    console.log(x) */

    //接收search参数
    /*     const [search, setSearch] = useSearchParams()
        const id = search.get('id')
        const title = search.get('title')
        const content = search.get('title')
        const x = useLocation()
        console.log(x) */

    //接收state参数
    const { state: { id, title, content } } = useLocation()
    return (
        <ul>
            <li>消息编号:{id}</li>
            <li>消息标题:{title}</li>
            <li>消息内容:{content}</li>
            <hr />
            {/*   <button onClick={() => setSearch('id=008&title=123&vontent=456')}>更新数据</button> */}
        </ul>
    )
}

