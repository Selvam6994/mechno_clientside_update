import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
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


const images = [
 image1,
 image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13
];
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Galleryimageanimation = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img style={{margin:" 0 0 20px 0"}}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};
