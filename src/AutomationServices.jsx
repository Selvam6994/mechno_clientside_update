import React from "react";
import automationImage from "../src/assets/Images/Automation Services/Automation services.jpg";
import conveyor from "../src/assets/Images/Automation Services/Conveyors/Belt conveyor.jpg";
import panelWiring from "../src/assets/Images/Automation Services/Panel Wiring.jpg";
import robotProgram from "../src/assets/Images/Automation Services/Robot Programming.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import ScrolltoTop from "./ScrolltoTop";

function AutomationServices() {
  const automationServices = [
    {
      name: "Conveyors",
      image: conveyor,
      linkTo: "conveyors",
    },
    {
      name: "Panel Designing",
      image: panelWiring,
      linkTo: "paneldesiging",
    },
    {
      name: "Robot Programming",
      image: robotProgram,
      linkTo: "robotProgram",
    },
  ];
  return (
    <div className="automationServicesPage">
       <ScrolltoTop/>
      <div className="topImage">
        <img
          src={automationImage}
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
        <h1>Automation Services</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          {" "}
          <h2>Home</h2>
        </Link>
      </div>
      <div className="subDivisions">
        {automationServices.map((cardData) => (
          <div className="imageAndTitle">
            <Link to={cardData.linkTo}>
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
            </Link>
            <h2>{cardData.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutomationServices;
