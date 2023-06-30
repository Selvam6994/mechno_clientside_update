import React from "react";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import topImage from "../src/assets/Images/Industrial services/Pallets/Topimage.jpg";
import storagePallets from "../src/assets/Images/Industrial services/Pallets/Transmission Storage Pallets in the warehouse.jpg";
import transportationPallets from "../src/assets/Images/Industrial services/Pallets/Transmission pallet for Transportation.jpg";
import wareHousePallets from "../src/assets/Images/Industrial services/Pallets/Transmission Storage Pallets.jpg";
import ScrolltoTop from "./ScrolltoTop";
function Pallets() {
  const pallets = [
    {
      name: "Storage Pallets",
      image: storagePallets,
    },
    {
      name: "Transportation Pallets",
      image: transportationPallets,
    },
    {
      name: "Warehouse Pallets",
      image: wareHousePallets,
    },
  ];
  return (
    <div className="palletsPage">
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
        <h1>Pallets</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Home</h2>
        </Link>
        <Link to={"/industrialservices"} style={{ textDecoration: "none" }}>
          <h2  style={{ textDecoration: "none", color: "white" }}>Industrial Services</h2>
        </Link>
      </div>
      <div className="aboutPallets">
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
              Pallets play a crucial role in supply chains by facilitating the
              movement of goods, optimizing storage space, and enabling easy
              loading and unloading of products. They have become an integral
              part of modern logistics and are used worldwide for efficient and
              standardized material handling. We are one of the bulk
              manufacturers of pallets made from various materials such as
              different grades of plastic and metal.
            </p>
          </Paper>
        </motion.div>
        <div className="displayWorks">
          <h2>The Works We Do</h2>
          <div className="palletsImageCards">
            {pallets.map((cardData) => (
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

export default Pallets;
