import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../actions";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Authentication from "../../Auth/Authentication";

function Login() {
  const dispatch = useDispatch();

  const getState = useSelector((state) => {
    return {
      userData: state.usersReducer.users,
    };
  });

  const { userData } = getState;

  console.log("userData", userData);

  

  /*******LIFE CYCLE*******/

  // useEffect(() => {
  //   dispatch(getUsersRequest("Vky03@outlook.com", "password123"));
  // }, []);

  return (
    <div>
      <Typography variant="h3"> WebRTC SETUP</Typography>

      <Button
        variant="contained"
        onClick={() => {
          dispatch(getUsersRequest("Vky03@outlook.com", "password123"));
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
