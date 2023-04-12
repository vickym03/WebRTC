import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../actions";
import axios from "axios";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function VedioConfig() {
  const dispatch = useDispatch();

  const getState = useSelector((state) => {
    return {
      userData: state.users.users,
    };
  });

  const { userData } = getState;

  const mapData =
    userData &&
    userData !== undefined &&
    userData.length > 0 &&
    userData.map((data, index) => {
      return (
        <div key={index}>
          <h5> {data.email}</h5>
        </div>
      );
    });

  /*******LIFE CYCLE*******/

  // useEffect(() => {
  //   dispatch(getUsersRequest("Vky03@outlook.com", "password123"));
  // }, []);

  // const url = "http://localhost:5000/login";
  // const data = {
  //   email: "Vky03@outlook.com",
  //   password: "password123",
  // };
  // const a = axios
  //   .post(url, data)
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
  // console.log("a",a);
  
  return (
    <div>
      <Typography variant="h3"> WebRTC SETUP</Typography>

      {mapData}
      <Button variant="contained" onClick={()=>{    dispatch(getUsersRequest("Vky03@outlook.com", "password123"));
}}>Login</Button>

    </div>
  );
}

export default VedioConfig;
