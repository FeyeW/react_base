/* 
1.该文件是用于创建一个Count组件服务的reducer，reducer的本质就是一个函数
2.reducer函数会接到两个参数，分别为：之前的状态（preState）和动作对象（action）
*/
import { INCREMENT, DECREMENT } from "../constant";

export default function countRducer(preState, action) {
    //从state对象中获取对象：type、data
    const { type, data } = action
    //根据type决定如何加工
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data

        default:
            return 0
    }
}