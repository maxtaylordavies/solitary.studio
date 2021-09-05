import React from "react";
import { motion } from "framer-motion";

import logoLeft from "../../logo-left.svg";
import logoRight from "../../logo-right.svg";

import "./logos.css";

export const BigLogo = () => {
  return (
    <motion.div
      className="big-logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <img src={logoLeft} className="logo-left"></img>
      <img src={logoRight} className="logo-right"></img>
    </motion.div>
  );
};
