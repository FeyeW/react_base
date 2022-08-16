

/* 
该文件专门用于暴露一个store对象，整个应用只有一个store
*/
import { createStore, applyMiddleware } from "redux";

//引入createStore，专门用于创建redux中最为核心的store对象
import countRducer from './reducer/count'
//中间件的使用 用于增加异步的redux功能
import thunk from 'redux-thunk'

export default createStore(countRducer, applyMiddleware(thunk))