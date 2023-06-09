import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Fab } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

function Mobilenavoptions() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [serviceSub, setServiceSubMenu] = useState(false);
  const [automationSub, setAutomationSubMenu] = useState(false);

  //   main menu
  const mainMenu = [
    {
      option: "Home",
      delay: 0.1,
      linkTo: "/",
    },
    {
      option: "Services",
      subOption: "service",
      delay: 0.2,
    },
    {
      option: "Automation",
      subOption: "automation",
      delay: 0.3,
    },
    {
      option: "Gallery",
      delay: 0.4,
      linkTo: "gallery",
    },
    {
      option: "Contact Us",
      delay: 0.5,
      linkTo: "contact",
    },
  ];

  //   service sub menu
  const serviceSubMenu = [
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
      name: "Racks And Trolleys",
      delay: 0.5,
      linkTo: "industrialservices/trolleys",
    },
    {
      name: "Work Stations",
      delay: 0.6,
      linkTo: "industrialservices/workstations",
    },
  ];

  // automation sub menu
  const automationSubMenu = [
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
  return (
    <div className="mobileMenuBox">
      <Fab
        variant="extended"
        onClick={() => {
          menuIcon == false ? setMenuIcon(true) : setMenuIcon(false);
        }}
      >
        {menuIcon == false ? <MenuIcon /> : <CloseIcon />}
      </Fab>
      {menuIcon == true ? (
        <div className="mobileViewMenu">
          <div className="mainMenu">
            {mainMenu.map((name) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: name.delay,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Link to={name.linkTo}>
                  <Button
                    variant="contained"
                    style={{ width: "150px" }}
                    onMouseEnter={
                      name.subOption === "service"
                        ? () => setServiceSubMenu(true)
                        : name.subOption === "automation"
                        ? () => setAutomationSubMenu(true)
                        : ""
                    }
                    onMouseLeave={
                      name.subOption === "service"
                        ? () => setServiceSubMenu(false)
                        : name.subOption === "automation"
                        ? () => setAutomationSubMenu(false)
                        : ""
                    }
                    onClick={() => {
                      {
                        name.subOption === "service" ||
                        name.subOption === "automation"
                          ? setMenuIcon(true)
                          : setMenuIcon(false);
                      }
                    }}
                  >
                    {name.subOption === "service" ||
                    name.subOption === "automation" ? (
                      <ArrowBackIosIcon />
                    ) : (
                      ""
                    )}
                    {name.option}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="subMenu">
            {serviceSub == true ? (
              <div
                className="serviceSubMenu"
                onMouseEnter={() => setServiceSubMenu(true)}
                onMouseLeave={() => setServiceSubMenu(false)}
              >
                {serviceSubMenu.map((option) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: option.delay,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Link to={option.linkTo}>
                      <Button
                        variant="contained"
                        style={{ width: "150px" }}
                        onClick={() =>
                          setServiceSubMenu(false) || setMenuIcon(false)
                        }
                      >
                        {option.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              ""
            )}
            {automationSub == true ? (
              <div
                className="automationSubMenu"
                onMouseEnter={() => setAutomationSubMenu(true)}
                onMouseLeave={() => setAutomationSubMenu(false)}
              >
                {automationSubMenu.map((option) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: option.delay,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Link to={option.linkTo}>
                      <Button
                        variant="contained"
                        style={{ width: "150px" }}
                        onClick={() =>
                          setAutomationSubMenu(false) || setMenuIcon(false)
                        }
                      >
                        {option.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Mobilenavoptions;
