import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Login from "../login/views/Login"
import VedioCalling from '../vedio/VedioCalling';



function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' default element={<Login />} />
        <Route path="/vedioCall"  element={<VedioCalling/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
