

/* 
该文件专门用于暴露一个store对象，整个应用只有一个store
*/
import { createStore } from "redux";

//引入createStore，专门用于创建redux中最为核心的store对象
import countRducer from './count_reducer'

export default createStore(countRducer)