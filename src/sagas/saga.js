import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* loginAsync() {
  yield put({ type: "LOGIN_PENDING" });
  yield delay(400);
  yield put({ type: "LOGIN_SUCCESS" });
}

export function* watchLogin() {
  yield takeLatest("logIn", loginAsync);
}
