import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* loginAsync() {
  yield delay(1000);
  yield put({ type: "logIn", value: true });
}

export function* watchAgeUp() {
  yield takeLatest("logIn", loginAsync);
}
