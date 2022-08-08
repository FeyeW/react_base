import React from 'react'
import PubSub from 'pubsub-js'

export default class Sreach extends React.Component {
  sreach = async () => {
    //获取用户的输入（连续结构赋值和重命名）
    const { keyWordElement: { value: keyWord } } = this
    PubSub.publish('data', { isFirst: false, isLoading: true })
    // this.props.updateAppState({ isFirst: false, isLoading: true })
    //发起网络请求
    /* axios.get(`/search/users?q=${keyWord}`).then(
      response => { PubSub.publish('data', { isLoading: false, users: response.data.items }); },
      error => { PubSub.publish('data', { isLoading: false, error: error.message }); }
    ) */
    //使用fetch发送网络请求（优化）
    try {
      const response = await fetch(`/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('data', { isLoading: false, users: data.items })
    } catch (error) {
      PubSub.publish('data', { isLoading: false, error: error.message })
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;<button onClick={this.sreach}>Search</button>
        </div>
      </section>
    )
  }
}
