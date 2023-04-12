import './App.css';
import VedioConfig from "./login/views/VedioConfig"

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' default element={<VedioConfig/>} />


      </Routes>
    </Router>
  );
}

export default App;
