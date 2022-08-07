import React from 'react'

export default class List extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
                        <img alt='avator' src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        )
    }
}
