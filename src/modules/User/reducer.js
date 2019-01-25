import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { editProfile } from "./actions";

const userInfo = handleActions(
  {
    [editProfile]: (_state, action) => action.payload
  },
  JSON.parse(window.localStorage.getItem("userInfo"))
);

export default combineReducers({ userInfo });
