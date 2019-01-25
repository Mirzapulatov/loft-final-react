import { takeEvery, put, call } from "redux-saga/effects";
import { createOrder, createOrderSuccess, cancelOrder } from "./actions";
import {
  getRouteRequest,
  getRouteSuccessRequest,
  getRouteFailureRequest,
  clearRoute
} from "../Map";
import { route as routeRequestAPI } from "../Map/api";

function* createOrderHandler(action) {
  const { fromWhere, toWhere } = action.payload;
  yield put(getRouteRequest());
  try {
    const coordinates = yield call(routeRequestAPI, fromWhere, toWhere);
    yield put(getRouteSuccessRequest(coordinates));
    yield put(createOrderSuccess());
  } catch (error) {
    yield put(getRouteFailureRequest());
  }
}

function* cancelOrderHandler(action) {
  yield put(clearRoute());
}

export default function*() {
  yield takeEvery(createOrder, createOrderHandler);
  yield takeEvery(cancelOrder, cancelOrderHandler);
}
