import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Automation Services/Panel Designing/Panel Wiring.jpg";
import panelDesign from "../src/assets/Images/Automation Services/Panel Designing/Panel.jpg";
import PLC from "../src/assets/Images/Automation Services/Panel Designing/PLC.jpg";
import panelAccessories from "../src/assets/Images/Automation Services/Panel Designing/Panel Accessories.jpg";
import VFD from "../src/assets/Images/Automation Services/Panel Designing/VFD.jpg";
import ScrolltoTop from "./ScrolltoTop";


function Paneldesign() {
  const panel = [
    {
      name: "Panel Desiging",
      image: panelDesign,
    },
    {
      name: "Panel Accessories",
      image: panelAccessories,
    },
    {
      name: "PLC",
      image: PLC,
    },
    {
      name: "VFD",
      image: VFD,
    },
  ];
  return (
    <div className="panelPage">
      <ScrolltoTop />
      <div className="topImage">
        <img
          src={topImage}
          alt="Image in contact page"
          style={{
            width: "100%",
            minWidth: "280px",
            height: "600px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="imageBox">
        <h1>Panel Design</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2>Home</h2>
        </Link>
        <Link to={"/automationservices"} style={{ textDecoration: "none" }}>
          <h2>Automation Services</h2>
        </Link>
      </div>
      <div className="aboutPanel">
        <motion.div
          className="aboutUs"
          whileTap={{ cursor: "grabbing" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Paper
            elevation={16}
            sx={{ borderRadius: "10px" }}
            className="summaryPaper"
          >
            <p>
              Panel designing, wiring, panel fabrications, and programming
              services are offered by Mechno Dream Industry. We also provide
              electrical components such as PLCs and their accessories,
              electrical fixtures, VFDs, and all panel accessories, as well as
              programming, robotics, and wiring hardness testing.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <div className="panelImageCards">
            {panel.map((cardData) => (
              <div className="imageAndTitle">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Paper
                    className="media"
                    elevation={16}
                    sx={{
                      borderRadius: "5%",
                    }}
                  >
                    <img src={cardData.image} alt={cardData.name} />
                  </Paper>
                </motion.div>
                <h3>{cardData.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paneldesign;
