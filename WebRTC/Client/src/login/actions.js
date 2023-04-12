export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";



//get data
export function getUsersRequest(email,password) {
  return {
    type: GET_USERS_REQUEST,
    email:email,
    password:password
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
}

export function getUsersFailed(error) {
  return {
    type: GET_USERS_FAILED,
    payload: error,
  };
}

