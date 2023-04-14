import React from 'react'
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

console.log("token", token)

function Authentication() {
  return (
    <div>
      
    </div>
  )
}

export default Authentication
