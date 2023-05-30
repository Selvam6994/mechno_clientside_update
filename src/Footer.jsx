import React from "react";
import logo from "../src/assets/Images/Logo.webp";
import insta from "../src/assets/Images/Social Icons/instagram.png";
import faceBook from "../src/assets/Images/Social Icons/facebook.png";
import linkedin from "../src/assets/Images/Social Icons/linkedin.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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
    <div className="footer">
      <div className="contactDetails">
        <img className="logo" src={logo}></img>
        <h1>Mechno Dream Industry</h1>
        <div className="locationDiv">
          <div>
            <LocationOnOutlinedIcon color="warning" sx={{ fontSize: 40 }} />
          </div>
          <div>
            <h4>T-343,Sidco Women Industrial Estate,</h4>
            <h4>Thirumullaivoyal,</h4>
            <h4>Pappakuruchi Kattur,</h4>
            <h4>Tamil Nadu 600062</h4>
          </div>
        </div>
        <h4>
          <MailOutlineIcon color="warning" sx={{ fontSize: 40 }} />{" "}
          mechnodreamindustry@gmail.com
        </h4>
        <h4>
          <LocalPhoneIcon color="success" sx={{ fontSize: 40 }} />
          +917667995898
        </h4>
        <Link to="/quotation">
          {" "}
          <Button variant="contained" color="success">
            Get Quote
          </Button>
        </Link>
        <div className="socialMediaSection">
          {socialMedia.map((media) => (
            <a href={media.link} target={"_blank"}>
              <img
                style={{
                  width: "50px",
                  margin: "20px 0 0 0",
                }}
                src={media.icon}
                alt={media.name}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="ourServicesDiv">
        <h1>
          <b>Our Products and Services</b>
        </h1>
        <div className="buttonDiv">
          <ul className="servicesDiv">
            <h2>Fabrications</h2>
            <h2>Trollys</h2>
            <h2>Jigs & Fixtures</h2>
            <h2>Safety Fencing</h2>
          </ul>
          <div className="AutomationDiv">
            <ul className="servicesDiv">
              <h2>Conveyors</h2>
              <h2>Robot Programming</h2>
              <h2>Panel Design</h2>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
