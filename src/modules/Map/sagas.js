import { takeEvery, put, call } from "redux-saga/effects";
import { getAddressList, getAddressListSuccess } from "./actions";
import { addressList as addressListRequestAPI } from "./api";

function* getAddressHandler(action) {
  try {
    const response = yield call(addressListRequestAPI);
    const variants = response.addresses.map(address => ({
      value: address,
      label: address
    }));
    yield put(getAddressListSuccess(variants));
  } catch (error) {
    //err
  }
}

export default function*() {
  yield takeEvery(getAddressList, getAddressHandler);
}
