import React from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends React.Component {
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false }
        ]
    }
    //添加一个函数，用于接收List子组件传递数据
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos, ...todos })
    }
    //添加一个函数，用于接收Item组件的数据
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, done: done }
            }
            else return todo
        })
        this.setState({ todos: newTodos })
    }

    //用于删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer />
                </div>
            </div>
        )
    }
}

