import { Button, Fab } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navoptions({ options }) {
  const [serviceMenu, setServiceMenu] = useState(false);
  const [automationMenu, setAutomationMenu] = useState(false);

  //   nav buttons style.
  const navOptionStyle = {
    width: "200px",
    fontFamily: "Dosis",
    fontSize: "15px",
  };

  //Services  Sub menu options
  const serviceMenuOptions = [
    {
      name: "Fabrication",
      delay: 0.1,
    },
    {
      name: "Trollys",
      delay: 0.2,
    },
    {
      name: "Jigs And Fixtures",
      delay: 0.3,
    },
    {
      name: "Safety Fencing",
      delay: 0.4,
    },
  ];

  // Automation sub menu options
  const automationMenuOptions = [
    {
      name: "Conveyors",
      delay: 0.1,
    },
    {
      name: "Robotics",
      delay: 0.2,
    },
    {
      name: "Panel Design",
      delay: 0.3,
    },
  ];
  return (
    <div className="navOptions">
      {options.map((name) => (
        <Fab
          variant="extended"
          style={navOptionStyle}
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
      ))}
    </div>
  );
}

export default Navoptions;
