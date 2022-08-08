import React from 'react'
import PubSub from 'pubsub-js'

export default class List extends React.Component {
    state = {
        users: [],
        //判断请求
        isFirst: true,
        isLoading: false,
        err: ''
    }
    componentDidMount() {
        this.token = PubSub.subscribe('data', (_, stateObj) => {
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row" >
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading....</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((usersObj) => {
                                    return (
                                        <div className="card" key={usersObj.id}>
                                            <a href={usersObj.html_url} target="_blank" rel="noreferrer">
                                                <img alt='avatar' src={usersObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{usersObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
