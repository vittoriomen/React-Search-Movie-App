
import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
 

  return (
    <div>
    <Navbar/>
      <main className="main-content">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Favorites" element={<Favorites/>}/>
        </Routes>
      
      </main>
    </div>
  );
  
}

export default App;
