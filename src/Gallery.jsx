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
import { Galleryimageanimation } from "./Galleryimageanimation";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Gallery() {
  const itemData = [
    {
      img: image1,
      title: "partition Fencing",
      id: 1,
    },
    {
      img: image2,
      title: "Aluminium Safety Fencing",
      id: 2,
    },
    {
      img: image3,
      title: "Pneumatic Gripper",
      id: 3,
    },
    {
      img: image4,
      title: "Fixture ",
      id: 4,
    },
    {
      img: image5,
      title: "partition Fencing",
      id: 5,
    },
    {
      img: image6,
      title: "Ariel view of fencing",
      id: 6,
    },
    {
      img: image7,
      title: "Aluminium Enclosures",
      id: 7,
    },
    {
      img: image8,
      title: "Free Flow Racks",
      id: 8,
    },
    {
      img: image9,
      title: "MS Work Station",
      id: 9,
    },
    {
      img: image10,
      title: "SS Trolly",
      id: 10,
    },
    {
      img: image11,
      title: "SS Trolly",
      id: 11,
    },
    {
      img: image12,
      title: "Work Station",
      id: 12,
    },
    {
      img: image13,
      title: "Aluminium Rack",
      id: 13,
    },
  ];
  const [imageView, setImageView] = useState(false);
  return (
    <div className="gallery">
      <h2 style={{ margin: "150px 0 0 0" }}>Our Gallery</h2>
      <Box sx={{ width: "100%", height: "fitContent", margin: "50px 0 0 0" }}>
        <ImageList variant="masonry" cols={3} gap={20}>
          {itemData.map((item) => (
            <Paper elevation={8} style={{ borderRadius: "5%" }}>
              <ImageListItem key={item.img}>
                <img
                  style={{ borderRadius: "5%" }}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => setImageView(true)}
                />
              </ImageListItem>
            </Paper>
          ))}
        </ImageList>
      </Box>
      {imageView == true ? (
        <div className="viewImages">
          <IconButton aria-label="close" onClick={() => setImageView(false)}>
            <CloseIcon color="error" />
          </IconButton>

          <Galleryimageanimation></Galleryimageanimation>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Gallery;
