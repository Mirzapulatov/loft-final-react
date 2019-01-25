import { takeEvery, put, call } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccessRequest,
  loginFailureRequest,
  logout
} from "./actions";
import { login as loginRequestAPI } from "./api";

function* loginHandler(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(loginRequestAPI, username, password);
    if (response.success) {
      window.localStorage.setItem("isAuthorized", true);
      yield put(loginSuccessRequest());
    } else {
      yield put(loginFailureRequest());
    }
  } catch (error) {
    yield put(loginFailureRequest());
  }
}

function* logoutHandler(action) {
  yield window.localStorage.setItem("isAuthorized", false);
}

export default function*() {
  yield takeEvery(loginRequest, loginHandler);
  yield takeEvery(logout, logoutHandler);
}
