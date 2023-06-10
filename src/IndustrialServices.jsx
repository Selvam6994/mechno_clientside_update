import React from "react";
import industrialImage from "../src/assets/Images/Industrial services/Industrial services page image.jpg";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import enclosures from "../src/assets/Images/Industrial services/Enclosures/Aluminium enclosures.jpg";
import jigsFixtures from "../src/assets/Images/Industrial services/Jigs and fixtures/Jigs and fixtures.webp";
import pallets from "../src/assets/Images/Industrial services/Pallets/Transmission pallet for Transportation.jpg";
import safetyFencing from "../src/assets/Images/Industrial services/Safety fencing/MS robot safety fencing for production line.jpg";
import trolleysAndRacks from "../src/assets/Images/Industrial services/trollys and Racks/Closed Aluminium Profile trollys.jpg";
import workStation from "../src/assets/Images/Industrial services/Work stations/Aluminium Frame Workstations With Storage.jpg";
import { Link } from "react-router-dom";

function IndustrialServices() {
  const services = [
    {
      name: "Enclosures",
      image: enclosures,
      linkTo: "enclosures",
    },
    {
      name: "Jigs And Fixtures",
      image: jigsFixtures,
      linkTo: "jigs_and_fixtures",
    },
    {
      name: "Pallets",
      image: pallets,
      linkTo: "pallets",
    },
    {
      name: "Safety Fencing",
      image: safetyFencing,
      linkTo: "safetyfencing",
    },
    {
      name: "Trolleys And Racks",
      image: trolleysAndRacks,
      linkTo: "trolleys",
    },
    {
      name: "Work Station",
      image: workStation,
      linkTo: "workstations",
    },
  ];
  return (
    <div className="industrialServicesPage">
      <div className="topImage">
        <img
          src={industrialImage}
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
        <h1>Industrial Services</h1>
       <Link to={"/"} style={{textDecoration:"none"}}> <h2 >Home</h2></Link>
      </div>
      <div className="subDivisions">
        {services.map((cardData) => (
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

export default IndustrialServices;
