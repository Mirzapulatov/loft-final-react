import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  loginRequest,
  loginSuccessRequest,
  loginFailureRequest,
  logout
} from "./actions";

const isAuthorized = handleActions(
  {
    [loginRequest]: () => false,
    [loginSuccessRequest]: () => true,
    [loginFailureRequest]: () => false,
    [logout]: () => false
  },
  JSON.parse(window.localStorage.getItem("isAuthorized"))
);

export default combineReducers({ isAuthorized });
