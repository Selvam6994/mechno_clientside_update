import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Automation Services/Robotics/Topimage.jpg";
import programming from "../src/assets/Images/Automation Services/Robotics/Robot Programming.jpg";
import nachi from "../src/assets/Images/Automation Services/Robotics/Nachi.jpg";
// import yaskawa from "../src/assets/Images/Automation Services/Robotics/Yaskawa.jpg";
import ScrolltoTop from "./ScrolltoTop";

function Robotprogramming() {
  const robotics = [
    {
      name: "ABB ",
      image: programming,
    },
    {
        name: "NACHI",
        image: nachi,
      },
      // {
      //   name: "YASKAWA",
      //   image: yaskawa,
      // }
  ];
  return (
    <div className="roboticsPage">
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
        <h1>Robotics</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Home</h2>
        </Link>
        <Link to={"/automationservices"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Automatin Services</h2>
        </Link>
      </div>
      <div className="aboutRobotics">
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
              Robot programming involves technical knowledge, robotic kinematics
              knowledge, programming skills, and familiarity with specific
              brands and models of robots. Robot manufacturers offer proprietary
              programming languages for industrial robots, as well as
              industry-standard languages such as RAPID (ABB robots), KRL (KUKA
              robots), and FANUC's TP programming language. Sensors, such as
              vision systems, force/torque sensors, or proximity sensors, can be
              installed on robots. Programming includes integrating these
              sensors into the robot's operation. Using vision systems, robots
              can locate objects, identify features, or guide their movements
              based on visual feedback. Calibration is necessary to ensure
              precise movement and positioning of industrial robots. This
              involves programming the robot to perform calibration routines to
              compensate for any errors or inaccuracies in its mechanical
              structure or sensors.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>The Works We Do</h2>
          <div className="roboticsImageCards">
            {robotics.map((cardData) => (
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

export default Robotprogramming;
