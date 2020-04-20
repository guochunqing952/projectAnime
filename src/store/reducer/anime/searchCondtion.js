import { actionTypes } from "../../action/anime/searchCondition"


//控制查询条件数据的reducer
const initialState = {
  q: "fate", //查询条件
  genre: 1,
  page: 1,
  limit: 7
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.change:
      return {
        ...state,
        ...action.payLoad
      };
    default:
      return state;
  }
}
