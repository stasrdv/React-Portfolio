import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* loginAsync() {
  yield put({ type: "LOGIN_PENDING" });
  yield delay(4000);
  yield put({ type: "LOGIN_SUCCESS", payload: true });
}

export function* watchLogin() {
  yield takeLatest("logIn", loginAsync);
}
