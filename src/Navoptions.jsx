import { Button, Fab } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

function Navoptions({ options }) {
  const [serviceMenu, setServiceMenu] = useState(false);
  const [automationMenu, setAutomationMenu] = useState(false);


  //   nav buttons style.
  const navOptionStyle = {
    width: "130px",
    fontFamily: "Dosis",
    fontSize: "15px",
  };
 
  //Services  Sub menu options
  const serviceMenuOptions = [
    {
      name: "Fabrication",
      delay: 0.1,
      linkTo: "fabrications",
    },
    {
      name: "Trollys",
      delay: 0.2,
      linkTo: "trollys",
    },
    {
      name: "Jigs And Fixtures",
      delay: 0.3,
      linkTo: "jigsandfixtures",
    },
    {
      name: "Safety Fencing",
      delay: 0.4,
      linkTo: "safetyfencing",
    },
  ];

  // Automation sub menu options
  const automationMenuOptions = [
    {
      name: "Conveyors",
      delay: 0.1,
      linkTo: "conveyors",
    },
    {
      name: "Robotics",
      delay: 0.2,
      linkTo: "robotics",
    },
    {
      name: "Panel Design",
      delay: 0.3,
      linkTo: "paneldesign",
    },
  ];
  return (
    <div className="navOptions">
      {options.map((name) => (
        <Link to={name.linkTo}>
          {" "}
          <Fab
         style={navOptionStyle}
            variant="extended"
          
            onMouseEnter={
              name.subOption == "service"
                ? () => setServiceMenu(true)
                : name.subOption == "automation"
                ? () => setAutomationMenu(true)
                : ""
            }
            onMouseLeave={
              name.subOption == "service"
                ? () => setServiceMenu(false)
                : name.subOption == "automation"
                ? () => setAutomationMenu(false)
                : ""
            }
          >
            {name.subOption === "service" ? (
              <KeyboardArrowDownIcon />
            ) : name.subOption === "automation" ? (
              <KeyboardArrowDownIcon />
            ) : (
              ""
            )}
          {name.option}
            
            {name.subOption === "service" ? (
              serviceMenu == true ? (
                <div className="serviceMenu">
                  {serviceMenuOptions.map((subOption) => (
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: subOption.delay,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <Button variant="contained" style={{ width: "150px" }}>
                        {subOption.name}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                ""
              )
            ) : name.subOption === "automation" ? (
              automationMenu == true ? (
                <div className="automationMenu">
                  {automationMenuOptions.map((subOption) => (
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: subOption.delay,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <Button variant="contained" style={{ width: "150px" }}>
                        {subOption.name}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Fab>
        </Link>
      ))}
    </div>
  );
}

export default Navoptions;
