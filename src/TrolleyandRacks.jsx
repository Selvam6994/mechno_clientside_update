import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Industrial services/trollys and Racks/Stainless Steel Trollys.jpg";
import absFreeflowracks from "../src/assets/Images/Industrial services/trollys and Racks/ABS Free-Flow Storage Racks.jpg";
import aluminiumFreeflowracks from "../src/assets/Images/Industrial services/trollys and Racks/Aluminium Profile Free-Flow Racks.jpg";
import closedAluminiumTrollys from "../src/assets/Images/Industrial services/trollys and Racks/Closed Aluminium Profile trollys.jpg";
import opendAluminiumTrollys from "../src/assets/Images/Industrial services/trollys and Racks/Opend Aluminium Profile Trollys.jpg";
import ssStorageTrollys from "../src/assets/Images/Industrial services/trollys and Racks/SS pipe storage trollys.jpg";
import ssTrollys from "../src/assets/Images/Industrial services/trollys and Racks/Stainless Steel Trollys.jpg";
import ScrolltoTop from "./ScrolltoTop";

function TrolleyandRacks() {
  const trolleysAndRacks = [
    {
      name: "ABS Free-Flow Storage Racks",
      image: absFreeflowracks,
    },
    {
      name: "Aluminium Profile Free-Flow Racks",
      image: aluminiumFreeflowracks,
    },
    {
      name: "Closed Aluminium Profile Trolleys",
      image: closedAluminiumTrollys,
    },
    {
      name: "Opend Aluminium Profile Trolleys",
      image: opendAluminiumTrollys,
    },
    {
      name: "SS Pipe Storage Trolleys",
      image: ssStorageTrollys,
    },
    {
      name: "SS Pipe Trolleys",
      image: ssTrollys,
    },
  ];
  return (
    <div className="trollyPage">
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
        <h1>Racks And Trolleys</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Home</h2>
        </Link>
        <Link
          to={"/industrialservices"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2>Industrial Services</h2>
        </Link>
      </div>
      <div className="aboutTrolleys">
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
              Racks and trolleys serve different purposes in different
              industries, providing a convenient and efficient means of
              transporting goods, as well as efficient storage and organization
              solutions. Among our specialities are designing and manufacturing
              specialized racks and trolleys for Material Handling, Assembly
              Line Operations, Maintenance and Tool Handling, Ergonomics and
              Safety.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>The Works We Do</h2>
          <div className="trolleysImageCards">
            {trolleysAndRacks.map((cardData) => (
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

export default TrolleyandRacks;
