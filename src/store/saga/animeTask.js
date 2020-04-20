import { actionTypes, setAnime } from '../action/anime/searchResult'
import { takeEvery, put, call, select } from "redux-saga/effects"
import { searchAnime } from '../../data/anime'

function* fetchAnime() {
  console.log('123')
  const condition = yield select(state => state.anime.searchCondition);
  console.log(condition);
  const resp = yield call(searchAnime, condition.q, condition.genre, condition.page, condition.limit);
  yield put(setAnime(resp))
}

export default function* () {
  yield takeEvery(actionTypes.fetchAnimeData, fetchAnime);
  console.log('正在监听得到数据')
}