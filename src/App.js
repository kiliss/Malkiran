import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import PopUp from "./components/PopUp";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <SideBar />


      <Routes>
        <Route path="/a" element={<PopUp />} />
        
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
