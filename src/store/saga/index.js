import { all } from 'redux-saga/effects'
import animeTask from './animeTask'


//saga任务
export default function* () {
  yield all([animeTask()]);
}
