import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Contactus from "./Contactus";
import Fabrications from "./Fabrications";
import IndustrialServices from "./IndustrialServices";
import AutomationServices from "./AutomationServices";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="siteBody">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="industrialservices" element={<IndustrialServices />} />
          <Route path="automationservices" element={<AutomationServices />} />
          <Route path="fabrications" element={<Fabrications />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
