//引入Count的UI组件
import CountUI from '../../components/Count'
import { createIncrementAction, createDecrementAction, createDecrementAsynAction } from '../../redux/count_action'

//引入connect用于连接UI组件和redux
import { connect } from 'react-redux'

/* react-redux的基本使用
  1.明确两个概念：
   1）UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
   2）容器组件：负责和redux通信，将结果交给UI组件
  2.如何创建一个容器组件——靠react-redux的connect函数
    connect(mapStateProps,mapDispatchToProps)(UI组件)
    -mapStateProps：映射状态，返回值是一个对象
    -mapDispatchToProps：映射操作状态的方法，返回值是一个对象
  3.备注：容器组件中的store是靠props传进去的，而不是在容器中直接引入
*/
//使用connect()()创建并暴露出一个Count的容器组件

function mapStateProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: numer => dispatch(createDecrementAction(numer)),
        async: (number,time) => dispatch(createDecrementAsynAction(number,time))
    }
}
export default connect(mapStateProps, mapDispatchToProps)(CountUI) 