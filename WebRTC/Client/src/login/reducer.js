import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED} from "./actions";

const initialState = {
  users: [],
  loading: false,
  error: undefined,
};

export default function usersReducer(state = initialState, action) {

  switch ((action, action.type)) {
    
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
    //   console.log("state reducer", action.payload)
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
      };

    

    default:
      return state;
  }
}
