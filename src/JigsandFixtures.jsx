import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Industrial services/Jigs and fixtures/Topimage.jpg";
import cncFixture from "../src/assets/Images/Industrial services/Jigs and fixtures/CNC Fixture.jpg";
import hydraulicFixture from "../src/assets/Images/Industrial services/Jigs and fixtures/Hydraulic Fixture.jpg";
import vmcFixture from "../src/assets/Images/Industrial services/Jigs and fixtures/VMC Fixture.jpg";

function JigsandFixtures() {
  const jigsfixtures = [
    {
      name: "CNC Fixtures",
      image: cncFixture,
    },
    {
      name: "Hydraulic Fixtures",
      image: hydraulicFixture,
    },
    {
      name: "VMC Fixtures",
      image: vmcFixture,
    },
  ];
  return (
    <div className="jigsFixturesPage">
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
      <div className="aboutjigsAndFixtures">
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
              Manufacturing industries rely heavily on jigs and fixtures. The
              jigs and fixtures we manufacture for special purposes are designed
              and manufactured by our team of experts and experienced engineers.
              Generally, we manufacture tools for the automotive and general
              components manufacturing industries.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>The Works We Do</h2>
          <div className="jigsAndFixturesImageCards">
            {jigsfixtures.map((cardData) => (
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

export default JigsandFixtures;
