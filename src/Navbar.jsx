import React, { useState } from "react";
import icon from "./assets/Images/Icon/Icon.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import Navoptions from "./Navoptions";
import Mobilenavoptions from "./Mobilenavoptions";
import { blue } from "@mui/material/colors";

function Navbar() {
  const navWidth = useMediaQuery("(min-width:920px)");
  const navOptionWidth = useMediaQuery("(min-width:1390px)");
  const movibleNavWidth = useMediaQuery("(min-width:470px)");
  // for nav logo color
  const [navStyle, setNavStyle] = useState(0);

  const navScroll = () => {
    if (window.scrollY >= 200) {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }
  };
  window.addEventListener("scroll", navScroll);

  //nav bar options
  const navBarOptions = [
    {
      option: "Home",
      linkTo:"/"
    },
    {
      option: "Services",
      subOption: "service",
    },
    {
      option: "Automation",
      subOption: "automation",
    },
    {
      option: "Gallery",
      linkTo:"gallery"
    },
    {
      option: "Contact Us",
      linkTo:"contact"
    },
  ];

  return (
    <>
      <Paper
        className="navBar"
        elevation={12}
        style={
          movibleNavWidth != true
            ? { backgroundColor: "rgba(255,255,255,0.2)", height: "200px" }
            : { backgroundColor: "rgba(255,255,255,0.2)", height: "100px" }
        }
      >
        <div className="siteLogo">
          <img
            src={icon}
            alt="Icon"
            style={navWidth == true ? { width: "80px" } : { width: "50px" }}
          />
          <span
            style={
              navWidth == true
                ? { fontSize: "40px", margin: "0 0 0 10px" }
                : { fontSize: "30px", margin: "0 0 0 10px" }
            }
          >
           <span>M</span><span>echno </span>D<span>ream </span>I<span>ndustry</span> 
          </span>
        </div>
        {navOptionWidth == true ? (
          <Navoptions options={navBarOptions}></Navoptions>
        ) : (
          <Mobilenavoptions></Mobilenavoptions>
        )}
      </Paper>
    </>
  );
}

export default Navbar;
