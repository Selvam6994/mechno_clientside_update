import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Automation Services/Conveyors/Topimage.jpg";
import flatBeltConveyor from "../src/assets/Images/Automation Services/Conveyors/Belt conveyor.jpg";
import inclinedBeltConveyor from "../src/assets/Images/Automation Services/Conveyors/Inclined belt conveyor.jpg";
import chainConveyor from "../src/assets/Images/Automation Services/Conveyors/Chain Conveyor.jpg";
import ScrolltoTop from "./ScrolltoTop";

function Conveyors() {
  const conveyors = [
    {
      name: " Flat Belt Conveyors",
      image: flatBeltConveyor,
    },
    {
      name: "Inclined Belt Conveyors",
      image: inclinedBeltConveyor,
    },
    {
      name: "Chain Conveyors",
      image: chainConveyor,
    },
  ];
  return (
    <div className="conveyorsPage">
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
        <h1>Conveyors</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Home</h2>
        </Link>
        <Link to={"/automationservices"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Automation Services</h2>
        </Link>
      </div>
      <div className="aboutConveyors">
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
              Conveyor systems facilitate the efficient, fast, and automated
              movement of materials and products in modern industrial processes.
              With our conveyor systems, industrial facilities can increase
              productivity, improve safety, and optimize workflow. They can also
              be integrated with other equipment and machinery, including
              packaging machines, sorting machines, weighing scales, and
              robotics. As a result of this integration, the entire production
              or logistics process can be automated and enhanced to ensure
              seamless material flow.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>Our Work</h2>
          <div className="conveyorsImageCards">
            {conveyors.map((cardData) => (
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

export default Conveyors;
