import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'tom', age: 13 }]

export default function personRedux(preState = initState, action) {
    const { type, data } = action
    console.log(preState, "sdadad");
    switch (type) {
        case ADD_PERSON:
            const result = [data, ...preState];
            return result

        default:
            return preState
    }
}