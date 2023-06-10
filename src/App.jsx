import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Contactus from "./Contactus";
import IndustrialServices from "./IndustrialServices";
import AutomationServices from "./AutomationServices";
import Enclosures from "./Enclosures";
import JigsandFixtures from "./JigsandFixtures";
import Pallets from "./Pallets";

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
          <Route
            path="industrialservices/enclosures"
            element={<Enclosures />}
          />
          <Route
            path="/industrialservices/jigs_and_fixtures"
            element={<JigsandFixtures />}
          />

          <Route path="/industrialservices/pallets" element={<Pallets />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
