import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "./assets/Images/Gallery/Image01.jpg";
import image2 from "./assets/Images/Gallery/Image02.jpg";
import image3 from "./assets/Images/Gallery/Image03.jpg";
import image4 from "./assets/Images/Gallery/Image04.jpg";
import image5 from "./assets/Images/Gallery/Image05.jpg";
import image6 from "./assets/Images/Gallery/Image06.jpg";
import image7 from "./assets/Images/Gallery/Image07.jpg";
import image8 from "./assets/Images/Gallery/Image08.jpg";
import image9 from "./assets/Images/Gallery/Image09.jpg";
import image10 from "./assets/Images/Gallery/Image10.jpg";
import image11 from "./assets/Images/Gallery/Image11.jpg";
import image12 from "./assets/Images/Gallery/Image12.jpg";
import image13 from "./assets/Images/Gallery/Image13.jpg";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
// import { Galleryimageanimation } from "./Galleryimageanimation";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

function Gallery() {
  const itemData = [
    {
      img: image1,
      title: "partition Fencing",
      transDelay: "0.1",
      id: 1,
    },
    {
      img: image2,
      title: "Aluminium Safety Fencing",
      transDelay: "0.2",
      id: 2,
    },
    {
      img: image3,
      title: "Pneumatic Gripper",
      transDelay: "0.3",
      id: 3,
    },
    {
      img: image4,
      title: "Fixture ",
      transDelay: "0.4",
      id: 4,
    },

    {
      img: image6,
      title: "Ariel view of fencing",
      transDelay: "0.5",
      id: 6,
    },
    {
      img: image7,
      title: "Aluminium Enclosures",
      transDelay: "0.6",
      id: 7,
    },
    {
      img: image8,
      title: "Free Flow Racks",
      transDelay: "0.7",
      id: 8,
    },
    {
      img: image9,
      title: "MS Work Station",
      transDelay: "0.8",
      id: 9,
    },
    {
      img: image10,
      title: "SS Trolly",
      transDelay: "0.9",
      id: 10,
    },
    {
      img: image11,
      title: "SS Trolly",
      transDelay: "1",
      id: 11,
    },
    {
      img: image12,
      title: "Work Station",
      transDelay: "1.1",
      id: 12,
    },
    {
      img: image13,
      title: "Aluminium Rack",
      transDelay: "1.2",
      id: 13,
    },
  ];

  const galleryWidth = useMediaQuery("(min-width:1390px)");
  const [imageView, setImageView] = useState(false);
  const [imageData, setImageData] = useState("");

  return (
    <div className="gallery">
      <h2 style={{ margin: "150px 0 0 0" }}>Our Gallery</h2>
      <Box sx={{ width: "100%", height: "fitContent", margin: "50px 0 0 0" }}>
        <ImageList variant="masonry" cols={3} gap={20}>
          {itemData.map((item) => (
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: item.transDelay,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Paper elevation={8} style={{ borderRadius: "5%" }}>
                <ImageListItem key={item.img}>
                  <img
                    style={{ borderRadius: "5%", cursor: "pointer" }}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => {
                      galleryWidth == true
                        ? setImageView(true) || setImageData(item)
                        : setImageView(false);
                    }}
                  />
                </ImageListItem>
              </Paper>
            </motion.div>
          ))}
        </ImageList>
      </Box>
      {/* image card view */}
      {imageView == true ? (
        <div className="viewImages">
          <motion.div
            style={{
              width: "35%",
              height: "650px",
              objectFit: "cover",
              borderRadius: "5%",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Paper
              elevation={24}
              style={{
                borderRadius: "5%",
              }}
            >
              <img
                src={imageData.img}
                alt={imageData.title}
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "5% 5% 0 0",
                }}
              />
              <CardContent>
                <h4>{imageData.title}</h4>
              </CardContent>
              <CardActions>
                <Button onClick={() => setImageView(false)}>
                  <ArrowBackIcon />
                  Back
                </Button>
              </CardActions>
            </Paper>
          </motion.div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Gallery;
