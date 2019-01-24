import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import {
  loginRequest,
  loginSuccessRequest,
  loginFailureRequest,
  logout
} from "../actions/auth";

import { editProfile } from "../actions/profile";

const isAuthorized = handleActions(
  {
    [loginRequest]: () => false,
    [loginSuccessRequest]: () => true,
    [loginFailureRequest]: () => false,
    [logout]: () => false
  },
  JSON.parse(window.localStorage.getItem("isAuthorized"))
);

const userInfo = handleActions(
  {
    [editProfile]: (_state, action) => action.payload
  },
  JSON.parse(window.localStorage.getItem("userInfo"))
);

export default combineReducers({ isAuthorized, userInfo });
