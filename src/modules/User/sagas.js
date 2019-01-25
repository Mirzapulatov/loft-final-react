import { takeEvery } from "redux-saga/effects";
import { editProfile } from "./actions";

function* editProfileHandler(action) {
  yield window.localStorage.setItem("userInfo", JSON.stringify(action.payload));
}

export default function*() {
  yield takeEvery(editProfile, editProfileHandler);
}
