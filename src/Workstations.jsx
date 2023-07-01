import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Industrial services/Work stations/Topimage.jpg";
import aluminiumStroageStation from "../src/assets/Images/Industrial services/Work stations/Aluminium Frame Workstations With Storage.jpg";
import aluminiumProfileStation from "../src/assets/Images/Industrial services/Work stations/Aluminium Frame Workstations.jpg";
import msStation from "../src/assets/Images/Industrial services/Work stations/MS Stand alone workstations.jpg";
import assemblyStation from "../src/assets/Images/Industrial services/Work stations/Assembly Work Station.jpg";
import ScrolltoTop from "./ScrolltoTop";

function Workstations() {
  const workStations = [
    {
      name: "Aluminium Profile Workstations",
      image: aluminiumProfileStation,
    },
    {
      name: "Closed Cabin Aluminium Profile Workstations",
      image: aluminiumStroageStation,
    },
    {
      name: "MS Stand alone workstations",
      image: msStation,
    },
    {
      name: "Assembly Work Stations",
      image: assemblyStation,
    },
  ];
  return (
    <div className="workstationPage">
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
        <h1>Work Stations</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2 style={{ textDecoration: "none", color: "white" }}>Home</h2>
        </Link>
        <Link
          to={"/industrialservices"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2 style={{ textDecoration: "none", color: "white" }}>
            Industrial Services
          </h2>
        </Link>
      </div>
      <div className="aboutWorkstation">
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
              Industrial workstations are designed to enhance productivity,
              efficiency, and safety in specific industrial processes. They are
              tailored to meet the unique requirements of different tasks,
              providing a dedicated space that supports workers in performing
              their duties effectively. In addition to manufacturing
              workstations for assembly, testing, quality control, storage,
              organization, and maintenance, we also provide maintenance and
              repair services
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>Our Work</h2>
          <div className="workstationImageCards">
            {workStations.map((cardData) => (
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

export default Workstations;
