import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import topImage from "../src/assets/Images/Industrial services/Enclosures/Top image.jpg";
import { Link } from "react-router-dom";
import aluminiumEnclosures from "../src/assets/Images/Industrial services/Enclosures/Aluminium enclosures.jpg";
import safetyEnclosures from "../src/assets/Images/Industrial services/Enclosures/Aluminium safety enclosures.jpg";
import aluminumProfileEnclosures from "../src/assets/Images/Industrial services/Enclosures/Aluminium Profile Enclosures.jpg";
function Enclosures() {
  const enclosures = [
    {
      name: "Aluminium Enclosures",
      image: aluminiumEnclosures,
    },
    {
      name: "Acrylic Enclosures",
      image: safetyEnclosures,
    },
    {
      name: "Aluminium Profile Enclosures",
      image: aluminumProfileEnclosures,
    },
  ];
  return (
    <div className="enclosuresPage">
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
        <h1>Machine Enclosures</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2>Home</h2>
        </Link>
        <Link to={"/industrialservices"} style={{ textDecoration: "none" }}>
          <h2>Industrial Services</h2>
        </Link>
      </div>
      <div className="aboutEnclosures">
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
              Machine enclosures are structured cabinets that cover the hardware
              components and electrical circuits, thus enhancing aesthetics and
              providing safety protection.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>The Works We Do</h2>
          <div className="enclosuresImageCards">
            {enclosures.map((cardData) => (
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

export default Enclosures;
