import React, { useState } from "react";
import icon from "./assets/Images/Icon/Icon.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import Navoptions from "./Navoptions";
import Mobilenavoptions from "./Mobilenavoptions";

function Navbar() {
  const navWidth = useMediaQuery("(min-width:920px)");
  const navOptionWidth = useMediaQuery("(min-width:1350px)");
  const movibleNavWidth = useMediaQuery("(min-width:566px)");
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
      linkTo: "/",
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
      linkTo: "gallery",
    },
    {
      option: "Contact Us",
      linkTo: "contact",
    },
  ];

  const logoFirstLetter = { color: "rgb(0 116 248)" };
  const logoLetter = { color: "rgb(61 61 61)" };

  return (
    <>
      <Paper
        className="navBar"
        elevation={24}
        style={
          movibleNavWidth != true
            ? { backgroundColor: "rgba(255,255,255,1)", height: "200px" }
            : { backgroundColor: "rgba(255,255,255,1)", height: "100px" }
        }
      >
        <div className="siteLogo">
          <img
            src={icon}
            alt="Icon"
            style={navWidth == true ? { width: "80px" } : { width: "50px" }}
          />
          <div
            style={
              navWidth == true
                ? { fontSize: "40px", margin: "0 0 0 10px" }
                : { fontSize: "30px", margin: "0 0 0 10px" }
            }
          >
            <span style={logoFirstLetter}>M</span>
            <span style={logoLetter}>echno </span>
            <span style={logoFirstLetter}>D</span>
            <span style={logoLetter}>ream </span>
            <span style={logoFirstLetter}>I</span>
            <span style={logoLetter}>ndustry</span>
          </div>
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
