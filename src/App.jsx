import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Homepage from "./Homepage";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="siteBody">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
