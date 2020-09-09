import { actionTypes } from "../actions/action";
const initialState={
  movies:[]
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MOVIES:
      {console.log(action.payload);return {movies:action.payload}}
      default:
      {console.log("buraya giriyo");return state;}
  }
}
