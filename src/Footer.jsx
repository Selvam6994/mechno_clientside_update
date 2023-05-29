import React from "react";
import logo from "../src/assets/Images/Logo.webp";
import insta from "../src/assets/Images/Social Icons/instagram.png";
import faceBook from "../src/assets/Images/Social Icons/facebook.png";
import linkedin from "../src/assets/Images/Social Icons/linkedin.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";



function Footer() {


    const socialMedia = [
      {
        name: "Instagram",
        icon: insta,
        link: "https://www.instagram.com/mechno_dream_industry/?igshid=ZDdkNTZiNTM%3D&__coig_restricted=1",
      },
      {
        name: "Facebook",
        icon: faceBook,
        link: "",
      },
      {
        name: "Linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/mechno-dream-industry-777369191/",
      },
    ];
  return (
    <div className='footer'>Footer</div>
  )
}

export default Footer