//动漫查询结果改变的action类型

export const actionTypes = {
  setAnime: 'SETANIME',
  fetchAnimeData: 'FETCHANIMEDATA'
}

//根据新的查询结果，产生一个action
export function setAnime(arr) {
  return {
    type: actionTypes.setAnime,
    payLoad: arr
  }
}

//获取查询结果
export function fetchAnimeData() {
  return {
    type: actionTypes.fetchAnimeData
  }
}

