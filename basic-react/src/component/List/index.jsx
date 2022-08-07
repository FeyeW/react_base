import React from 'react'

export default class List extends React.Component {

    render() {
        return (
            <div className="row" >
                {
                    this.props.users.map((usersObj) => {
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
