/* 
该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "../constant";
export const Increment = data => ({ type: INCREMENT, data })
export const Decrement = data => ({ type: DECREMENT, data })
//异步对象,异步action调用同步action
export const DecrementAsyn = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            console.log(data, time)
            dispatch(Decrement(data))
        }, time);
    }
}