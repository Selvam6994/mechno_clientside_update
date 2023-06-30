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
import useMediaQuery from "@mui/material/useMediaQuery";

function Footer({ clickToView }) {
  const socialMedia = [
    {
      name: "Instagram",
      icon: insta,
      link: "https://www.instagram.com/mechno_dream_industry/?igshid=ZDdkNTZiNTM%3D&__coig_restricted=1",
    },
    // {
    //   name: "Facebook",
    //   icon: faceBook,
    //   link: "",
    // },
    {
      name: "Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/mechno-dream-industry-777369191/",
    },
  ];

  const footerIndustrialServicesOptions = [
    {
      name: "Enclosure",
      delay: 0.1,
      linkTo: "industrialservices/enclosures",
    },
    {
      name: "Jigs And Fixtures",
      delay: 0.2,
      linkTo: "industrialservices/jigs_and_fixtures",
    },
    {
      name: "Pallets",
      delay: 0.3,
      linkTo: "industrialservices/pallets",
    },
    {
      name: "Safety Fencing",
      delay: 0.4,
      linkTo: "industrialservices/safetyfencing",
    },
    {
      name: "Trolleys",
      delay: 0.5,
      linkTo: "industrialservices/trolleys",
    },
    {
      name: "Work Stations",
      delay: 0.6,
      linkTo: "industrialservices/workstations",
    },
  ];

  const footerAutomationServicesOption = [
    {
      name: "Conveyors",
      delay: 0.1,
      linkTo: "automationservices/conveyors",
    },
    {
      name: "Robotics",
      delay: 0.2,
      linkTo: "automationservices/robotics",
    },
    {
      name: "Panel Design",
      delay: 0.3,
      linkTo: "automationservices/paneldesign",
    },
  ];
  // Media quries for footer starts
  const footerWidth = useMediaQuery("(min-width:1000px)");
  const contactDetailsWidth = useMediaQuery("(min-width:435px)");
  const fotterMinWidth = useMediaQuery("(min-width:380px)");
  const ourServicesButtonsWidth = useMediaQuery("(min-width:1130px)");

  // Media quries for footer ends

  const footerIcons = {
    fontSize: 40,
  };

  return (
    <div
      className={
        footerWidth == true
          ? "footer"
          : fotterMinWidth == true
          ? "footerMobile"
          : "footerMinWidth "
      }
    >
      <div
        className={
          footerWidth == true ? "contactDetails" : "contactDetailsMobile"
        }
      >
        <img className="logo" src={logo}></img>
        {contactDetailsWidth == true ? (
          <h1>Mechno Dream Industry</h1>
        ) : (
          <h3>Mechno Dream Industry</h3>
        )}
        <div className="locationDiv">
          <div>
            <LocationOnOutlinedIcon color="warning" sx={footerIcons} />
          </div>
          {contactDetailsWidth == true ? (
            <div>
              <h4>Sidco Women Industrial Estate,</h4>
              <h4>Thirumullaivoyal,</h4>
              <h4>Pappakuruchi Kattur,</h4>
              <h4>Tamil Nadu 600062</h4>
            </div>
          ) : (
            <div>
              <h6>Sidco Women Industrial Estate,</h6>
              <h6>Thirumullaivoyal,</h6>
              <h6>Pappakuruchi Kattur,</h6>
              <h6>Tamil Nadu 600062</h6>
            </div>
          )}
        </div>
        {contactDetailsWidth == true ? (
          <>
            <h4>
              <MailOutlineIcon color="warning" sx={footerIcons} />{" "}
              mechnodreamindustry@gmail.com
            </h4>
            <h4>
              <LocalPhoneIcon color="success" sx={footerIcons} />
              +917667995898
            </h4>
          </>
        ) : (
          <>
            <h6>
              <MailOutlineIcon color="warning" sx={footerIcons} />{" "}
              mechnodreamindustry@gmail.com
            </h6>
            <h6>
              <LocalPhoneIcon color="success" sx={footerIcons} />
              +917667995898
            </h6>
          </>
        )}

        <Link to="/contact">
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
                  margin: "20px 20px 0 0",
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
          <b style={{ textDecoration: "underLine" }}>Our Services</b>
        </h1>
        <div
          className={
            ourServicesButtonsWidth == true ? "buttonDiv" : "buttonDivMobile"
          }
        >
          <ul className="servicesDiv">
            {footerIndustrialServicesOptions.map((option) => (
              <Link onClick={clickToView} to={option.linkTo}>
                <h2>{option.name}</h2>
              </Link>
            ))}
          </ul>
          <div className="AutomationDiv">
            <ul className="servicesDiv">
              {footerAutomationServicesOption.map((option) => (
                <Link to={option.linkTo}>
                  <h2>{option.name}</h2>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
