import { put, call, takeEvery } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccessRequest,
  loginFailureRequest,
  logout
} from "../actions/auth";
import {
  getRouteRequest,
  getRouteSuccessRequest,
  getRouteFailureRequest,
  clearRoute,
  getAddressList,
  getAddressListSuccess
} from "../actions/map";
import { createOrder, createOrderSuccess, cancelOrder } from "../actions/order";
import API from "../backend";
import { editProfile } from "../actions/profile";

export default function* sagas() {
  // Login
  yield takeEvery(loginRequest, function*(action) {
    const { username, password } = action.payload;
    try {
      const response = yield call(API.auth.login, username, password);
      if (response.success) {
        window.localStorage.setItem("isAuthorized", true);
        yield put(loginSuccessRequest());
      } else {
        yield put(loginFailureRequest());
      }
    } catch (error) {
      yield put(getRouteFailureRequest());
    }
  });

  // Logout
  yield takeEvery(logout, function*(action) {
    yield window.localStorage.setItem("isAuthorized", false);
  });

  // Addresses list
  yield takeEvery(getAddressList, function*(action) {
    try {
      const response = yield call(API.map.addressList);
      const variants = response.addresses.map(address => ({
        value: address,
        label: address
      }));
      yield put(getAddressListSuccess(variants));
    } catch (error) {
      //err
    }
  });

  // Order create
  yield takeEvery(createOrder, function*(action) {
    const { fromWhere, toWhere } = action.payload;

    yield put(getRouteRequest());
    try {
      const coordinates = yield call(API.map.route, fromWhere, toWhere);
      yield put(getRouteSuccessRequest(coordinates));
      yield put(createOrderSuccess());
    } catch (error) {
      yield put(getRouteFailureRequest());
    }
  });

  // Refresh order
  yield takeEvery(cancelOrder, function*(action) {
    yield put(clearRoute());
  });

  // Edit profile
  yield takeEvery(editProfile, function*(action) {
    yield window.localStorage.setItem(
      "userInfo",
      JSON.stringify(action.payload)
    );
  });
}
