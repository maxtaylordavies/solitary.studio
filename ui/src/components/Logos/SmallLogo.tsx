import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logoLeft from "../../logo-left.svg";
import logoRight from "../../logo-right.svg";

import "./logos.css";

export const SmallLogo = () => {
  return (
    <Link to="/">
      <motion.div className="small-logo" whileHover={{ scale: 1.05 }}>
        <img src={logoLeft} className="small-logo-left"></img>
        <img src={logoRight} className="small-logo-right"></img>
      </motion.div>
    </Link>
  );
};
