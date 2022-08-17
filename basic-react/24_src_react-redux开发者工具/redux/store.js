

/* 
该文件专门用于暴露一个store对象，整个应用只有一个store
*/
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";

//引入createStore，专门用于创建redux中最为核心的store对象
import countReducer from './reducer/count'
import personReducer from './reducer/person'
//合并Reducer
//中间件的使用 用于增加异步的redux功能
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))