//引入Count的UI组件
import CountUI from '../../components/Count'
//引入connect用于连接UI组件和redux
import { connect } from 'react-redux'

//使用connect()()创建并暴露出一个Count的容器组件
export default connect()(CountUI)