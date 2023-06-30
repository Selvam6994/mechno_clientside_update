import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Industrial services/Safety fencing/Topimage.jpg";
import acrylicfencing from "../src/assets/Images/Industrial services/Safety fencing/Acralic robot safety fencing.jpg";
import aluminumDiamondFencing from "../src/assets/Images/Industrial services/Safety fencing/Aluminium Robot safety fencing.jpg";
import conveyorSafetyFencing from "../src/assets/Images/Industrial services/Safety fencing/Aluminium safety fencing for conveyor.jpg";
import spmSafetyFencing from "../src/assets/Images/Industrial services/Safety fencing/Aluminium safety fencing for spm.jpg";
import msPartitionFencing from "../src/assets/Images/Industrial services/Safety fencing/MS partition fencing.jpg";
import msRobotSafetyFencing from "../src/assets/Images/Industrial services/Safety fencing/MS Robot safety fencing.jpg";
import ScrolltoTop from "./ScrolltoTop";
function Safetyfencing() {
  const safetyFencing = [
    {
      name: "Acrylic Robot Safety Fencing",
      image: acrylicfencing,
    },
    {
      name: "Aluminum Diamond Fencing",
      image: aluminumDiamondFencing,
    },
    {
      name: "Conveyor Safety Fencing",
      image: conveyorSafetyFencing,
    },
    {
      name: "SPM Safety Fencing",
      image: spmSafetyFencing,
    },
    {
      name: "MS Partition Fencing",
      image: msPartitionFencing,
    },
    {
      name: "MS Robot Safety Fencing",
      image: msRobotSafetyFencing,
    },
  ];
  return (
    <div className="safetyFencingPage">
       <ScrolltoTop/>
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
        <h1>Safety Fencing</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Home</h2>
        </Link>
        <Link to={"/industrialservices"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Industrial Services</h2>
        </Link>
      </div>
      <div className="aboutSafetyFencing">
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
              Safety fencing plays a crucial role in preventing accidents,
              maintaining security, and ensuring compliance with safety
              regulations in various industries. It helps protect workers,
              visitors, and the surrounding environment from potential hazards
              and restricts access to areas where specific safety measures are
              necessary. Our industry ensures the safety and security of
              industries and machinery by designing and manufacturing
              high-quality, durable and scalable fencing solutions.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>The Works We Do</h2>
          <div className="safetyFencingImageCards">
            {safetyFencing.map((cardData) => (
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

export default Safetyfencing;
