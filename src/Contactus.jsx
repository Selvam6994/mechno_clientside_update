import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, useMediaQuery } from "@mui/material";
import contactBgImage from "./assets/Images/Background/Comtact Us Image.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { green, orange, pink, red } from "@mui/material/colors";
import { api } from "./global";
import ScrolltoTop from "./ScrolltoTop";

function Contactus() {
  // Media query
  // const contactSetionWidth = useMediaQuery("(min-width:645px)");
  const contactPageContentWidth = useMediaQuery("(min-width:910px)");
  const quotationSectionWidth = useMediaQuery("(min-width:1330px)");

  const [form, setForm] = useState(false);
  const [formMessage, setFormMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const detailsSectionWidth = useMediaQuery("(min-width:1200px)");

  const navigate = useNavigate();

  const formik_email = useFormik({
    initialValues: {
      companyname: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      file: "",
      otheroption: "",
      check: [],
    },

    validationSchema: yup.object({
      companyname: yup.string().required("*"),
      name: yup.string().required("*"),
      email: yup.string().required("*"),
      phone: yup.number().required("*"),
      message: yup.string().required("*"),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      if (formik_email.values.file != "") {
        const data = new FormData();
        data.append("file", values.file);
        const uploadFile = await fetch(`${api}/upload`, {
          method: "POST",
          headers: new Headers({ Accept: "application/json" }),
          body: data,
        });
        if (uploadFile.status == 200) {
          const result = await uploadFile.json();

          console.log("success");
        } else {
          console.log("failed");
        }
        const sendData = await fetch(`${api}/attachmentemail`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(values),
        });
        if (sendData.status == 200) {
          const result = await sendData.json();
          setFormMessage(true);
          setLoading(false);
          console.log("success");
        } else {
          console.log("failed");
        }
      } else {
        const sendData = await fetch(`${api}/onlymail`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(values),
        });
        if (sendData.status == 200) {
          const result = await sendData.json();
          setFormMessage(true);
          console.log("success");
        } else {
          console.log("failed");
        }
      }
    },
  });

  return (
    <div className="contactUsPage">
       <ScrolltoTop/>
      <div className="topImage">
        <img
          src={contactBgImage}
          alt="Image in contact page"
          style={{
            width: "100%",
            minWidth: "280px",
            height: "600px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="imageBox"></div>
      <div
        className={
          quotationSectionWidth == true
            ? "contactSection"
            : "contactSectionMobile"
        }
      >
        <div className="contactPageContent">
          <div className="communicationContent">
            <div
              className={
                contactPageContentWidth == true ? "purpose" : "purposeMobile"
              }
            >
              <span>Any Enquiries?</span>
              <span>Call us/ Mail us now</span>
            </div>
            <div
              className={
                contactPageContentWidth == true
                  ? "phoneAndMail"
                  : "phoneAndMailMobile"
              }
            >
              <span>
                <LocalPhoneIcon sx={{ fontSize: 40, color: green[500] }} />
                +917667995898
              </span>
              <span>
                <MailOutlineIcon sx={{ fontSize: 40, color: red[500] }} />
                mechnodreamindustry@gmail.com
              </span>
            </div>
            <div className="addressAndIcon">
              <LocationOnOutlinedIcon
                sx={{ fontSize: 40, color: orange[500] }}
              />
              <div
                className={
                  contactPageContentWidth == true
                    ? "addressSection"
                    : "addressSectionMobile"
                }
              >
                <span> Sidco Women Industrial Estate,</span>
                <span> Thirumullaivoyal,</span>
                <span> Pappakuruchi Kattur,</span>
                <span>Tamil Nadu 600062</span>
              </div>
            </div>
          </div>
        </div>
        <div className="quotationSection">
          <div
            className={
              quotationSectionWidth == true ? "textArea" : "textAreaMobile"
            }
          >
            <span>Need quotation?</span>
            <span>Drop a message here!</span>
            <span>Note : Have more than one file to attach?</span>
            <span>Kindly combine as single file before attaching</span>
          </div>
          <div>
            <form onSubmit={formik_email.handleSubmit}>
              {formMessage == false ? (
                <Box className="formSection">
                  {/* check box list starts */}

                  <div
                    className={
                      quotationSectionWidth == true
                        ? "wrapperDiv"
                        : "wrapperDivMobile"
                    }
                  >
                    {/* left part of form */}
                    <div className="formLeftPart">
                      <div className="checkBox">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                          }}
                        >
                          <Paper className="checkBoxPaper">
                            <FormControlLabel
                              value="Machining"
                              control={<Checkbox />}
                              label="Machining"
                              labelPlacement="Machining"
                              name="check"
                              onChange={formik_email.handleChange}
                            />
                            <FormControlLabel
                              value="Fabrication"
                              control={<Checkbox />}
                              label="Fabrication"
                              labelPlacement="Fabrication"
                              name="check"
                              onChange={formik_email.handleChange}
                            />

                            <FormControlLabel
                              value="Plastics Manufacturing"
                              control={<Checkbox />}
                              label="Plastics Manufacturing"
                              labelPlacement="Plastics Manufacturing"
                              name="check"
                              onChange={formik_email.handleChange}
                            />
                            <FormControlLabel
                              value="Electronics Manufacturing"
                              control={<Checkbox />}
                              label="Electronics Manufacturing"
                              labelPlacement="Electronics Manufacturing"
                              name="check"
                              onChange={formik_email.handleChange}
                            />
                            <FormControlLabel
                              value="Automation"
                              control={<Checkbox />}
                              label="Automation"
                              labelPlacement="Automation"
                              name="check"
                              onChange={formik_email.handleChange}
                            />

                            {/* check box list ends */}

                            {/* form text fiels starts */}
                            {/* others text fiels */}
                          </Paper>
                        </motion.div>
                        <motion.div
                          initial={{ x: -100 }}
                          animate={{ x: 0 }}
                          transition={{ type: "spring", duration: 2.5 }}
                        >
                          <Paper>
                            <FormControl fullWidth sx={{ m: 0 }}>
                              <TextField
                                label="Others"
                                type="text"
                                variant="standard"
                                placeholder="Other options"
                                id="standard-size-normal"
                                size="small"
                                name="otheroption"
                                onChange={formik_email.handleChange}
                              />
                            </FormControl>
                          </Paper>
                        </motion.div>
                      </div>
                    </div>

                    {/* right part of form */}
                    <div className="formRightPart">
                      <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", duration: 2.5 }}
                      >
                        <Paper>
                          <FormControl fullWidth sx={{ m: 0 }}>
                            <TextField
                              label={
                                formik_email.touched.companyname &&
                                formik_email.errors.companyname ? (
                                  <span
                                    style={{ color: "red" }}
                                  >{`Compnay Name${formik_email.errors.companyname}`}</span>
                                ) : (
                                  "Compnay Name"
                                )
                              }
                              type="text"
                              variant="standard"
                              placeholder="Name of your Company"
                              id="standard-size-normal"
                              size="small"
                              name="companyname"
                              onChange={formik_email.handleChange}
                              onBlur={formik_email.handleBlur}
                            />
                          </FormControl>
                        </Paper>
                      </motion.div>
                      <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", duration: 2.5 }}
                      >
                        <Paper>
                          <FormControl fullWidth sx={{ m: 0 }}>
                            <TextField
                              label={
                                formik_email.touched.name &&
                                formik_email.errors.name ? (
                                  <span
                                    style={{ color: "red" }}
                                  >{`Name${formik_email.errors.name}`}</span>
                                ) : (
                                  "Name"
                                )
                              }
                              type="text"
                              variant="standard"
                              placeholder="Your name"
                              id="standard-size-normal"
                              size="small"
                              name="name"
                              onChange={formik_email.handleChange}
                              onBlur={formik_email.handleBlur}
                            />
                          </FormControl>
                        </Paper>
                      </motion.div>
                      <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", duration: 2.5 }}
                      >
                        <Paper>
                          <FormControl fullWidth sx={{ m: 0 }}>
                            <TextField
                              label={
                                formik_email.touched.email &&
                                formik_email.errors.email ? (
                                  <span
                                    style={{ color: "red" }}
                                  >{`Email${formik_email.errors.email}`}</span>
                                ) : (
                                  "Email"
                                )
                              }
                              type="email"
                              variant="standard"
                              placeholder="Your email address"
                              id="standard-size-normal"
                              size="small"
                              name="email"
                              onChange={formik_email.handleChange}
                              onBlur={formik_email.handleBlur}
                            />
                          </FormControl>
                        </Paper>
                      </motion.div>
                      <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", duration: 2.5 }}
                      >
                        <Paper>
                          <FormControl fullWidth sx={{ m: 0 }}>
                            <TextField
                              label={
                                formik_email.touched.phone &&
                                formik_email.errors.phone ? (
                                  <span
                                    style={{ color: "red" }}
                                  >{`Phone ${formik_email.errors.phone}`}</span>
                                ) : (
                                  "Phone Number"
                                )
                              }
                              type="text"
                              variant="standard"
                              placeholder="Your contact number"
                              id="standard-size-normal"
                              size="small"
                              name="phone"
                              onChange={formik_email.handleChange}
                              onBlur={formik_email.handleBlur}
                            />
                          </FormControl>
                        </Paper>
                      </motion.div>
                    </div>
                  </div>
                  <div className="messageFileWrapper">
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      transition={{ type: "spring", duration: 2.5 }}
                    >
                      <FormControl fullWidth sx={{ m: 0 }}>
                        <TextField
                          variant="standard"
                          id="standard-size-normal"
                          label={
                            formik_email.touched.message &&
                            formik_email.errors.message ? (
                              <span
                                style={{ color: "red" }}
                              >{`Message${formik_email.errors.message}`}</span>
                            ) : (
                              "Message"
                            )
                          }
                          placeholder="Type your message here."
                          multiline
                          name="message"
                          onChange={formik_email.handleChange}
                          onBlur={formik_email.handleBlur}
                        />
                      </FormControl>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <FormControl fullWidth sx={{ m: 0 }}>
                        <TextField
                          sx={{ input: { color: "black" } }}
                          type="file"
                          color="success"
                          id="outlined-size-small"
                          name="file"
                          onChange={(e) => {
                            formik_email.setFieldValue(
                              "file",
                              e.target.files[0]
                            );
                          }}
                        />
                      </FormControl>
                    </motion.div>
                    {/* form text fiels ends */}
                    <div className="sendButtonDiv">
                    <Button 
                      type="submit"
                      variant="contained"
                      disabled={loading != true ? false : true}
                    >
                      {loading != true ? "Send" : "Please Wait..."}
                    </Button>
                    </div>
                  </div>
                </Box>
              ) : (
                <motion.div
                  className="emailButtonForm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        minWidth: 280,
                        height: "300px",
                      },
                    }}
                  >
                    <Paper
                      className="emailStatus"
                      elevation={16}
                      style={{
                        color: "rgb(61, 61, 61)",
                      }}
                    >
                      <h3>
                        We received your mail, our team will get back to you
                        soon.
                      </h3>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            navigate("/");
                            setFormMessage(false);
                            setForm(false);
                          }}
                        >
                          Back
                        </Button>
                      </div>
                    </Paper>
                  </Box>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
