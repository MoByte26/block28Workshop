import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import {Red} from './Red.jsx'
import {Blue} from './Blue.jsx'
import {Home} from './Home.jsx'

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to={"/red"}> RED </Link>
        <Link to={"/blue"}> BLUE </Link>
        <Link to={"/home"}> HOME </Link>

      </div>
      <div id="main-section">
        <Routes>
        <Route path="/blue" element={< Blue />} />
        <Route path="/red" element={< Red />} />
        <Route path="/home" element={< Home />} />
        </Routes>
      </div>
    </div>
    
  )
}
export default App