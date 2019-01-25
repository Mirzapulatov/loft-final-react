import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import auth, { sagas as authSagas } from "./Auth";
import map, { sagas as mapSagas } from "./Map";
import order, { sagas as orderSagas } from "./Order";
import user, { sagas as userSagas } from "./User";

export default combineReducers({ auth, map, order, user });

export function* rootSaga() {
  yield fork(authSagas);
  yield fork(mapSagas);
  yield fork(orderSagas);
  yield fork(userSagas);
}
