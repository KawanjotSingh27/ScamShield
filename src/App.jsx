import Navbar from "./components/navbar.jsx";
import { Routes,Route } from "react-router-dom";
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Trends from './components/trends.jsx';
import Report from './components/report.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';

function App(){
  return(
    <div className="p-3">
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trends" element={<Trends />}/>
            <Route path="/report" element={<Report />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App;