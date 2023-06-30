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
import Safetyfencing from "./Safetyfencing";
import TrolleyandRacks from "./TrolleyandRacks";
import Workstations from "./Workstations";
import Conveyors from "./Conveyors";
import Robotprogramming from "./Robotprogramming";
import Paneldesign from "./Paneldesign";


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
          <Route
            path="/industrialservices/safetyfencing"
            element={<Safetyfencing />}
          />
          <Route
            path="/industrialservices/trolleys"
            element={<TrolleyandRacks />}
          />
          <Route
            path="/industrialservices/workstations"
            element={<Workstations />}
          />
           <Route
            path="/automationservices/conveyors"
            element={<Conveyors />}
          />
           <Route
            path="/automationservices/robotics"
            element={<Robotprogramming />}
          />
           <Route
            path="/automationservices/paneldesign"
            element={<Paneldesign />}
          />
        </Routes>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
