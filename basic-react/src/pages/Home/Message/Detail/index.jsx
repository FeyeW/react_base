import React from 'react'
//被弃用的截取search方法,因此获得得到的是urlencoded编码字符串
//import qs from 'querystring'

const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，世界' },
    { id: '03', content: '你好，再见' }
]

export default class Detail extends React.Component {

    render() {
        /* 接收params参数 */
        /*  const { id, title } = this.props.match.params */

        //接收search参数
        /*  const { search } = this.props.location.search
         const { id, title } = qs.parse(search.slice(1)) */

        //接收state参数
        const { id, title } = this.props.location.state || {}

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}
        return (

            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
