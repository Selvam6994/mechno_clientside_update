import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import client1 from "../src/assets/Images/company icons/BONFIGLIOLI.png";
import client2 from "../src/assets/Images/company icons/ELFORGE.png";
import client3 from "../src/assets/Images/company icons/hyundai transys.png";
import client4 from "../src/assets/Images/company icons/Essae.png";
import client5 from "../src/assets/Images/company icons/Fives.png";

import client7 from "../src/assets/Images/company icons/Malles.png";
import client8 from "../src/assets/Images/company icons/Neel Metal.png";
import client9 from "../src/assets/Images/company icons/Novares.png";
import client10 from "../src/assets/Images/company icons/Tafe.png";
import client12 from "../src/assets/Images/company icons/JBM.png";
import client13 from "../src/assets/Images/company icons/Wia.png";
import client14 from "../src/assets/Images/company icons/NewTech.png";
import client15 from "../src/assets/Images/company icons/Alison.png";
import client16 from "../src/assets/Images/company icons/Bgrneo.png";
import { Paper } from "@mui/material";

function About() {
  // for about section transition
  const [transition, setTransition] = useState(0);

  const scroll = () => {
    if (window.scrollY >= 200) {
      setTransition(true);
    }
  };
  window.addEventListener("scroll", scroll);

  const clientLogos = [
    {
      image: client1,
    },
    {
      image: client4,
    },
    {
      image: client5,
    },
    {
      image: client7,
    },
    {
      image: client8,
    },
    {
      image: client9,
    },
    {
      image: client10,
    },
    {
      image: client12,
    },
    {
      image: client13,
    },
    {
      image: client14,
    },
    {
      image: client15,
    },
    {
      image: client16,
    },
    {
      image: client2,
    },
    {
      image: client3,
    },
  ];

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const carousel = useRef();

  return (
    <div>
      {transition == true ? (
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
            className="aboutUsPara"
            elevation={16}
            style={{ borderRadius: "20px" }}
          >
            <h1>
              <b style={{ color: "blue" }}>About Us</b>
            </h1>
            <p>
              <h2 style={{margin:"0 50px 0 50px"}}>
                Mechno Dream Industry is a Young, Efficient and Passionate
                workstation where all your industrial dreams would be brought
                into reality. The organization is established with the moto of
                converting the core mechanical industry into an Automation
                driven industry to ease your efforts thereby providing a
                tremendous boost to your efficiency and profit.
              </h2>
            </p>
          </Paper>

          <div className="vissionMissonSection">
            <Paper
              elevation={16}
              className="vision"
              style={{ borderRadius: "20px" }}
            >
              <motion.div
                className="visionContent"
                whileTap={{ cursor: "grabbing" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h2>
                  <b style={{ color: "blue" }}>Vision</b>
                </h2>
                <p>
                  <h4>
                    To transform our customer organizations by offering the
                    best-in-class services thereby to lead as the best
                    innovative player of Industrial Automation Services
                    Provider.
                  </h4>
                </p>
              </motion.div>
            </Paper>
            <Paper
              elevation={16}
              className="mission"
              style={{ borderRadius: "20px" }}
            >
              <motion.div
                className="missionContent"
                whileTap={{ cursor: "grabbing" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h2>
                  <b style={{ color: "blue" }}>Mission</b>
                </h2>
                <p>
                  <h4>
                    To remain a socially responsible entity , which would
                    constantly deliver premium quality, innovative industrial
                    solutions and a gratified customer experience.
                  </h4>
                </p>
              </motion.div>
            </Paper>
          </div>
        </motion.div>
      ) : (
        ""
      )}
      <motion.div
        className="clientCarousel"
        whileTap={{ cursor: "grabbing" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          ref={carousel}
          className="innerCarousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {clientLogos.map((logo) => {
            return (
              <motion.div className="item" whileTap={{ cursor: "grabbing" }}>
                <img src={logo.image} alt=""></img>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
