import { actionTypes } from "../../action/anime/searchResult"

const initialState = {
  status: [],//查询后的数组
}

export default function setAnime(state = initialState, action) {
  switch (action.type) {
    case actionTypes.setAnime:
      return {
        ...state,
        status: action.payLoad

      };
    default:
      return state;
  }
}
