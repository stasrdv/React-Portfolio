import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* loginAsync() {
  yield delay(3000);
  yield put({ type: "ajax-request", payload: true });
}

export function* watchLogin() {
  yield takeLatest("logIn", loginAsync);
}
