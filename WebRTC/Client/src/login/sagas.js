import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USERS_REQUEST,getUsersSuccess, getUsersFailed } from "./actions";
import { Userapi } from "../core/Userapi";

function* fetchUsers(action) {
    const { payload, error } = yield call(Userapi.loginApi, action)
    if (payload) {
        console.log("saga pay", payload)
        yield put(getUsersSuccess(payload))
    } else {
        yield put(getUsersFailed(error))
    }

}

// function* fetchUsers(action) {

//   try {
//     const payload = yield call(Userapi.loginApi, action);

//     if (payload ) {
//       yield put(getUsersSuccess(payload));
//     }
//   } catch (error) {
//     yield put(getUsersFailed(error));
//   }
// }

export const userSaga = [takeLatest(GET_USERS_REQUEST, fetchUsers)];
