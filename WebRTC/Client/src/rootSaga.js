import { all } from "@redux-saga/core/effects";

import { userSaga } from "./login/sagas";

export default function* rootSaga() {
  yield all([...userSaga,]);
}
