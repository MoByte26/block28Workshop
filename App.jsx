import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import './Red.jsx'
import './Blue.jsx'
import './Home.jsx'

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
        <Route path="/blue" element={<h1 className="blue">Blue</h1>} />
        <Route path="/red" element={<h1 className="red">Red</h1>} />
        <Route path="/home" element={<h1 className="home">Home</h1>} />
        </Routes>
      </div>
    </div>
    
  )
}
export default App