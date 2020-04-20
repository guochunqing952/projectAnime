//用于创建仓库，并导出
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootTask from './saga/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import history from './history'

const routerMid = routerMiddleware(history)

const sagaMid = createSagaMiddleware();//创建一个saga中间件
const store = createStore(reducer, composeWithDevTools(applyMiddleware(routerMid, sagaMid, logger)));
console.log(store.getState());

sagaMid.run(rootTask);//启动saga任务
export default store;