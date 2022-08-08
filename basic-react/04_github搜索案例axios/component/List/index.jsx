import React from 'react'

export default class List extends React.Component {

    render() {
        const { users, isFirst, isLoading, err } = this.props
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
