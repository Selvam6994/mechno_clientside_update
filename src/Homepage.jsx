import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import caroselImage1 from "../src/assets/Images/Carousel Images/Carosel image1.webp";
import caroselImage2 from "../src/assets/Images/Carousel Images/Carosel image2.webp";
import caroselImage3 from "../src/assets/Images/Carousel Images/Carosel image3.webp";
import Button from "@mui/material/Button";
import About from "./About";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import ScrolltoTop from "./ScrolltoTop";

function Homepage() {
  // Media query
  const movibleNavWidth = useMediaQuery("(min-width:470px)");

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const imageAndCaption = [
    {
      image: caroselImage1,
      caption: "The Next-Gen Industrial Automation",
    },
    {
      image: caroselImage2,
      caption: "Your Dream of Automation Ends Here!",
    },
    {
      image: caroselImage3,
      caption: "For all your Industrial Automation Needs",
    },
  ];

  return (
    <div className="homePage">
       <ScrolltoTop/>
      <Carousel className="carousel">
        {imageAndCaption.map((elements) => (
          <Carousel.Item key={elements.image}>
            <img
              className="carouselImage"
              src={elements.image}
              alt="First slide"
            />
            <Carousel.Caption
              className="carouselCaption"
              style={
                movibleNavWidth == true
                  ? { margin: "0 0 200px 0" }
                  : { margin: "0 0 50px 0" }
              }
            >
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <p
                  style={
                    movibleNavWidth != true
                      ? { fontSize: "30px" }
                      : { fontSize: "50px" }
                  }
                >
                  {elements.caption}
                </p>

                <Button variant="contained" onClick={handleClick}>
                  Explore
                </Button>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div ref={ref}>
        <About></About>
      </div>
    </div>
  );
}

export default Homepage;
