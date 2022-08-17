/* 
该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "../constant";
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
//异步对象,异步action调用同步action
export const createDecrementAsynAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            console.log(data, time)
            dispatch(createDecrementAction(data))
        }, time);
    }
}