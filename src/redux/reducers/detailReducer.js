import { actionTypes } from "../actions/action";
const initialState={
  movies:[]
}

export default function detailReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MOVIES_DETAIL:
      return action.payload;
      default:
      {return state;}
  }
}
