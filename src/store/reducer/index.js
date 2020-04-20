//创建最终的reducer
import anime from './anime/index'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'


export default combineReducers({
  anime,
  router: connectRouter(history)
})